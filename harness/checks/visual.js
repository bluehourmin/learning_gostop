function extractPxValue(source, selectorRegex) {
  const match = source.match(selectorRegex);
  return match ? Number(match[1]) : null;
}

function hasBlockProperty(source, selector, property, expected) {
  const regex = new RegExp(selector + "\\s*\\{[^}]*" + property + "\\s*:\\s*" + expected + "\\s*;", 's');
  return regex.test(source);
}

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
    id: 'visual',
    label: '시각 레이아웃 검수',
    score,
    maxScore,
    ok: score === maxScore,
    checks
  };
}

function runVisualChecks({ files }) {
  const styles = files.styles;
  const script = files.script;
  const desktopCard = extractPxValue(styles, /\.card-shell\s*\{[^}]*width:\s*(\d+)px;/s);
  const smallCard = extractPxValue(styles, /\.card-shell\.small\s*\{[^}]*width:\s*(\d+)px;/s);
  const capturedWidth = extractPxValue(styles, /\.captured-junk-row \.card-shell\.small,[^}]*width:\s*(\d+)px;/s);
  const overlap = extractPxValue(styles, /\.captured-junk-row \.card-shell\.small \+ \.card-shell\.small[^}]*margin-left:\s*(-?\d+)px;/s);
  const visibleRatio = capturedWidth && overlap != null ? ((capturedWidth + overlap) / capturedWidth) : null;

  const checks = [
    makeCheck(
      'board_clips_overflow',
      '메인보드와 플레이어 구역이 넘침을 자른다',
      6,
      hasBlockProperty(styles, '\.table-board', 'overflow', 'hidden') && hasBlockProperty(styles, '\.side-seat', 'overflow', 'hidden'),
      '메인보드와 양쪽 구역이 overflow: hidden 으로 고정되어야 한다.',
      'table-board 와 side-seat 에 overflow: hidden 을 유지하세요.'
    ),
    makeCheck(
      'captured_strip_clips_overflow',
      '먹은 패 구역이 구역 밖으로 튀어나오지 않는다',
      4,
      hasBlockProperty(styles, '\.captured-strip\.organized', 'overflow', 'hidden') && hasBlockProperty(styles, '\.opponent-captured-strip', 'overflow', 'hidden'),
      '먹은 패 스트립과 상대 먹은 패 스트립이 overflow: hidden 을 가져야 한다.',
      'captured-strip.organized 와 opponent-captured-strip 에 overflow: hidden 을 유지하세요.'
    ),
    makeCheck(
      'compact_card_sizes',
      '기본 카드와 작은 카드 폭이 모바일/노트북 기준으로 과도하지 않다',
      4,
      desktopCard != null && smallCard != null && desktopCard <= 72 && smallCard <= 56,
      `현재 카드 폭: 기본 ${desktopCard ?? 'n/a'}px, 작은 카드 ${smallCard ?? 'n/a'}px`,
      '기본 카드는 72px 이하, 작은 카드는 56px 이하로 유지하세요.'
    ),
    makeCheck(
      'capture_overlap_ratio',
      '먹은 패 겹침이 약 30~40% 가시성을 유지한다',
      4,
      visibleRatio != null && visibleRatio >= 0.30 && visibleRatio <= 0.40,
      visibleRatio == null ? '겹침 비율을 계산할 수 없습니다.' : `현재 가시 비율 ${(visibleRatio * 100).toFixed(0)}%`,
      'captured 영역 small 카드 폭과 margin-left 를 조정해 30~40%가 보이게 하세요.'
    ),
    makeCheck(
      'mobile_landscape_layout',
      '터치 기기 가로 화면 전용 레이아웃이 존재한다',
      4,
      /@media \(pointer: coarse\) and \(orientation: landscape\)/.test(styles) && script.includes('compact-touch-layout'),
      '모바일/태블릿 가로 전용 스타일과 탭형 사이드바 플래그가 함께 있어야 한다.',
      'pointer: coarse + orientation: landscape 블록과 compact-touch-layout 플래그를 함께 유지하세요.'
    ),
    makeCheck(
      'opponent_rotation_tokens',
      '상대 A/B 90도 방향 규칙 토큰이 코드/스타일에 존재한다',
      3,
      script.includes('opponent-rot-cw') && script.includes('opponent-rot-ccw') && styles.includes('.opponent-rot-cw') && styles.includes('.opponent-rot-ccw'),
      '상대 회전 클래스가 script 와 styles 양쪽에 있어야 한다.',
      'opponent-rot-cw / opponent-rot-ccw 클래스를 script 와 styles 양쪽에서 유지하세요.'
    ),
    makeCheck(
      'opponent_compact_layout_contract',
      '상대 먹은 패는 좌석별 3행 계약으로 배치된다',
      4,
      styles.includes('.left-seat .opponent-captured-strip .captured-layout')
        && styles.includes('.right-seat .opponent-captured-strip .captured-layout')
        && styles.includes('grid-template-areas:')
        && styles.includes('"bright bright"')
        && styles.includes('"junk junk"'),
      '상대 먹은 패는 A/B 좌석 모두 밝은 패/중간 줄/피 줄의 3행 계약을 가져야 한다.',
      'opponent-captured-strip 아래 captured-layout 을 좌석별 3행 grid-template-areas 계약으로 유지하세요.'
    ),
    makeCheck(
      'opponent_middle_sideways_contract',
      '상대 띠·열끗 칸은 좌우로 펴진다',
      3,
      /\.left-seat \.opponent-captured-strip \.captured-middle\s*,[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);/s.test(styles),
      '상대 가운데 줄은 내 공개패를 90도 돌린 느낌으로 띠와 열끗이 좌우로 펴져야 한다.',
      '상대 captured-middle 에 2열 grid-template-columns 계약을 유지하세요.'
    ),
    makeCheck(
      'opponent_no_translate_hacks',
      '상대 먹은 패는 좌우 미세 translate 보정 없이 정리된다',
      3,
      !/\.left-seat \.opponent-captured-strip \.captured-bright\s*\{[^}]*transform:/s.test(styles) && !/\.right-seat \.opponent-captured-strip \.captured-bright\s*\{[^}]*transform:/s.test(styles),
      '상대 광 칸을 좌우별 transform 으로 따로 밀지 않아야 한다.',
      '상대 먹은 패 정리는 translateY 같은 좌석별 미세 보정을 제거하세요.'
    )
  ];

  return summarize(checks);
}

module.exports = {
  runVisualChecks
};
