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

const CATEGORY_TARGETS = {
  structural: 10,
  acceptance: 20,
  research: 10,
  strategy: 20,
  visual: 15,
  runtime: 15,
  backlog: 10
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function summarizeFailures(items) {
  return items.filter((item) => !item.ok).map((item) => item.message || item.description || item.label || item.id);
}

function normalizeScore(rawScore, rawMax, targetMax) {
  if (!rawMax) return 0;
  return Math.round((rawScore / rawMax) * targetMax);
}

function scoreStructural(structural) {
  const rawMax = Object.values(STRUCTURAL_WEIGHTS).reduce((sum, value) => sum + value, 0);
  const rawScore = structural.reduce((sum, item) => sum + (item.ok ? (STRUCTURAL_WEIGHTS[item.id] || 0) : 0), 0);
  const maxScore = CATEGORY_TARGETS.structural;
  const score = normalizeScore(rawScore, rawMax, maxScore);
  return {
    id: 'structural',
    label: '구조/기본 안전성',
    score,
    maxScore,
    failed: summarizeFailures(structural)
  };
}

function scoreAcceptance(acceptance) {
  const maxScore = CATEGORY_TARGETS.acceptance;
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

function scoreCategory(category, targetMax) {
  return {
    id: category.id,
    label: category.label,
    score: normalizeScore(category.score, category.maxScore, targetMax),
    maxScore: targetMax,
    failed: summarizeFailures(category.checks)
  };
}

function scoreBacklog(backlogSummary) {
  const maxScore = CATEGORY_TARGETS.backlog;
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

function computeReviewGate({ structural, acceptance, research, strategy, visual, runtime, backlogSummary }) {
  const categories = [
    scoreStructural(structural),
    scoreAcceptance(acceptance),
    scoreCategory(research, CATEGORY_TARGETS.research),
    scoreCategory(strategy, CATEGORY_TARGETS.strategy),
    scoreCategory(visual, CATEGORY_TARGETS.visual),
    scoreCategory(runtime, CATEGORY_TARGETS.runtime),
    scoreBacklog(backlogSummary)
  ];

  const totalScore = categories.reduce((sum, item) => sum + item.score, 0);
  const maxScore = categories.reduce((sum, item) => sum + item.maxScore, 0);
  const hardFailures = [
    ...structural.filter((item) => !item.ok && item.id === 'files_exist').map((item) => item.message),
    ...acceptance.filter((item) => !item.ok && item.severity === 'high').map((item) => item.description),
    ...strategy.checks.filter((item) => !item.ok && item.severity === 'high').map((item) => item.label)
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
