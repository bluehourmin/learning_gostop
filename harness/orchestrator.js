const { ROOT, exists, loadProjectFiles, loadChecklist } = require('./sources/loader');
const { runStructuralChecks } = require('./checks/structural');
const { runAcceptanceChecks } = require('./checks/acceptance');
const { extractBacklogIssues, summarizeBacklog } = require('./checks/backlog');

function runHarness() {
  const files = loadProjectFiles();
  const checklist = loadChecklist();
  const backlogIssues = extractBacklogIssues(files.backlog);
  const structural = runStructuralChecks({ exists, files, backlogIssues });
  const acceptance = runAcceptanceChecks({ files, checklist });
  const backlogSummary = summarizeBacklog(backlogIssues);
  const failed = [...structural.filter((check) => !check.ok), ...acceptance.filter((check) => !check.ok)];

  return {
    root: ROOT,
    structural,
    acceptance,
    backlogIssues,
    backlogSummary,
    failed,
    ok: failed.length === 0
  };
}

module.exports = {
  runHarness
};
