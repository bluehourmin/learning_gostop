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

function loadProjectFiles() {
  return {
    readme: exists('README.md') ? read('README.md') : '',
    coreRules: exists('docs/gostop-core-rules.md') ? read('docs/gostop-core-rules.md') : '',
    tutorSpec: exists('docs/gostop-tutor-spec.md') ? read('docs/gostop-tutor-spec.md') : '',
    uiSpec: exists('docs/gostop-ui-spec.md') ? read('docs/gostop-ui-spec.md') : '',
    backlog: exists('docs/gostop-backlog.md') ? read('docs/gostop-backlog.md') : '',
    script: exists('script.js') ? read('script.js') : '',
    index: exists('index.html') ? read('index.html') : '',
    styles: exists('styles.css') ? read('styles.css') : ''
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
