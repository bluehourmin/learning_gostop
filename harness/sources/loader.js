const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

function resolvePath(rel) {
  return path.join(ROOT, rel);
}

function exists(rel) {
  return fs.existsSync(resolvePath(rel));
}

function read(rel) {
  return fs.readFileSync(resolvePath(rel), 'utf8');
}

function readOptional(rel, fallback = '') {
  return exists(rel) ? read(rel) : fallback;
}

function readJsonOptional(rel, fallback = null) {
  if (!exists(rel)) return fallback;
  try {
    return JSON.parse(read(rel));
  } catch (error) {
    return fallback;
  }
}

function loadProjectFiles() {
  return {
    readme: readOptional('README.md'),
    coreRules: readOptional('docs/gostop-core-rules.md'),
    tutorSpec: readOptional('docs/gostop-tutor-spec.md'),
    uiSpec: readOptional('docs/gostop-ui-spec.md'),
    backlog: readOptional('docs/gostop-backlog.md'),
    script: readOptional('script.js'),
    index: readOptional('index.html'),
    styles: readOptional('styles.css'),
    research: {
      sameGameRules: readOptional('research/sources/same-game-rules.md'),
      similarExperiences: readOptional('research/sources/similar-experiences.md'),
      winningStrategy: readOptional('research/sources/winning-strategy.md'),
      candidates: readOptional('research/adoption/candidates.md'),
      adopted: readOptional('research/adoption/adopted.md'),
      rejected: readOptional('research/adoption/rejected.md')
    },
    strategyRules: readJsonOptional('research/findings/strategy-rules.json', [])
  };
}

function loadChecklist() {
  return JSON.parse(read('harness/checklist.json'));
}

module.exports = {
  ROOT,
  exists,
  read,
  loadProjectFiles,
  loadChecklist
};
