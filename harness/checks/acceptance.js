function hasPattern(haystack, pattern) {
  return haystack.includes(pattern);
}

function sourceBucketFor(item, files) {
  if (item.category === 'rules') return [files.coreRules, files.script];
  if (item.category === 'ui') return [files.uiSpec, files.index + '\n' + files.styles + '\n' + files.script];
  if (item.category === 'tutor') return [files.tutorSpec, files.script + '\n' + files.index];
  if (item.category === 'turn-flow') return [files.backlog + '\n' + files.tutorSpec, files.script];
  if (item.category === 'learning') return [files.uiSpec + '\n' + files.tutorSpec, files.index + '\n' + files.script];
  return [
    files.readme + '\n' + files.coreRules + '\n' + files.tutorSpec + '\n' + files.uiSpec,
    files.script + '\n' + files.index + '\n' + files.styles
  ];
}

function evaluateChecklistItem(item, files) {
  const [docSource, codeSource] = sourceBucketFor(item, files);
  const missingDoc = (item.docPatterns || []).filter((pattern) => !hasPattern(docSource, pattern));
  const missingCode = (item.codePatterns || []).filter((pattern) => !hasPattern(codeSource, pattern));
  return {
    ...item,
    ok: missingDoc.length === 0 && missingCode.length === 0,
    missingDoc,
    missingCode
  };
}

function runAcceptanceChecks({ files, checklist }) {
  return checklist.map((item) => evaluateChecklistItem(item, files));
}

module.exports = {
  runAcceptanceChecks
};
