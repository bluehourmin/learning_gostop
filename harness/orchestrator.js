const { ROOT, exists, loadProjectFiles, loadChecklist } = require('./sources/loader');
const { runStructuralChecks } = require('./checks/structural');
const { runAcceptanceChecks } = require('./checks/acceptance');
const { extractBacklogIssues, summarizeBacklog } = require('./checks/backlog');
const { runVisualChecks } = require('./checks/visual');
const { runRuntimeTurnFlowChecks } = require('./checks/runtime-turn-flow');
const { computeReviewGate } = require('./checks/review-score');

function runHarness() {
  const files = loadProjectFiles();
  const checklist = loadChecklist();
  const backlogIssues = extractBacklogIssues(files.backlog);
  const structural = runStructuralChecks({ exists, files, backlogIssues });
  const acceptance = runAcceptanceChecks({ files, checklist });
  const backlogSummary = summarizeBacklog(backlogIssues);
  const visual = runVisualChecks({ files });
  const runtime = runRuntimeTurnFlowChecks({ files });
  const failed = [
    ...structural.filter((check) => !check.ok),
    ...acceptance.filter((check) => !check.ok),
    ...visual.checks.filter((check) => !check.ok),
    ...runtime.checks.filter((check) => !check.ok)
  ];
  const review = computeReviewGate({ structural, acceptance, visual, runtime, backlogSummary });

  return {
    root: ROOT,
    structural,
    acceptance,
    visual,
    runtime,
    review,
    backlogIssues,
    backlogSummary,
    failed,
    ok: review.passed
  };
}

module.exports = {
  runHarness
};
