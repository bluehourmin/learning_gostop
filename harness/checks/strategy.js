function hasAllPatterns(source, patterns = []) {
  return patterns.every((pattern) => source.includes(pattern));
}

function runStrategyChecks({ files }) {
  const rules = Array.isArray(files.strategyRules) ? files.strategyRules : [];
  const docSource = [
    files.coreRules,
    files.tutorSpec,
    files.uiSpec,
    files.readme,
    files.research?.winningStrategy || '',
    files.research?.adopted || ''
  ].join('\n');
  const codeSource = [files.script, files.index, files.styles].join('\n');

  const checks = rules.map((rule) => {
    const missingDoc = (rule.docPatterns || []).filter((pattern) => !docSource.includes(pattern));
    const missingCode = (rule.codePatterns || []).filter((pattern) => !codeSource.includes(pattern));
    const ok = missingDoc.length === 0 && missingCode.length === 0;
    const missing = [];
    if (missingDoc.length) missing.push('문서: ' + missingDoc.join(' | '));
    if (missingCode.length) missing.push('코드: ' + missingCode.join(' | '));
    return {
      id: rule.id,
      label: rule.label,
      severity: rule.severity || 'medium',
      ok,
      detail: ok ? (rule.passDetail || '문서와 코드에 모두 반영됨') : missing.join(' / '),
      remedy: rule.remedy || '전략 기준을 문서와 코드에 함께 반영해 주세요.',
      score: ok ? (rule.maxPoints || 0) : 0,
      maxPoints: rule.maxPoints || 0
    };
  });

  const score = checks.reduce((sum, check) => sum + check.score, 0);
  const maxScore = checks.reduce((sum, check) => sum + check.maxPoints, 0);

  return {
    id: 'strategy',
    label: '승리 전략 검수',
    score,
    maxScore,
    checks
  };
}

module.exports = {
  runStrategyChecks
};
