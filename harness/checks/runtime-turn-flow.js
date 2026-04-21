function makeCheck(id, label, maxPoints, ok, detail, remedy) {
  return {
    id,
    label,
    maxPoints,
    ok,
    score: ok ? maxPoints : 0,
    detail,
    remedy: ok ? '' : remedy
  };
}

function summarize(checks) {
  const score = checks.reduce((sum, item) => sum + item.score, 0);
  const maxScore = checks.reduce((sum, item) => sum + item.maxPoints, 0);
  return {
    id: 'runtime',
    label: '턴 흐름/모션 안정성 검수',
    score,
    maxScore,
    ok: score === maxScore,
    checks
  };
}

function runRuntimeTurnFlowChecks({ files }) {
  const script = files.script;
  const checks = [
    makeCheck(
      'game_token_guard',
      '새 판 보호용 gameToken 가드가 있다',
      6,
      script.includes('app.gameToken += 1') && script.includes('if (app.gameToken !== gameToken) return;'),
      '이전 판 타이머가 새 판을 건드리지 못하게 gameToken 을 사용해야 한다.',
      'startNewGame 증가, setTimeout 콜백의 gameToken 비교를 유지하세요.'
    ),
    makeCheck(
      'motion_pipeline',
      '모션은 queueMotion -> settleMotion 경로로 정리된다',
      5,
      script.includes('function queueMotion(state, patch, onDone = null)') && script.includes('function settleMotion(state, token, gameToken)') && script.includes('app.afterMotionCallback'),
      '모션 시작과 정리는 queueMotion / settleMotion / afterMotionCallback 으로 묶여 있어야 한다.',
      '모션 정리는 queueMotion / settleMotion 단일 경로로 유지하세요.'
    ),
    makeCheck(
      'watchdog_and_ensure',
      'watchdog 와 ensure 보호막이 둘 다 존재한다',
      5,
      script.includes('function startAiWatchdog()') && script.includes('function ensureAiTurnProgress()'),
      '사용자/AI 턴 멈춤 감지용 watchdog / ensure 함수가 필요하다.',
      '턴 진행 보호용 watchdog 과 ensure 를 유지하세요.'
    ),
    makeCheck(
      'new_game_cleans_async',
      '새 게임 시작 시 남은 비동기 상태를 정리한다',
      4,
      script.includes('clearScheduledAiTurn();') && script.includes('window.clearTimeout(app.motionTimeout);') && script.includes('app.afterMotionCallback = null;') && script.includes('document.querySelectorAll(".match-modal").forEach((modal) => modal.remove())'),
      '새 판 시작 전에 timeout, callback, 모달을 모두 비워야 한다.',
      'startNewGame 에 타이머/콜백/모달 정리를 유지하세요.'
    ),
    makeCheck(
      'draw_reveal_sequence',
      '뒤집기 카드는 reveal 단계 이후 매칭된다',
      3,
      script.includes('revealedCard: drawn') && script.includes('const resolveRevealedDraw = () => {') && script.includes('queueMotion(state, { revealedCard: drawn, seat: playerIndex, stockPulse: true }, resolveRevealedDraw);'),
      '뒤집기 미리보기와 매칭 해결 단계가 분리되어야 한다.',
      '뒤집기 카드는 revealedCard 모션 뒤에 resolveRevealedDraw 에서 처리하세요.'
    ),
    makeCheck(
      'no_direct_ai_bypass',
      'AI 턴은 scheduleAiTurn 경유로 예약된다',
      2,
      !/setTimeout\(\s*runAiTurn/.test(script) && !/setTimeout\(\s*\(\)\s*=>\s*runAiTurn\(\)/.test(script),
      '직접 runAiTurn 을 setTimeout 에 연결하면 보호막을 우회한다.',
      'runAiTurn 예약은 scheduleAiTurn 내부로만 제한하세요.'
    )
  ];

  return summarize(checks);
}

module.exports = {
  runRuntimeTurnFlowChecks
};
