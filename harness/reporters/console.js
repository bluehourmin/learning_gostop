function color(ok) {
  return ok ? '\x1b[32m' : '\x1b[31m';
}

function reset() {
  return '\x1b[0m';
}

function statusLabel(ok) {
  return ok ? 'PASS' : 'FAIL';
}

function printSection(title) {
  console.log(`\n=== ${title} ===`);
}

function reportHarnessResults(result) {
  console.log('고스돕 하네스 검사');
  console.log(`기준 경로: ${result.root}`);

  printSection('구조 검사');
  result.structural.forEach((check) => {
    console.log(`${color(check.ok)}${statusLabel(check.ok)}${reset()} ${check.id} - ${check.message}`);
  });

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

  printSection('백로그 상태 요약');
  ['치명', '미완료', '부분 반영', '완료'].forEach((status) => {
    console.log(`- ${status}: ${result.backlogSummary.counts[status] || 0}`);
  });

  printSection('치명/미완료 항목');
  result.backlogSummary.openItems.forEach((item) => {
    console.log(`- [${item.status}] ${item.title}`);
  });

  printSection('결론');
  if (result.ok) {
    console.log(`${color(true)}PASS${reset()} 모든 구조/acceptance 검사를 통과했습니다.`);
  } else {
    console.log(`${color(false)}FAIL${reset()} 실패 ${result.failed.length}건. 치명/미완료 백로그와 함께 우선 수정이 필요합니다.`);
  }
}

module.exports = {
  reportHarnessResults
};
