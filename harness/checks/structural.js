function runStructuralChecks({ exists, files, backlogIssues }) {
  return [
    {
      id: 'files_exist',
      ok: [
        'README.md',
        'docs/gostop-core-rules.md',
        'docs/gostop-tutor-spec.md',
        'docs/gostop-ui-spec.md',
        'docs/gostop-backlog.md',
        'index.html',
        'script.js',
        'styles.css'
      ].every(exists),
      message: '핵심 문서와 엔트리 파일이 모두 존재하는지'
    },
    {
      id: 'backlog_has_critical',
      ok: backlogIssues.some((item) => item.status === '치명'),
      message: '백로그에 치명 이슈 상태 추적이 있는지'
    },
    {
      id: 'script_has_watchdog',
      ok: files.script.includes('function startAiWatchdog()') && files.script.includes('function ensureAiTurnProgress()'),
      message: '턴 멈춤 보호용 watchdog/ensure 함수가 있는지'
    }
  ];
}

module.exports = {
  runStructuralChecks
};
