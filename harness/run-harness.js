#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

const files = {
  readme: exists('README.md') ? read('README.md') : '',
  coreRules: exists('docs/gostop-core-rules.md') ? read('docs/gostop-core-rules.md') : '',
  tutorSpec: exists('docs/gostop-tutor-spec.md') ? read('docs/gostop-tutor-spec.md') : '',
  uiSpec: exists('docs/gostop-ui-spec.md') ? read('docs/gostop-ui-spec.md') : '',
  backlog: exists('docs/gostop-backlog.md') ? read('docs/gostop-backlog.md') : '',
  script: exists('script.js') ? read('script.js') : '',
  index: exists('index.html') ? read('index.html') : '',
  styles: exists('styles.css') ? read('styles.css') : ''
};

const checklist = JSON.parse(read('harness/checklist.json'));

function hasPattern(haystack, pattern) {
  return haystack.includes(pattern);
}

function statusLabel(ok) {
  return ok ? 'PASS' : 'FAIL';
}

function color(ok) {
  return ok ? '\x1b[32m' : '\x1b[31m';
}

function reset() {
  return '\x1b[0m';
}

function sourceBucketFor(item) {
  if (item.category === 'rules') return [files.coreRules, files.script];
  if (item.category === 'ui') return [files.uiSpec, files.index + '\n' + files.styles + '\n' + files.script];
  if (item.category === 'tutor') return [files.tutorSpec, files.script + '\n' + files.index];
  if (item.category === 'turn-flow') return [files.backlog + '\n' + files.tutorSpec, files.script];
  if (item.category === 'learning') return [files.uiSpec + '\n' + files.tutorSpec, files.index + '\n' + files.script];
  return [files.readme + '\n' + files.coreRules + '\n' + files.tutorSpec + '\n' + files.uiSpec, files.script + '\n' + files.index + '\n' + files.styles];
}

function evaluateChecklistItem(item) {
  const [docSource, codeSource] = sourceBucketFor(item);
  const missingDoc = (item.docPatterns || []).filter((pattern) => !hasPattern(docSource, pattern));
  const missingCode = (item.codePatterns || []).filter((pattern) => !hasPattern(codeSource, pattern));
  return {
    ...item,
    ok: missingDoc.length === 0 && missingCode.length === 0,
    missingDoc,
    missingCode
  };
}

function extractBacklogIssues() {
  const lines = files.backlog.split(/\r?\n/);
  const items = [];
  let currentTitle = null;
  for (const line of lines) {
    if (line.startsWith('### ')) {
      currentTitle = line.replace(/^###\s+/, '').trim();
      continue;
    }
    const match = line.match(/- 상태: `([^`]+)`/);
    if (match && currentTitle) {
      items.push({ title: currentTitle, status: match[1] });
      currentTitle = null;
    }
  }
  return items;
}

function runStructuralChecks() {
  const checks = [];
  checks.push({
    id: 'files_exist',
    ok: ['README.md', 'docs/gostop-core-rules.md', 'docs/gostop-tutor-spec.md', 'docs/gostop-ui-spec.md', 'docs/gostop-backlog.md', 'index.html', 'script.js', 'styles.css'].every(exists),
    message: '핵심 문서와 엔트리 파일이 모두 존재하는지'
  });
  checks.push({
    id: 'backlog_has_critical',
    ok: extractBacklogIssues().some((item) => item.status === '치명'),
    message: '백로그에 치명 이슈 상태 추적이 있는지'
  });
  checks.push({
    id: 'script_has_watchdog',
    ok: hasPattern(files.script, 'function startAiWatchdog()') && hasPattern(files.script, 'function ensureAiTurnProgress()'),
    message: '턴 멈춤 보호용 watchdog/ensure 함수가 있는지'
  });
  return checks;
}

function printSection(title) {
  console.log(`\n=== ${title} ===`);
}

function main() {
  console.log('고스돕 하네스 검사');
  console.log(`기준 경로: ${ROOT}`);

  const structural = runStructuralChecks();
  printSection('구조 검사');
  structural.forEach((check) => {
    console.log(`${color(check.ok)}${statusLabel(check.ok)}${reset()} ${check.id} - ${check.message}`);
  });

  const checklistResults = checklist.map(evaluateChecklistItem);
  printSection('요구사항 acceptance 검사');
  checklistResults.forEach((item) => {
    console.log(`${color(item.ok)}${statusLabel(item.ok)}${reset()} ${item.id} [${item.severity}] - ${item.description}`);
    if (!item.ok) {
      if (item.missingDoc.length) {
        console.log(`  문서 누락: ${item.missingDoc.join(' | ')}`);
      }
      if (item.missingCode.length) {
        console.log(`  코드 누락: ${item.missingCode.join(' | ')}`);
      }
    }
  });

  const backlogIssues = extractBacklogIssues();
  printSection('백로그 상태 요약');
  const counts = backlogIssues.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  ['치명', '미완료', '부분 반영', '완료'].forEach((status) => {
    console.log(`- ${status}: ${counts[status] || 0}`);
  });

  printSection('치명/미완료 항목');
  backlogIssues.filter((item) => item.status === '치명' || item.status === '미완료').forEach((item) => {
    console.log(`- [${item.status}] ${item.title}`);
  });

  const failed = [...structural.filter((c) => !c.ok), ...checklistResults.filter((c) => !c.ok)];
  printSection('결론');
  if (failed.length === 0) {
    console.log(`${color(true)}PASS${reset()} 모든 구조/acceptance 검사를 통과했습니다.`);
    process.exitCode = 0;
  } else {
    console.log(`${color(false)}FAIL${reset()} 실패 ${failed.length}건. 치명/미완료 백로그와 함께 우선 수정이 필요합니다.`);
    process.exitCode = 1;
  }
}

main();
