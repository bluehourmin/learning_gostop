const STRUCTURAL_WEIGHTS = {
  files_exist: 5,
  backlog_has_critical: 3,
  script_has_watchdog: 7
};

const SEVERITY_WEIGHTS = {
  high: 5,
  medium: 3,
  low: 1
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function summarizeFailures(items) {
  return items.filter((item) => !item.ok).map((item) => item.message || item.description || item.label || item.id);
}

function scoreStructural(structural) {
  const maxScore = 15;
  const score = structural.reduce((sum, item) => sum + (item.ok ? (STRUCTURAL_WEIGHTS[item.id] || 0) : 0), 0);
  return {
    id: 'structural',
    label: '구조/기본 안전성',
    score,
    maxScore,
    failed: summarizeFailures(structural)
  };
}

function scoreAcceptance(acceptance) {
  const maxScore = 25;
  const totalWeight = acceptance.reduce((sum, item) => sum + (SEVERITY_WEIGHTS[item.severity] || 0), 0) || 1;
  const passedWeight = acceptance.reduce((sum, item) => sum + (item.ok ? (SEVERITY_WEIGHTS[item.severity] || 0) : 0), 0);
  const score = Math.round((passedWeight / totalWeight) * maxScore);
  return {
    id: 'acceptance',
    label: '규칙/요구사항 반영',
    score,
    maxScore,
    failed: acceptance.filter((item) => !item.ok).map((item) => item.description)
  };
}

function scoreBacklog(backlogSummary) {
  const maxScore = 10;
  let score = maxScore;
  const critical = backlogSummary.counts['치명'] || 0;
  const incomplete = backlogSummary.counts['미완료'] || 0;
  const partial = backlogSummary.counts['부분 반영'] || 0;
  score -= critical * 6;
  score -= Math.min(incomplete, 2) * 2;
  score -= partial > 0 ? 1 : 0;
  score = clamp(score, 0, maxScore);
  const failed = [];
  if (critical > 0) failed.push(`치명 ${critical}건`);
  if (incomplete > 0) failed.push(`미완료 ${incomplete}건`);
  if (partial > 0) failed.push(`부분 반영 ${partial}건`);
  return {
    id: 'backlog',
    label: '백로그 건강도',
    score,
    maxScore,
    failed
  };
}

function computeReviewGate({ structural, acceptance, visual, runtime, backlogSummary }) {
  const categories = [
    scoreStructural(structural),
    scoreAcceptance(acceptance),
    {
      id: visual.id,
      label: visual.label,
      score: visual.score,
      maxScore: visual.maxScore,
      failed: summarizeFailures(visual.checks)
    },
    {
      id: runtime.id,
      label: runtime.label,
      score: runtime.score,
      maxScore: runtime.maxScore,
      failed: summarizeFailures(runtime.checks)
    },
    scoreBacklog(backlogSummary)
  ];

  const totalScore = categories.reduce((sum, item) => sum + item.score, 0);
  const maxScore = categories.reduce((sum, item) => sum + item.maxScore, 0);
  const hardFailures = [
    ...structural.filter((item) => !item.ok && item.id === 'files_exist').map((item) => item.message),
    ...acceptance.filter((item) => !item.ok && item.severity === 'high').map((item) => item.description)
  ];
  const passed = totalScore >= 90 && hardFailures.length === 0;

  return {
    reviewer: 'Codex Harness Reviewer',
    threshold: 90,
    totalScore,
    maxScore,
    passed,
    hardFailures,
    categories
  };
}

module.exports = {
  computeReviewGate
};
