function hasAllPatterns(source, patterns = []) {
  return patterns.every((pattern) => source.includes(pattern));
}

function buildCheck({ id, label, ok, detail, remedy, maxPoints }) {
  return {
    id,
    label,
    ok,
    detail,
    remedy,
    score: ok ? maxPoints : 0,
    maxPoints
  };
}

function runResearchChecks({ files }) {
  const checks = [];
  const research = files.research || {};
  const adoptedSource = research.adopted || '';

  checks.push(buildCheck({
    id: 'same_game_rules_seed',
    label: '같은 게임 표준룰/옵션룰 조사 문서가 있다',
    ok: hasAllPatterns(research.sameGameRules || '', ['표준룰', '옵션룰', '조커', '피박', '광박', '고/스톱']),
    detail: research.sameGameRules ? 'same-game-rules.md 존재' : 'same-game-rules.md 없음',
    remedy: '같은 게임 룰 조사 문서에 표준룰/옵션룰, 조커, 박 규칙을 나눠 적어주세요.',
    maxPoints: 2
  }));

  checks.push(buildCheck({
    id: 'similar_experience_seed',
    label: '유사 장르/전달 방식 조사 문서가 있다',
    ok: hasAllPatterns(research.similarExperiences || '', ['유사 장르', '전달 방식', '모바일 가로', '튜터']),
    detail: research.similarExperiences ? 'similar-experiences.md 존재' : 'similar-experiences.md 없음',
    remedy: '유사 게임, 유사 학습 UX, 모바일 가로 배치 관찰을 함께 적어주세요.',
    maxPoints: 2
  }));

  checks.push(buildCheck({
    id: 'winning_strategy_seed',
    label: '승리 전략 조사 문서가 있다',
    ok: hasAllPatterns(research.winningStrategy || '', ['비풍초', '쌍피', '홍단', '청단', '초단', '고도리', '광 2장', '피 8장']),
    detail: research.winningStrategy ? 'winning-strategy.md 존재' : 'winning-strategy.md 없음',
    remedy: '버리기/먹기/차단/경고 기준을 전략 문서에 명시해 주세요.',
    maxPoints: 2
  }));

  checks.push(buildCheck({
    id: 'adoption_trace_docs',
    label: '후보/채택/거절 문서가 분리돼 있다',
    ok: !!(research.candidates && research.adopted && research.rejected),
    detail: [research.candidates, research.adopted, research.rejected].filter(Boolean).length + '/3 문서 존재',
    remedy: 'research/adoption 아래에 candidates.md, adopted.md, rejected.md를 유지해 주세요.',
    maxPoints: 2
  }));

  checks.push(buildCheck({
    id: 'adoption_has_spec_links',
    label: '채택 문서가 실제 스펙/코드 연결을 가진다',
    ok: hasAllPatterns(adoptedSource, ['docs/gostop-ui-spec.md', 'docs/gostop-tutor-spec.md', 'docs/gostop-core-rules.md', 'script.js']),
    detail: adoptedSource ? '채택 근거 문서 존재' : 'adopted.md 없음',
    remedy: '채택 항목마다 어떤 스펙/코드에 반영했는지 파일 경로까지 남겨주세요.',
    maxPoints: 2
  }));

  const score = checks.reduce((sum, check) => sum + check.score, 0);
  const maxScore = checks.reduce((sum, check) => sum + check.maxPoints, 0);

  return {
    id: 'research',
    label: '리서치/채택 추적성 검수',
    score,
    maxScore,
    checks
  };
}

module.exports = {
  runResearchChecks
};
