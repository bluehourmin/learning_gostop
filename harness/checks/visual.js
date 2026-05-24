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
      '상대 A/B는 내 공개패와 같은 정리 위에서 카드만 90도 회전한다',
      4,
      script.includes('seatRotationClass')
        && styles.includes('.left-seat .opponent-captured-strip .card-shell.small.opponent-rot-cw')
        && styles.includes('rotate: 90deg;')
        && styles.includes('.right-seat .opponent-captured-strip .card-shell.small.opponent-rot-ccw')
        && styles.includes('rotate: -90deg;'),
      '상대 회전은 공개패 블록 전체가 아니라 카드 방향감에만 적용되어야 한다.',
      'seatRotationClass 기반 카드별 90도 회전을 유지하고, compact-opponent 전체 회전은 제거하세요.'
    ),
    makeCheck(
      'opponent_same_layout_contract',
      '상대 먹은 패는 내 먹은 패와 같은 3열 구조를 유지한다',
      4,
      /\.left-seat \.opponent-captured-strip \.captured-layout\s*,[\s\S]*grid-template-columns:\s*minmax\(0, 0\.82fr\) minmax\(0, 0\.94fr\) minmax\(0, 1fr\);/s.test(styles)
        || /\.left-seat \.opponent-captured-strip \.captured-layout\s*,[\s\S]*grid-template-columns:\s*minmax\(0, 0\.76fr\) minmax\(0, 0\.92fr\) minmax\(0, 1fr\);/s.test(styles),
      '상대 먹은 패도 내 먹은 패와 같은 광/중간/피 3열 구조를 유지해야 한다.',
      '상대 captured-layout 에 별도 2열/3행 재배치 대신 내 공개패와 같은 3열 grid-template-columns 계약을 유지하세요.'
    ),
    makeCheck(
      'opponent_no_layout_reordering',
      '상대 먹은 패는 좌석별로 광/띠/열끗/피 순서를 다시 짜지 않는다',
      3,
      !styles.includes('grid-template-areas:')
        && !styles.includes('.left-seat .public-zone.left-public .captured-layout.compact-opponent')
        && !styles.includes('.right-seat .public-zone.right-public .captured-layout.compact-opponent')
        && !script.includes('orderedJunkRows')
        && !script.includes('middleBlocks'),
      '상대 먹은 패는 레이아웃 순서를 바꾸지 않고 내 공개패와 같은 쌓임을 유지해야 한다.',
      '상대 전용 행 재배치, junk row 역순, middleBlocks 분기, compact-opponent 전체 회전을 제거하세요.'
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
