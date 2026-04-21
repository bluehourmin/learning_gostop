function color(ok) {
  return ok ? '\x1b[32m' : '\x1b[31m';
}

function reset() {
  return '\x1b[0m';
}

function yellow() {
  return '\x1b[33m';
}

function statusLabel(ok) {
  return ok ? 'PASS' : 'FAIL';
}

function printSection(title) {
  console.log(`\n=== ${title} ===`);
}

function reportSimpleChecks(items, formatter) {
  items.forEach((item) => {
    console.log(formatter(item));
  });
}

function reportCategory(category) {
  const verdict = category.score === category.maxScore;
  console.log(`${verdict ? color(true) : yellow()}${category.label}${reset()} ${category.score}/${category.maxScore}`);
  category.checks.forEach((check) => {
    console.log(`  ${check.ok ? color(true) : color(false)}${statusLabel(check.ok)}${reset()} ${check.label} (${check.score}/${check.maxPoints})`);
    if (!check.ok) {
      if (check.detail) console.log(`    현재: ${check.detail}`);
      if (check.remedy) console.log(`    조치: ${check.remedy}`);
    }
  });
}

function reportHarnessResults(result) {
  console.log('고스돕 하네스 검사');
  console.log(`기준 경로: ${result.root}`);

  printSection('구조 검사');
  reportSimpleChecks(result.structural, (check) => `${color(check.ok)}${statusLabel(check.ok)}${reset()} ${check.id} - ${check.message}`);

  printSection('요구사항 acceptance 검사');
  result.acceptance.forEach((item) => {
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

  printSection('시각 검수');
  reportCategory(result.visual);

  printSection('턴 흐름 검수');
  reportCategory(result.runtime);

  printSection('백로그 상태 요약');
  ['치명', '미완료', '부분 반영', '완료'].forEach((status) => {
    console.log(`- ${status}: ${result.backlogSummary.counts[status] || 0}`);
  });

  printSection('치명/미완료 항목');
  result.backlogSummary.openItems.forEach((item) => {
    console.log(`- [${item.status}] ${item.title}`);
  });

  printSection('검수 점수');
  console.log(`검수자: ${result.review.reviewer}`);
  result.review.categories.forEach((category) => {
    const ok = category.score === category.maxScore;
    console.log(`${ok ? color(true) : yellow()}${category.label}${reset()} ${category.score}/${category.maxScore}`);
    if (category.failed.length) {
      category.failed.forEach((failure) => console.log(`  - ${failure}`));
    }
  });
  console.log(`총점: ${result.review.totalScore}/${result.review.maxScore}`);
  console.log(`통과 기준: ${result.review.threshold}점 이상`);
  if (result.review.hardFailures.length) {
    console.log(`${color(false)}하드 실패${reset()} ${result.review.hardFailures.join(' | ')}`);
  }

  printSection('결론');
  if (result.ok) {
    console.log(`${color(true)}PASS${reset()} ${result.review.totalScore}점으로 검수 게이트를 통과했습니다.`);
  } else {
    console.log(`${color(false)}FAIL${reset()} ${result.review.totalScore}점으로 검수 게이트를 통과하지 못했습니다.`);
  }
}

module.exports = {
  reportHarnessResults
};
