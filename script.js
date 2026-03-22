const MONTH_NAMES = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const MONTH_THEME = {
  1: { name: "송학", base: "#f8f1e4", accent: "#35663f", bloom: "#d84e47", icon: "pine" },
  2: { name: "매화", base: "#fff3ef", accent: "#b9473f", bloom: "#e7b1c8", icon: "plum" },
  3: { name: "벚꽃", base: "#fff0f1", accent: "#cc4f63", bloom: "#f9b8c7", icon: "cherry" },
  4: { name: "등꽃", base: "#f5efff", accent: "#6f55a2", bloom: "#b7a5ea", icon: "wisteria" },
  5: { name: "난초", base: "#edf8ec", accent: "#4c8a4d", bloom: "#9fd58f", icon: "iris" },
  6: { name: "모란", base: "#fff3ea", accent: "#d65b34", bloom: "#f4a081", icon: "peony" },
  7: { name: "싸리", base: "#f8ecd9", accent: "#91561d", bloom: "#d9944e", icon: "clover" },
  8: { name: "억새", base: "#f6f2dd", accent: "#8b7038", bloom: "#d4ba68", icon: "grass" },
  9: { name: "국화", base: "#fff4d9", accent: "#d29922", bloom: "#f7d55d", icon: "chrysanthemum" },
  10: { name: "단풍", base: "#fff0e8", accent: "#bf4129", bloom: "#ef7b4d", icon: "maple" },
  11: { name: "오동", base: "#ece8ff", accent: "#5d55aa", bloom: "#a29cf0", icon: "paulownia" },
  12: { name: "비", base: "#eef3f8", accent: "#476b94", bloom: "#93afcf", icon: "rain" },
  joker: { name: "조커", base: "#26293b", accent: "#f5d07a", bloom: "#d84e47", icon: "joker" }
};

const SPRITE = {
  url: "./assets/cards/hwatu-overview.png",
  width: 1920,
  height: 1060,
  cardWidth: 149.5,
  cardHeight: 243.6,
  x: [0, 157.2, 315.4, 472.6, 647.7, 804.9, 963.1, 1120.3, 1297.2, 1454.3, 1612.4, 1769.6],
  y: [0, 269.8, 541.3, 813.1]
};

const CARD_LIBRARY = [
  { month: 1, type: "bright", label: "1월 광", sprite: [0, 0] },
  { month: 1, type: "junk", label: "1월 피1", sprite: [0, 1] },
  { month: 1, type: "ribbon", label: "1월 홍단", sprite: [0, 2] },
  { month: 1, type: "junk", label: "1월 피2", sprite: [0, 3] },
  { month: 2, type: "animal", label: "2월 열끗", sprite: [0, 4] },
  { month: 2, type: "junk", label: "2월 피1", sprite: [0, 5] },
  { month: 2, type: "ribbon", label: "2월 홍단", sprite: [0, 6] },
  { month: 2, type: "junk", label: "2월 피2", sprite: [0, 7] },
  { month: 3, type: "bright", label: "3월 광", sprite: [0, 8] },
  { month: 3, type: "junk", label: "3월 피1", sprite: [0, 9] },
  { month: 3, type: "ribbon", label: "3월 홍단", sprite: [0, 10] },
  { month: 3, type: "junk", label: "3월 피2", sprite: [0, 11] },
  { month: 4, type: "animal", label: "4월 열끗", sprite: [1, 0] },
  { month: 4, type: "junk", label: "4월 피1", sprite: [1, 1] },
  { month: 4, type: "ribbon", label: "4월 초단", sprite: [1, 2] },
  { month: 4, type: "junk", label: "4월 피2", sprite: [1, 3] },
  { month: 5, type: "animal", label: "5월 난초 다리", sprite: [1, 4] },
  { month: 5, type: "junk", label: "5월 피1", sprite: [1, 5] },
  { month: 5, type: "ribbon", label: "5월 초단", sprite: [1, 6] },
  { month: 5, type: "junk", label: "5월 피2", sprite: [1, 7] },
  { month: 6, type: "animal", label: "6월 열끗", sprite: [1, 8] },
  { month: 6, type: "junk", label: "6월 피1", sprite: [1, 9] },
  { month: 6, type: "ribbon", label: "6월 청단", sprite: [1, 10] },
  { month: 6, type: "junk", label: "6월 피2", sprite: [1, 11] },
  { month: 7, type: "animal", label: "7월 열끗", sprite: [2, 0] },
  { month: 7, type: "junk", label: "7월 피1", sprite: [2, 1] },
  { month: 7, type: "ribbon", label: "7월 초단", sprite: [2, 2] },
  { month: 7, type: "junk", label: "7월 피2", sprite: [2, 3] },
  { month: 8, type: "bright", label: "8월 광", sprite: [2, 4] },
  { month: 8, type: "junk", label: "8월 피1", sprite: [2, 5] },
  { month: 8, type: "animal", label: "8월 열끗", sprite: [2, 6] },
  { month: 8, type: "junk", label: "8월 피2", sprite: [2, 7] },
  { month: 9, type: "animal", label: "9월 국화 술잔", sprite: [2, 8], flexibleScore: ["animal", "junk"], junkValue: 2 },
  { month: 9, type: "junk", label: "9월 피1", sprite: [2, 9] },
  { month: 9, type: "ribbon", label: "9월 청단", sprite: [2, 10] },
  { month: 9, type: "junk", label: "9월 피2", sprite: [2, 11] },
  { month: 10, type: "animal", label: "10월 열끗", sprite: [3, 0] },
  { month: 10, type: "junk", label: "10월 피1", sprite: [3, 1] },
  { month: 10, type: "ribbon", label: "10월 청단", sprite: [3, 2] },
  { month: 10, type: "junk", label: "10월 피2", sprite: [3, 3] },
  { month: 11, type: "bright", label: "11월 비광", sprite: [3, 4] },
  { month: 11, type: "animal", label: "11월 열끗", sprite: [3, 5] },
  { month: 11, type: "ribbon", label: "11월 띠", sprite: [3, 6] },
  { month: 11, type: "junk", label: "11월 피", sprite: [3, 7] },
  { month: 12, type: "bright", label: "12월 광", sprite: [3, 8] },
  { month: 12, type: "junk", label: "12월 쌍피", sprite: [3, 9] },
  { month: 12, type: "junk", label: "12월 피1", sprite: [3, 10] },
  { month: 12, type: "junk", label: "12월 피2", sprite: [3, 11] },
  { month: 0, type: "joker", label: "조커 +2피", badge: "+2" },
  { month: 0, type: "joker", label: "조커 +3피", badge: "+3" }
];

const PLAYER_NAMES = ["나", "상대 A", "상대 B"];
const USER_INDEX = 0;
const DEAL_COUNT = 7;
const FIELD_COUNT = 6;
const MONEY_PER_POINT = 100;

const app = {
  state: null,
  advisorMode: "coach",
  pace: "slow",
  pendingAiTimeout: null,
  motionTimeout: null,
  afterMotionCallback: null,
  aiWatchdog: null,
  dealerIndex: null,
  gameToken: 0
};

const els = {
  newGameBtn: document.getElementById("new-game-btn"),
  advisorToggleBtn: document.getElementById("advisor-toggle-btn"),
  jokerToggleBtn: document.getElementById("joker-toggle-btn"),
  paceSlowBtn: document.getElementById("pace-slow-btn"),
  paceNormalBtn: document.getElementById("pace-normal-btn"),
  paceStepBtn: document.getElementById("pace-step-btn"),
  nextTurnBtn: document.getElementById("next-turn-btn"),
  turnBadge: document.getElementById("turn-badge"),
  deckCount: document.getElementById("deck-count"),
  dealerBadge: document.getElementById("dealer-badge"),
  directionBadge: document.getElementById("direction-badge"),
  fieldArea: document.getElementById("field-area"),
  fieldRead: document.getElementById("field-read"),
  leftSeat: document.getElementById("left-seat"),
  rightSeat: document.getElementById("right-seat"),
  userSeat: document.getElementById("user-seat"),
  tutorSummary: document.getElementById("tutor-summary"),
  recommendationList: document.getElementById("recommendation-list"),
  warningStrip: document.getElementById("warning-strip"),
  strategyInsight: document.getElementById("strategy-insight"),
  flowInsight: document.getElementById("flow-insight"),
  riskInsight: document.getElementById("risk-insight"),
  riskCard: document.getElementById("risk-card"),
  skillInsight: document.getElementById("skill-insight"),
  eventLog: document.getElementById("event-log"),
  rulesSummary: document.getElementById("rules-summary"),
  stockPile: document.getElementById("stock-pile"),
  chatLog: document.getElementById("chat-log"),
  chatForm: document.getElementById("chat-form"),
  chatInput: document.getElementById("chat-input"),
  referenceOpenBtn: document.getElementById("reference-open-btn"),
  referenceModal: document.getElementById("reference-modal"),
  referenceGrid: document.getElementById("reference-grid")
};

const PACE_DELAY = {
  slow: 2800,
  normal: 1800
};

const NAMED_COMBO_MONTHS = {
  홍단: [1, 2, 3],
  청단: [6, 9, 10],
  초단: [4, 5, 7],
  고도리: [2, 4, 8]
};

const RULE_CONFIG = {
  enableJokers: true,
  enableJunkStealOnZzokSseul: true,
  enableFlexibleAnimals: true,
  enableGoStop: true,
  godoriScore: 5,
  rainBrightThreeCountScore: 2,
  plainThreeBrightScore: 3,
  stopThreshold: 3
};

function prepareCardForRules(card) {
  const next = { ...card };
  if (!RULE_CONFIG.enableFlexibleAnimals) {
    delete next.flexibleScore;
    delete next.junkValue;
  }
  return next;
}

function createDeck() {
  return CARD_LIBRARY
    .filter((card) => RULE_CONFIG.enableJokers || card.type !== "joker")
    .map((card, index) => ({
      ...prepareCardForRules(card),
      id: `${card.month}-${card.type}-${index}`
    }));
}

function shuffle(cards) {
  const clone = [...cards];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function createMotionState() {
  return { fieldCardId: null, capturedIds: [], seat: null, stockPulse: false, token: 0, startedAt: 0 };
}

function settleMotion(state, token, gameToken) {
  if (app.gameToken !== gameToken) return;
  if (app.state !== state || !state.motion || state.motion.token !== token) return;
  state.motion = createMotionState();
  const afterMotion = app.afterMotionCallback;
  app.afterMotionCallback = null;
  if (typeof afterMotion === "function") {
    afterMotion();
    return;
  }
  render();
}

function queueMotion(state, patch, onDone = null) {
  if (app.motionTimeout != null) {
    window.clearTimeout(app.motionTimeout);
    app.motionTimeout = null;
  }
  app.afterMotionCallback = typeof onDone === "function" ? onDone : null;
  const token = Date.now() + Math.random();
  const gameToken = state.gameToken;
  state.motion = { ...createMotionState(), ...patch, token, startedAt: Date.now() };
  render();
  app.motionTimeout = window.setTimeout(() => {
    app.motionTimeout = null;
    settleMotion(state, token, gameToken);
  }, 560);
}

function newPlayer(name, seat) {
  return {
    name,
    seat,
    hand: [],
    captured: [],
    score: 0,
    goCount: 0,
    shakeCount: 0,
    shakenMonths: []
  };
}

function createGame() {
  const deck = shuffle(createDeck());
  const players = PLAYER_NAMES.map(newPlayer);
  const dealerIndex = app.dealerIndex == null ? Math.floor(Math.random() * players.length) : app.dealerIndex;
  app.dealerIndex = dealerIndex;
  for (let round = 0; round < DEAL_COUNT; round += 1) {
    players.forEach((player) => player.hand.push(deck.pop()));
  }

  const field = [];
  for (let index = 0; index < FIELD_COUNT; index += 1) {
    field.push(deck.pop());
  }

  const state = {
    deck,
    field,
    players,
    currentPlayer: dealerIndex,
    pendingChoice: null,
    pendingFlexibleChoice: null,
    pendingGoStopChoice: null,
    pendingShakeChoice: null,
    tutor: null,
    logs: [],
    winner: null,
    endReason: null,
    motion: createMotionState(),
    chatHistory: [{ role: "assistant", text: "지금 판 기준으로 같이 보겠습니다. 헷갈리는 패나 고/스톱, 상대 흐름을 물어보세요." }],
    gameToken: app.gameToken
  };

  const openingJokers = field.filter((card) => card.type === "joker");
  if (openingJokers.length) {
    state.field = field.filter((card) => card.type !== "joker");
    players[dealerIndex].captured.push(...openingJokers);
  }

  logEvent(state, "시작", `${PLAYER_NAMES[dealerIndex]}가 선입니다. 진행 방향은 시계 방향입니다.`);
  if (openingJokers.length) {
    logEvent(state, "시작 조커", PLAYER_NAMES[dealerIndex] + "가 바닥 조커 " + openingJokers.map((card) => card.label).join(", ") + "를 먼저 가져가고 시작합니다.");
    players[dealerIndex].score = evaluatePlayerScore(players[dealerIndex]).score;
  }
  const totalTongWinner = players.find((player) => findFourOfKindMonth(player.hand));
  if (totalTongWinner) {
    const month = findFourOfKindMonth(totalTongWinner.hand);
    totalTongWinner.score = 10;
    state.winner = totalTongWinner.seat;
    app.dealerIndex = totalTongWinner.seat;
    logEvent(state, "총통", `${totalTongWinner.name}가 ${month}월 총통으로 10점 승리했습니다.`);
  }
  assessTutor(state);
  return state;
}

function findFourOfKindMonth(hand) {
  for (let month = 1; month <= 12; month += 1) {
    if (countMonth(hand, month) === 4) return month;
  }
  return null;
}

function getShakeCandidates(player) {
  const counts = new Map();
  player.hand.forEach((card) => {
    if (card.type === "joker") return;
    counts.set(card.month, (counts.get(card.month) || 0) + 1);
  });
  return [...counts.entries()]
    .filter(([, count]) => count >= 3)
    .map(([month]) => month)
    .filter((month) => !player.shakenMonths.includes(month));
}

function recommendShake(state, player, month) {
  const monthCards = player.hand.filter((card) => card.month === month);
  const monthMoves = monthCards.map((card) => scoreMove(state, player, card)).sort((a, b) => b.score - a.score);
  const bestMove = monthMoves[0];
  const rivalBest = Math.max(...state.players.filter((candidate) => candidate.seat !== player.seat).map((candidate) => evaluatePlayerScore(candidate).score), 0);
  if (bestMove && bestMove.matches.length > 0 && player.score <= rivalBest) {
    return { recommend: true, reason: month + "월은 지금 바로 먹는 줄이 있어 흔들면서 압박을 걸기 좋습니다." };
  }
  if (bestMove && bestMove.matches.length === 0) {
    return { recommend: false, reason: month + "월은 흔들어도 바로 먹지 못해서 정보만 줄 수 있습니다. 이번엔 보류가 안전합니다." };
  }
  return { recommend: true, reason: month + "월은 손에 세 장 이상 보여서 이후 흐름 주도권을 잡기 좋습니다." };
}

function getBombCardsFromHand(player, month, primaryCardId) {
  const monthCards = player.hand.filter((card) => card.month === month);
  const primary = monthCards.find((card) => card.id === primaryCardId) || monthCards[0];
  const rest = monthCards.filter((card) => card.id !== primary?.id).slice(0, 2);
  return primary ? [primary, ...rest] : monthCards.slice(0, 3);
}

function resolveBombPlay(state, playerIndex, cardId, month) {
  const player = state.players[playerIndex];
  const bombCards = getBombCardsFromHand(player, month, cardId);
  if (bombCards.length < 3) {
    return resolveCardPlay(state, playerIndex, cardId, null, { auto: true });
  }
  const removed = bombCards.map((card) => removeCard(player.hand, card.id)).filter(Boolean);
  const matches = state.field.filter((fieldCard) => fieldCard.month === month);
  matches.forEach((match) => removeCard(state.field, match.id));
  resolveCapture(player, removed[0], [...removed.slice(1), ...matches]);
  logEvent(state, "폭탄", `${player.name}가 ${month}월 세 장을 한꺼번에 공개해 ${matches.length ? matches.map((card) => card.label).join(', ') + '까지' : '바닥 짝 없이'} 정리했습니다.`);
  drawAndResolve(state, playerIndex, { playedCard: removed[0], playMatchCount: matches.length, drawCaptured: [] });
  queueMotion(state, { capturedIds: [...removed.map((card) => card.id), ...matches.map((card) => card.id)], seat: playerIndex, stockPulse: true }, () => finishTurn(state, playerIndex));
  return true;
}


function maybeDeclareAiShake(state, player) {
  const candidates = getShakeCandidates(player);
  if (!candidates.length) return null;
  const evaluations = candidates.map((month) => ({ month, decision: recommendShake(state, player, month) }));
  const best = evaluations.find((item) => item.decision.recommend) || evaluations[0];
  if (!best || !best.decision.recommend) return null;
  player.shakeCount += 1;
  player.shakenMonths.push(best.month);
  logEvent(state, "상대 흔들기", player.name + "가 " + best.month + "월 흔들기를 선언했습니다. " + best.decision.reason);
  return best.month;
}

function queueShakeChoice(state, playerIndex, cardId, month) {
  state.pendingShakeChoice = { playerIndex, cardId, month };
  render();
}

function logEvent(state, title, text) {
  state.logs.unshift({ title, text, time: Date.now() });
  state.logs = state.logs.slice(0, 30);
}

function removeCard(cards, cardId) {
  const index = cards.findIndex((card) => card.id === cardId);
  if (index < 0) return null;
  return cards.splice(index, 1)[0];
}

function getMatches(card, field) {
  if (!card || card.type === "joker") return [];
  return field.filter((fieldCard) => fieldCard.month === card.month);
}

function countMonth(cards, month) {
  return cards.filter((card) => card.month === month).length;
}
function countVisibleMonth(state, player, month) {
  const fieldCount = countMonth(state.field, month);
  const myHandCount = countMonth(player.hand, month);
  const capturedCount = state.players.reduce((sum, seatPlayer) => sum + countMonth(seatPlayer.captured, month), 0);
  return fieldCount + myHandCount + capturedCount;
}

function getSafeDiscardReason(state, player, card) {
  if (!card || card.type === "joker" || card.month <= 0) return "";
  const visibleCount = countVisibleMonth(state, player, card.month);
  const myHandCount = countMonth(player.hand, card.month);
  const othersCaptured = state.players
    .filter((seatPlayer) => seatPlayer.seat !== player.seat)
    .reduce((sum, seatPlayer) => sum + countMonth(seatPlayer.captured, card.month), 0);
  if (visibleCount === 4 && myHandCount >= 2) {
    return card.month + "월은 이미 공개 정보로 넉 장이 다 읽혔고, 그중 두 장이 내 손에 있어 상대가 맞출 수 없습니다.";
  }
  if (visibleCount === 4 && othersCaptured > 0) {
    return card.month + "월은 이미 밖에 다 나와 있어, 지금 내도 상대가 새로 맞춰 가져갈 여지가 거의 없습니다.";
  }
  return "";
}

function countByType(cards) {
  return cards.reduce((acc, card) => {
    const effectiveType = getEffectiveType(card);
    if (effectiveType === "joker") {
      acc.junk += getJunkValue(card);
      return acc;
    }
    if (effectiveType === "junk") {
      acc.junk += getJunkValue(card);
      return acc;
    }
    acc[effectiveType] += 1;
    return acc;
  }, { bright: 0, animal: 0, ribbon: 0, junk: 0 });
}

function getEffectiveType(card) {
  if (card.flexibleScore?.includes("junk") && card.scoreMode === "junk") {
    return "junk";
  }
  return card.type;
}

function getJunkValue(card) {
  if (card.type === "joker") {
    return card.label.includes("+3") ? 3 : 2;
  }
  if (card.junkValue) return card.junkValue;
  if (card.type === "junk" && card.label.includes("쌍피")) return 2;
  return 1;
}

function evaluateScoreBreakdown(cards) {
  const totals = countByType(cards);
  let score = 0;
  const parts = [];
  if (totals.bright >= 3) {
    const hasRainBright = cards.some((card) => card.month === 11 && card.type === "bright");
    let brightScore = 0;
    let brightLabel = "";
    if (totals.bright === 3) {
      brightScore = hasRainBright ? RULE_CONFIG.rainBrightThreeCountScore : RULE_CONFIG.plainThreeBrightScore;
      brightLabel = hasRainBright ? "비광 포함 3광" : "3광";
    } else if (totals.bright === 4) {
      brightScore = 4;
      brightLabel = "4광";
    } else {
      brightScore = 15;
      brightLabel = "5광";
    }
    score += brightScore;
    parts.push({ label: brightLabel, score: brightScore });
  }
  if (totals.animal >= 5) {
    const animalScore = totals.animal - 4;
    score += animalScore;
    parts.push({ label: "열끗 " + totals.animal + "장", score: animalScore });
  }
  if (totals.ribbon >= 5) {
    const ribbonScore = totals.ribbon - 4;
    score += ribbonScore;
    parts.push({ label: "띠 " + totals.ribbon + "장", score: ribbonScore });
  }
  if (totals.junk >= 10) {
    const junkScore = totals.junk - 9;
    score += junkScore;
    parts.push({ label: "피 " + totals.junk + "장", score: junkScore });
  }

  const combos = [
    { months: [1, 2, 3], name: "홍단", type: "ribbon", score: 3 },
    { months: [6, 9, 10], name: "청단", type: "ribbon", score: 3 },
    { months: [4, 5, 7], name: "초단", type: "ribbon", score: 3 }
  ];
  combos.forEach((combo) => {
    const ok = combo.months.every((month) => cards.some((card) => card.type === "ribbon" && card.month === month));
    if (ok) {
      score += combo.score;
      parts.push({ label: combo.name, score: combo.score });
    }
  });
  const godori = [2, 4, 8].every((month) => cards.some((card) => getEffectiveType(card) === "animal" && card.month === month));
  if (godori) {
    score += RULE_CONFIG.godoriScore;
    parts.push({ label: "고도리", score: RULE_CONFIG.godoriScore });
  }
  return { score, totals, parts };
}

function evaluateScore(cards, goCount = 0) {
  const evaluated = evaluateScoreBreakdown(cards);
  return { score: evaluated.score + (goCount || 0), totals: evaluated.totals, baseScore: evaluated.score, goScore: goCount || 0 };
}

function evaluatePlayerScoreBreakdown(player) {
  const evaluated = evaluateScoreBreakdown(player.captured);
  const goScore = player.goCount || 0;
  const parts = [...evaluated.parts];
  if (goScore > 0) {
    parts.push({ label: '고 ' + goScore + '번', score: goScore });
  }
  return { score: evaluated.score + goScore, totals: evaluated.totals, parts, baseScore: evaluated.score, goScore };
}

function evaluatePlayerScore(player) {
  const evaluated = evaluatePlayerScoreBreakdown(player);
  return { score: evaluated.score, totals: evaluated.totals, baseScore: evaluated.baseScore, goScore: evaluated.goScore };
}

function comboDefinitions() {
  return [
    { name: "홍단", type: "ribbon", months: [1, 2, 3], targetLabel: "홍단 띠" },
    { name: "청단", type: "ribbon", months: [6, 9, 10], targetLabel: "청단 띠" },
    { name: "초단", type: "ribbon", months: [4, 5, 7], targetLabel: "초단 띠" },
    { name: "고도리", type: "animal", months: [2, 4, 8], targetLabel: "고도리 새" }
  ];
}

function analyzeComboProgress(state, player) {
  return comboDefinitions().map((combo) => {
    const owned = combo.months.filter((month) =>
      player.captured.some((card) => getEffectiveType(card) === combo.type && card.month === month)
    );
    const missing = combo.months.filter((month) => !owned.includes(month));
    const brokenBy = state.players.find((candidate) =>
      candidate.seat !== player.seat
      && candidate.captured.some((card) => getEffectiveType(card) === combo.type && missing.includes(card.month))
    );
    return { ...combo, owned, missing, count: owned.length, brokenBy };
  });
}

function evaluateThreatLevel(player) {
  const evaluated = evaluatePlayerScore(player);
  const comboProgress = analyzeComboProgress({ players: [player] }, player)
    .reduce((sum, item) => sum + (item.count === 2 ? 5 : item.count === 1 ? 1.5 : 0), 0);
  const brightPressure = evaluated.totals.bright >= 2 ? evaluated.totals.bright * 11 : evaluated.totals.bright * 3.5;
  const animalPressure = evaluated.totals.animal >= 4 ? 4 : evaluated.totals.animal * 1.2;
  const ribbonPressure = evaluated.totals.ribbon >= 4 ? 3.5 : evaluated.totals.ribbon;
  const junkPressure = evaluated.totals.junk >= 8 ? 2.5 : evaluated.totals.junk * 0.2;
  return evaluated.score * 10 + brightPressure + animalPressure + ribbonPressure + junkPressure + comboProgress;
}

function buildComboWarnings(state) {
  const mine = analyzeComboProgress(state, state.players[USER_INDEX]);
  const rivals = state.players
    .filter((player) => player.seat !== USER_INDEX)
    .flatMap((player) => analyzeComboProgress(state, player).map((progress) => ({ player, progress })));

  const myBest = mine.find((item) => item.count >= 2 && !item.brokenBy);
  const rivalThreat = rivals.find((item) => item.progress.count >= 2 && !item.progress.brokenBy);
  const rivalBroken = rivals.find((item) => item.progress.count >= 1 && item.progress.brokenBy);

  return {
    mine: myBest
      ? `내 쪽은 ${myBest.name}이 이어지고 있습니다. ${myBest.missing[0]}월 ${myBest.targetLabel}만 더 보면 완성입니다.`
      : "내 공개패 기준으로 바로 완성 직전인 홍단/청단/고도리 줄은 아직 없습니다.",
    rival: rivalThreat
      ? `${rivalThreat.player.name}는 ${rivalThreat.progress.name} ${rivalThreat.progress.count}장입니다. ${rivalThreat.progress.missing[0]}월 ${rivalThreat.progress.targetLabel}은 특히 주의하세요.`
      : "상대가 바로 완성 직전인 홍단/청단/고도리 줄은 아직 뚜렷하지 않습니다.",
    broken: rivalBroken
      ? `${rivalBroken.player.name}의 ${rivalBroken.progress.name}은 ${rivalBroken.progress.brokenBy.name}가 필요한 패를 먹어서 한 번 끊겼습니다.`
      : "공개 정보로 보면 아직 상대 콤보가 완전히 깨진 줄은 많지 않습니다."
  };
}

function getNoCaptureDiscardPriority(card) {
  if (!card || card.type === "joker") return 0;
  const label = card.label || "";
  if (label.includes("비광")) return 18;
  if (card.month === 10 && card.type === "animal") return 16;
  if (label.includes("초단") || (card.type === "ribbon" && [4, 5, 7].includes(card.month))) return 14;
  if (card.month === 11 && card.type === "ribbon") return 8;
  return 0;
}

function explainBrokenComboDiscard(state, player, card) {
  if (!card || card.type !== "ribbon") return "";
  const related = analyzeComboProgress(state, player).find((combo) => combo.type === "ribbon" && combo.months.includes(card.month));
  if (!related) return "";
  const blocked = state.players
    .filter((opponent) => opponent.seat !== player.seat)
    .flatMap((opponent) => related.months
      .filter((month) => month !== card.month && opponent.captured.some((captured) => getEffectiveType(captured) === related.type && captured.month === month))
      .map((month) => ({ opponent, month }))
    );
  if (!blocked.length) {
    if (!related.brokenBy) return "";
    const fallbackMonth = related.missing.find((month) => month !== card.month) || related.missing[0];
    return related.name + " 줄은 이미 " + related.brokenBy.name + "가 필요한 " + fallbackMonth + "월을 먹어 끊겼습니다. " + card.label + "은 그만큼 우선 정리하기 쉬운 패입니다.";
  }
  const blockedMonths = [...new Set(blocked.map((item) => item.month))].sort((a, b) => a - b);
  const blockerNames = [...new Set(blocked.map((item) => item.opponent.name))];
  return related.name + " 줄은 이미 " + blockerNames.join(", ") + "가 필요한 " + blockedMonths.join(", ") + "월을 먹어 끊겼습니다. " + card.label + "은 단 줄 기대값이 낮아 먼저 정리하기 쉬운 패입니다.";
}

function estimateCardValue(card) {
  const effectiveType = getEffectiveType(card);
  if (card.type === "joker") return getJunkValue(card) * 2.5;
  if (effectiveType === "bright") return 11;
  if (effectiveType === "animal") return 6;
  if (effectiveType === "ribbon") return 4.5;
  const junkValue = getJunkValue(card);
  if (junkValue >= 2) return junkValue * 4.2;
  return junkValue * 1.6;
}

function comboProgressValue(cards) {
  let value = 0;
  comboDefinitions().forEach((combo) => {
    const count = combo.months.filter((month) =>
      cards.some((card) => getEffectiveType(card) === combo.type && card.month === month)
    ).length;
    if (count === 1) value += 1.2;
    if (count === 2) value += 5.5;
    if (count === 3) value += 7.5;
  });
  const godoriCount = [2, 4, 8].filter((month) =>
    cards.some((card) => getEffectiveType(card) === "animal" && card.month === month)
  ).length;
  if (godoriCount === 1) value += 1.5;
  if (godoriCount === 2) value += 6.5;
  if (godoriCount === 3) value += 8;
  return value;
}

function getComboCounts(cards) {
  const counts = new Map();
  comboDefinitions().forEach((combo) => {
    const count = combo.months.filter((month) =>
      cards.some((card) => getEffectiveType(card) === combo.type && card.month === month)
    ).length;
    counts.set(combo.name, count);
  });
  const godoriCount = [2, 4, 8].filter((month) =>
    cards.some((card) => getEffectiveType(card) === "animal" && card.month === month)
  ).length;
  counts.set("고도리", godoriCount);
  return counts;
}

function explainPublicComboGain(beforeCards, afterCards) {
  const beforeCounts = getComboCounts(beforeCards);
  const afterCounts = getComboCounts(afterCards);
  const improved = [];
  ["홍단", "청단", "초단", "고도리"].forEach((name) => {
    const before = beforeCounts.get(name) || 0;
    const after = afterCounts.get(name) || 0;
    if (after > before && after >= 2) {
      improved.push(name + " " + after + "장");
    }
  });
  if (!improved.length) return "";
  return improved.join(", ") + "으로 이어집니다.";
}

function explainPublicDenial(state, player, cards) {
  const months = [...new Set(cards.filter((card) => card.month > 0).map((card) => card.month))];
  const warnings = [];
  state.players.forEach((opponent) => {
    if (opponent.seat === player.seat) return;
    analyzeComboProgress({ players: state.players.map((candidate) => ({ seat: candidate.seat, captured: candidate.captured })) }, opponent)
      .filter((progress) => progress.count >= 2 && !progress.brokenBy)
      .forEach((progress) => {
        const blocked = progress.missing.filter((month) => months.includes(month));
        if (!blocked.length) return;
        warnings.push(opponent.name + "의 " + progress.name + " 줄을 막는 카드입니다.");
      });
  });
  return warnings[0] || "";
}

function explainExposureReason(state, player, card) {
  if (!card || card.type === "joker") return "";
  const publicComboRisk = explainPublicDenial(state, player, [card]);
  if (publicComboRisk) {
    return publicComboRisk.replace("막는 카드입니다.", card.month + "월을 열어주면 좋아할 수 있습니다.");
  }
  return card.month + "월은 아직 공개 정보상 특정 줄과 바로 이어진다고 보기 어렵습니다.";
}

function evaluateLiveComboHold(state, player, card) {
  if (!card || card.type === "joker") return { penalty: 0, reason: "" };
  const effectiveType = getEffectiveType(card);
  let best = { penalty: 0, reason: "" };
  comboDefinitions()
    .filter((combo) => combo.type === effectiveType && combo.months.includes(card.month))
    .forEach((combo) => {
      const otherMonths = combo.months.filter((month) => month !== card.month);
      const ownedCaptured = otherMonths.filter((month) => player.captured.some((owned) => getEffectiveType(owned) === combo.type && owned.month === month));
      const ownedHand = otherMonths.filter((month) => player.hand.some((owned) => owned.id !== card.id && getEffectiveType(owned) === combo.type && owned.month === month));
      const rivalTaken = otherMonths.filter((month) => state.players.some((opponent) => opponent.seat !== player.seat && opponent.captured.some((owned) => getEffectiveType(owned) === combo.type && owned.month === month)));
      if (rivalTaken.length) return;
      const ownedTotal = ownedCaptured.length + ownedHand.length;
      if (!ownedTotal) return;
      const penalty = ownedTotal >= 2 ? 30 : 20;
      const heldMonths = [...new Set([...ownedCaptured, ...ownedHand, card.month])].sort((a, b) => a - b);
      const reason = combo.name + " 줄이 아직 살아 있고 내 쪽 " + heldMonths.join(", ") + "월이 잡혀 있어 " + card.label + "은 먼저 풀면 안 됩니다.";
      if (penalty > best.penalty) best = { penalty, reason };
    });
  return best;
}

function evaluateFieldExposure(state, player, card) {
  if (!card || card.type === "joker") return 0;
  const safeDiscardReason = getSafeDiscardReason(state, player, card);
  if (safeDiscardReason) return 0.8;
  let penalty = estimateCardValue(card) * 0.45;
  state.players.forEach((opponent) => {
    if (opponent.seat === player.seat) return;
    const sameMonthInHand = opponent.hand.filter((candidate) => candidate.month === card.month && candidate.type !== "joker").length;
    if (sameMonthInHand > 0) penalty += sameMonthInHand * 3.4;
    analyzeComboProgress(state, opponent).forEach((progress) => {
      if (!progress.brokenBy && progress.missing.includes(card.month)) {
        penalty += progress.count >= 2 ? 5.5 : 2.2;
      }
    });
  });
  return penalty;
}

function evaluateCaptureDenial(state, player, cards) {
  const months = [...new Set(cards.filter((card) => card.month > 0).map((card) => card.month))];
  let bonus = 0;
  state.players.forEach((opponent) => {
    if (opponent.seat === player.seat) return;
    months.forEach((month) => {
      const sameMonthInHand = opponent.hand.filter((candidate) => candidate.month === month && candidate.type !== "joker").length;
      if (sameMonthInHand > 0) bonus += sameMonthInHand * 2.8;
    });
    analyzeComboProgress(state, opponent).forEach((progress) => {
      const blocked = progress.missing.filter((month) => months.includes(month)).length;
      if (!blocked) return;
      bonus += blocked * (progress.count >= 2 ? 6 : 2.5);
    });
  });
  return bonus;
}

function chooseBestCaptureTarget(state, player, playedCard, matches) {
  if (!matches.length) return null;
  const currentScore = evaluatePlayerScore(player).score;
  return [...matches].sort((left, right) => {
    const leftSimulated = [...player.captured, playedCard, left];
    const rightSimulated = [...player.captured, playedCard, right];
    let leftValue = estimateCardValue(left) + (evaluateScore(leftSimulated).score - currentScore) * 8 + comboProgressValue(leftSimulated) + evaluateCaptureDenial(state, player, [left]);
    let rightValue = estimateCardValue(right) + (evaluateScore(rightSimulated).score - currentScore) * 8 + comboProgressValue(rightSimulated) + evaluateCaptureDenial(state, player, [right]);
    if (getJunkValue(left) >= 2) leftValue += 8;
    if (getJunkValue(right) >= 2) rightValue += 8;
    return rightValue - leftValue;
  })[0];
}

function hasShakeOpportunity(player) {
  const counts = new Map();
  player.hand.forEach((card) => {
    if (card.type === "joker") return;
    counts.set(card.month, (counts.get(card.month) || 0) + 1);
  });
  for (const [month, count] of counts.entries()) {
    if (count >= 3) return month;
  }
  return null;
}

function pickPreferredCapture(cards) {
  const priority = { bright: 4, animal: 3, ribbon: 2, junk: 1 };
  return [...cards].sort((a, b) => priority[b.type] - priority[a.type])[0];
}

function cardMonthName(card) {
  return card.type === "joker" ? "조커" : MONTH_NAMES[card.month - 1];
}

function summarizeField(field) {
  const singles = [];
  const doubles = [];
  const triples = [];
  for (let month = 1; month <= 12; month += 1) {
    const count = countMonth(field, month);
    if (count === 1) singles.push(month);
    if (count === 2) doubles.push(month);
    if (count >= 3) triples.push(month);
  }
  const parts = [];
  if (triples.length) parts.push(`${triples.join(", ")}월은 한 번에 크게 먹을 자리예요.`);
  if (doubles.length) parts.push(`${doubles.join(", ")}월은 선택 수가 생깁니다.`);
  if (singles.length) parts.push(`${singles.slice(0, 3).join(", ")}월 외톨이 패는 쪽 줄로 이어질 수 있어요.`);
  return parts[0] || "바닥은 아직 조용합니다. 외톨이 월과 두 장 깔린 월만 기억해두면 좋아요.";
}

function formatTypeHint(cards) {
  const labels = [];
  if (cards.some((card) => card.type === "bright")) labels.push("광 있음");
  if (cards.some((card) => card.type === "animal")) {
    const godori = cards.some((card) => [2, 4, 8].includes(card.month) && card.type === "animal");
    labels.push(godori ? "고도리 새 있음" : "열끗 있음");
  }
  if (cards.some((card) => card.type === "ribbon")) labels.push("띠 있음");
  const junkCount = cards.filter((card) => card.type === "junk").length;
  if (junkCount) labels.push(`피 ${junkCount}장`);
  return labels;
}

function fieldTooltip(card, field) {
  if (card.type === "joker") {
    return `${card.label}, 바로 피 점수로 계산됩니다.`;
  }
  const sameMonth = field.filter((fieldCard) => fieldCard.month === card.month);
  const hints = formatTypeHint(sameMonth);
  return [`${card.month}월`, ...hints].join(", ");
}

function sortHandCards(cards) {
  const typeOrder = { bright: 0, animal: 1, ribbon: 2, junk: 3, joker: 4 };
  return [...cards].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return typeOrder[a.type] - typeOrder[b.type];
  });
}

function sortFieldCards(cards) {
  const typeOrder = { bright: 0, animal: 1, ribbon: 2, junk: 3, joker: 4 };
  return [...cards].sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return typeOrder[a.type] - typeOrder[b.type];
  });
}

function groupCapturedCards(cards) {
  const bright = [];
  const animal = [];
  const ribbon = [];
  const junk = [];

  cards.forEach((card) => {
    const effectiveType = getEffectiveType(card);
    if (effectiveType === "bright") {
      bright.push(card);
    } else if (effectiveType === "animal") {
      animal.push(card);
    } else if (effectiveType === "ribbon") {
      ribbon.push(card);
    } else {
      junk.push(card);
    }
  });

  const junkRows = [];
  for (let index = 0; index < junk.length; index += 5) {
    junkRows.push(junk.slice(index, index + 5));
  }

  return { bright, animal, ribbon, junkRows };
}

function renderCapturedLayout(cards, options = {}) {
  const motion = app.state?.motion || createMotionState();
  const compact = options.compact === true;
  const seatRotationClass = options.seat === 1 ? " opponent-rot-cw" : options.seat === 2 ? " opponent-rot-ccw" : "";
  const groups = groupCapturedCards(cards);
  const buildExtraClass = (card) => {
    const motionClass = motion.capturedIds.includes(card.id) ? ` motion-capture-pop motion-seat-${motion.seat}` : "";
    return (motionClass + seatRotationClass).trim();
  };
  const brightHtml = groups.bright.map((card) => renderCardVisual(card, { small: true, extraClass: buildExtraClass(card) })).join("");
  const ribbonHtml = groups.ribbon.map((card) => renderCardVisual(card, { small: true, extraClass: buildExtraClass(card) })).join("");
  const animalHtml = groups.animal.map((card) => renderCardVisual(card, { small: true, extraClass: buildExtraClass(card) })).join("");
  const junkHtml = [...groups.junkRows].reverse().map((row) => `
    <div class="captured-junk-row">
      ${row.map((card) => renderCardVisual(card, { small: true, extraClass: buildExtraClass(card) })).join("")}
    </div>
  `).join("");
  const brightClass = `captured-bright${brightHtml ? "" : " is-empty"}`;
  const ribbonClass = `captured-ribbon${ribbonHtml ? "" : " is-empty"}`;
  const animalClass = `captured-animal${animalHtml ? "" : " is-empty"}`;
  const junkClass = `captured-junk${junkHtml ? "" : " is-empty"}`;
  const middleClass = `captured-middle${(!ribbonHtml && !animalHtml) ? " is-empty" : ""}`;

  return `
    <div class="captured-layout${compact ? " compact-opponent" : ""}">
      <div class="${brightClass}">${brightHtml || (compact ? "" : "<span class='captured-empty'>광</span>")}</div>
      <div class="${middleClass}">
        <div class="${ribbonClass}">${ribbonHtml || (compact ? "" : "<span class='captured-empty'>띠</span>")}</div>
        <div class="${animalClass}">${animalHtml || (compact ? "" : "<span class='captured-empty'>열끗</span>")}</div>
      </div>
      <div class="${junkClass}">${junkHtml || (compact ? "" : "<span class='captured-empty'>피</span>")}</div>
    </div>
  `;
}

function buildSingleMatchReason(state, player, playedCard, targetCard) {
  if (!targetCard) return [];
  const reasons = [];
  const effectiveType = getEffectiveType(targetCard);
  if (effectiveType === "bright") reasons.push(targetCard.label + "은 광이라 같은 한 쌍 중에서도 값이 가장 큽니다.");
  else if (effectiveType === "animal") reasons.push(targetCard.label + "은 열끗이라 일반 피보다 이후 점수 연결 폭이 큽니다.");
  else if (effectiveType === "ribbon") reasons.push(targetCard.label + "은 띠라 홍단, 청단, 초단 줄 재료가 됩니다.");
  else if (getJunkValue(targetCard) >= 2) reasons.push(targetCard.label + "은 일반 피보다 값이 커서 같은 한 쌍이라도 우선순위가 올라갑니다.");

  const afterCards = [...player.captured, playedCard, targetCard];
  const comboReason = explainPublicComboGain(player.captured, afterCards);
  if (comboReason) {
    reasons.push(comboReason);
  }

  const denialReason = explainPublicDenial(state, player, [targetCard]);
  if (denialReason) {
    reasons.push(denialReason);
  }

  const exposure = explainExposureReason(state, player, targetCard);
  if (exposure && !reasons.includes(exposure) && reasons.length < 4) {
    reasons.push(exposure);
  }
  return reasons;
}

function scoreMove(state, player, card) {
  const matches = getMatches(card, state.field);
  const turnContext = { playedCard: card, playMatchCount: matches.length, drawCaptured: [] };
  const simulatedCaptured = [...player.captured];
  const before = evaluateScore(player.captured);
  const beforeCombo = comboProgressValue(player.captured);
  const handMonthCount = card.type === "joker" ? 0 : countMonth(player.hand, card.month);
  const preferredTarget = matches.length >= 2 ? chooseBestCaptureTarget(state, player, card, matches) : matches[0] || null;
  let score = 0;
  const reasons = [];
  const tags = [];

  if (card.type === "joker") {
    score += 42;
    reasons.push("조커는 즉시 피를 올리고 판에 위험을 남기지 않는 안전한 수입니다.");
    simulatedCaptured.push(card);
  } else if (matches.length === 0) {
    const exposurePenalty = evaluateFieldExposure(state, player, card);
    const discardValuePenalty = estimateCardValue(card) * (getJunkValue(card) >= 2 ? 2.4 : 1.1);
    const noCapturePriority = getNoCaptureDiscardPriority(card);
    score -= 10 + exposurePenalty + discardValuePenalty - (noCapturePriority * 1.6);
    reasons.push("지금 내면 바닥에 패를 남겨 상대에게 연결 자리를 줍니다.");
    const safeDiscardReason = getSafeDiscardReason(state, player, card);
    const liveComboHold = evaluateLiveComboHold(state, player, card);
    if (liveComboHold.penalty > 0) {
      score -= liveComboHold.penalty;
      reasons.push(liveComboHold.reason);
    }
    if (safeDiscardReason) {
      score += 16;
      reasons.push(safeDiscardReason);
    }
    if (getJunkValue(card) >= 2) {
      score -= 34;
      reasons.push(card.label + "은 쌍피라 일반 피보다 값이 커서, 먹을 게 없는 턴에도 우선순위를 크게 내려야 합니다.");
    } else {
      const brokenComboReason = explainBrokenComboDiscard(state, player, card);
      if (brokenComboReason) {
        reasons.push(brokenComboReason);
      } else if (getNoCaptureDiscardPriority(card) > 0) {
        if (card.month === 10 && card.type === "animal") {
          reasons.push(card.label + "은 풍 패라 먹을 게 없는 턴엔 먼저 정리하는 편입니다.");
        } else if (card.label.includes("비광")) {
          reasons.push(card.label + "은 비광이라 비풍초 우선순위로 먼저 정리하는 편입니다.");
        } else if (card.label.includes("초단")) {
          reasons.push(card.label + "은 초단이라 먹을 게 없는 턴엔 먼저 정리하는 편입니다.");
        } else {
          reasons.push(card.label + "은 비풍초 쪽 우선순위에 가까워, 먹을 게 없는 턴엔 먼저 정리하는 편입니다.");
        }
      } else if (liveComboHold.penalty > 0) {
        reasons.push(card.month + "월 띠는 내 단 줄 핵심 재료라 지금은 보류 쪽이 맞습니다.");
      } else if (card.type === "ribbon") {
        reasons.push(card.month + "월 띠는 단 줄 재료가 될 수 있어 보류 가치가 있습니다.");
      } else if (card.type === "animal" || card.type === "bright") {
        reasons.push(card.month + "월 " + (card.type === "bright" ? "광" : "열끗") + "은 점수 연결 폭이 커서 쉽게 내주지 않는 편이 좋습니다.");
      } else {
        reasons.push(explainExposureReason(state, player, card));
      }
    }
    if (exposurePenalty >= 8) {
      reasons.push("특히 이 월은 상대가 받아먹기 좋은 자리라 손해가 커질 수 있습니다.");
    }
  } else if (matches.length === 1) {
    score += 14;
    reasons.push("한 쌍이 확정이라 가장 안정적인 한 수입니다.");
    simulatedCaptured.push(card, matches[0]);
    tags.push("쪽");
    if (matches[0].type !== "junk") {
      score += 4;
      reasons.push("중요한 패를 지금 챙기면, 다음 턴에 상대에게 넘겨줄 위험이 줄어듭니다.");
    }
    buildSingleMatchReason(state, player, card, matches[0]).forEach((reason) => reasons.push(reason));
    score += evaluateCaptureDenial(state, player, [matches[0]]);
  } else if (matches.length === 2) {
    score += 16;
    reasons.push("둘 중 하나를 고를 수 있어서, 같은 한 번을 써도 자기에게 더 유리한 결과를 만들 수 있습니다.");
    simulatedCaptured.push(card, preferredTarget);
    tags.push("따닥");
    if (preferredTarget) {
      reasons.push(preferredTarget.label + " 쪽이 지금 내 점수줄과 이후 연결에 더 좋습니다.");
      score += estimateCardValue(preferredTarget) + evaluateCaptureDenial(state, player, [preferredTarget]);
    }
  } else {
    score += 24;
    reasons.push("이 월을 한 번에 정리하면 바닥이 깔끔해지고, 상대가 이어먹을 자리도 같이 줄어듭니다.");
    simulatedCaptured.push(card, ...matches);
    score += evaluateCaptureDenial(state, player, matches);
  }

  if (handMonthCount >= 3) {
    tags.push("흔들기");
    score += 6;
    reasons.push("같은 월 3장이 손에 모여 있어 흔들기 판단을 함께 볼 수 있습니다.");
  }

  const after = evaluateScore(simulatedCaptured);
  const gain = after.score - before.score;
  const comboGain = comboProgressValue(simulatedCaptured) - beforeCombo;
  if (gain > 0) {
    score += gain * 8;
    reasons.push("지금 가져가면 내 점수가 곧바로 " + gain + "점 이상 살아납니다.");
  }
  if (comboGain > 0.6) {
    score += comboGain * 2.2;
    reasons.push("이 수는 내 홍단, 청단, 초단, 고도리 같은 연결도 같이 살려줍니다.");
  }

  const leadScore = Math.max(...state.players.filter((p) => p.seat !== player.seat).map((p) => evaluateScore(p.captured).score), 0);
  if (leadScore >= 5 && matches.length === 0) {
    score -= 5;
    reasons.push("상대가 달리는 중이라 빈 바닥 깔기는 더 위험합니다.");
  }

  return {
    card,
    score,
    matches,
    preferredTargetId: preferredTarget ? preferredTarget.id : null,
    tags,
    shortReason: reasons[0],
    reasons
  };
}

function inferStrategyLine(state, user, recommendations) {
  const score = evaluateScoreBreakdown(user.captured);
  const comboProgress = analyzeComboProgress(state, user)
    .filter((item) => !item.brokenBy)
    .sort((left, right) => right.count - left.count);
  const bestCombo = comboProgress[0] || null;
  const bestMove = recommendations[0] || null;
  const bestMoveGain = bestMove ? buildSingleMovePlanLabel(bestMove) : "";

  if (score.totals.bright >= 2 || (bestMove && bestMove.matches.some((card) => getEffectiveType(card) === 'bright'))) {
    return `<strong>광 중심</strong>으로 보세요. 이미 광 줄이 살아 있고, ${bestMoveGain || '광이 붙는 수를 우선 보면 좋습니다.'}`;
  }
  if (bestCombo && bestCombo.name === '고도리' && bestCombo.count >= 2) {
    return `<strong>고도리 중심</strong>으로 보세요. ${bestCombo.name} ${bestCombo.count}장이라 ${bestCombo.missing[0]}월 새만 더 보면 됩니다.`;
  }
  if (bestCombo && ['홍단', '청단', '초단'].includes(bestCombo.name) && bestCombo.count >= 2) {
    return `<strong>${bestCombo.name}</strong> 줄을 우선 보세요. ${bestCombo.count}장이라 ${bestCombo.missing[0]}월 띠가 핵심입니다.`;
  }
  if (score.totals.junk >= 6 || (bestMove && bestMove.matches.some((card) => getJunkValue(card) >= 2))) {
    return `<strong>피 중심</strong>으로 끌고 가세요. 지금은 쌍피와 피를 모아 막판 점수까지 연결하는 편이 좋습니다.`;
  }
  if (score.totals.animal >= 3 || (bestMove && bestMove.matches.some((card) => getEffectiveType(card) === 'animal'))) {
    return `<strong>열끗 중심</strong>으로 보세요. 열끗 줄이 붙으면 고도리와 함께 점수 폭이 커집니다.`;
  }
  return `<strong>안전 운영</strong>이 더 좋습니다. 지금은 한 줄을 무리하게 밀기보다 상대가 좋아할 월을 덜 열고, 점수 나는 카드부터 챙기세요.`;
}

function buildSingleMovePlanLabel(move) {
  if (!move) return '';
  if (move.matches.some((card) => getEffectiveType(card) === 'bright')) return '광이 붙는 수부터 챙기세요.';
  if (move.matches.some((card) => getEffectiveType(card) === 'animal')) return '열끗이 붙는 수부터 챙기세요.';
  if (move.matches.some((card) => getEffectiveType(card) === 'ribbon')) return '띠 줄이 이어지는 수부터 챙기세요.';
  if (move.matches.some((card) => getJunkValue(card) >= 2)) return '쌍피부터 챙겨 피 점수를 키우세요.';
  return '';
}

function inferSkillLine(state, user, recommendations) {
  const shakeMonth = hasShakeOpportunity(user);
  if (shakeMonth) {
    const moves = recommendations.filter((move) => move.card.month === shakeMonth);
    const bestShake = moves.sort((a, b) => b.score - a.score)[0];
    if (bestShake && bestShake.matches.length > 0) {
      return `${shakeMonth}월 흔들기 후보가 있습니다. 지금은 바닥 연결까지 있어서 공개 이득이 있고, 상대에게 압박을 줄 수 있는 모양입니다.`;
    }
    return `${shakeMonth}월 흔들기 모양은 있지만, 바닥 연결이 약해서 지금 흔들면 정보만 주고 끝날 수 있습니다. 이번 턴은 보류 쪽이 더 좋아 보여요.`;
  }
  if (recommendations.some((move) => move.tags.includes("따닥"))) {
    return "두 장 깔린 월을 건드리면 선택이 생깁니다. 광이나 열끗이 붙은 쪽을 기억해두세요.";
  }
  if (recommendations.some((move) => move.tags.includes("쪽"))) {
    return "혼자 떠 있는 바닥패를 먹는 줄이 보여요. 이런 수는 내가 이득을 보면서 상대가 맞출 자리도 같이 없애줍니다.";
  }
  return "지금은 큰 기술보다 손해를 줄이는 국면입니다. 상대가 좋아할 월을 바닥에 늘리지 않는 쪽이 중요합니다.";
}

function buildRecommendationRanks(recommendations) {
  const ranks = new Map();
  let currentRank = 0;
  let lastScore = null;
  recommendations.forEach((item, index) => {
    if (lastScore === null || item.score !== lastScore) {
      currentRank = index + 1;
      lastScore = item.score;
    }
    ranks.set(item.card.id, currentRank);
  });
  return ranks;
}

function formatTutorOverview(move) {
  if (!move) return "지금 손패 분석 중입니다.";
  const hiddenPrefixes = [
    "한 쌍이 확정이라 가장 안정적인 한 수입니다.",
    "중요한 패를 지금 챙기면, 다음 턴에 상대에게 넘겨줄 위험이 줄어듭니다.",
    "둘 중 하나를 고를 수 있어서, 같은 한 번을 써도 자기에게 더 유리한 결과를 만들 수 있습니다.",
    "지금 내면 바닥에 패를 남겨 상대에게 연결 자리를 줍니다.",
    "이 월을 한 번에 정리하면 바닥이 깔끔해지고, 상대가 이어먹을 자리도 같이 줄어듭니다.",
    "같은 월 3장이 손에 모여 있어 흔들기 판단을 함께 볼 수 있습니다."
  ];
  const filtered = move.reasons.filter((reason) => !hiddenPrefixes.includes(reason));
  const unique = [];
  filtered.forEach((reason) => {
    if (!reason || unique.includes(reason)) return;
    unique.push(reason);
  });
  const top = unique.slice(0, 2);
  return top.length ? top.join(" ") : move.shortReason;
}

function cloneGameState(state) {
  if (typeof structuredClone === "function") return structuredClone(state);
  return JSON.parse(JSON.stringify(state));
}

function withSimulationState(simState, callback) {
  const previousState = app.state;
  const previousRender = render;
  const previousAssessTutor = assessTutor;
  const previousScheduleAiTurn = scheduleAiTurn;
  app.state = simState;
  render = () => {};
  assessTutor = () => {};
  scheduleAiTurn = () => {};
  try {
    return callback();
  } finally {
    app.state = previousState;
    render = previousRender;
    assessTutor = previousAssessTutor;
    scheduleAiTurn = previousScheduleAiTurn;
  }
}

function resolveSimulationGoStop(state) {
  while (state.pendingGoStopChoice && state.winner == null) {
    const choice = state.pendingGoStopChoice;
    const suggestion = recommendGoStop(state, choice.playerIndex, { useLookahead: false });
    if (suggestion.action === "stop") {
      state.pendingGoStopChoice = null;
      endGame(state, choice.playerIndex, "stop");
      return;
    }
    state.players[choice.playerIndex].goCount += 1;
    state.players[choice.playerIndex].score = evaluatePlayerScore(state.players[choice.playerIndex]).score;
    continueAfterGo(state, choice.playerIndex);
  }
}

function runSimulationAiTurn(state) {
  if (state.winner != null || state.currentPlayer === USER_INDEX) return;
  const player = state.players[state.currentPlayer];
  const shakenMonth = maybeDeclareAiShake(state, player);
  if (shakenMonth != null) {
    player.shakeCount = player.shakeCount;
  }
  const choices = player.hand.map((card) => scoreMove(state, player, card)).sort((a, b) => b.score - a.score);
  const best = choices[0];
  if (!best) {
    endGame(state, null, "deck");
    return;
  }
  resolveCardPlay(state, player.seat, best.card.id, best.preferredTargetId, { auto: true });
  resolveSimulationGoStop(state);
}

function evaluateSimulationBalance(state) {
  const me = state.players[USER_INDEX];
  const myScore = evaluatePlayerScore(me).score;
  const myThreat = evaluateThreatLevel(me);
  const rivalScores = state.players
    .filter((player) => player.seat !== USER_INDEX)
    .map((player) => ({ score: evaluatePlayerScore(player).score, threat: evaluateThreatLevel(player) }));
  const bestRivalScore = Math.max(...rivalScores.map((item) => item.score), 0);
  const bestRivalThreat = Math.max(...rivalScores.map((item) => item.threat), 0);
  if (state.winner != null) {
    if (state.winner === USER_INDEX) return 120;
    return -120;
  }
  return (myScore - bestRivalScore) * 16 + (myThreat - bestRivalThreat) * 0.75;
}

function scoreTutorMove(state, move) {
  const snapshot = cloneGameState(state);
  return withSimulationState(snapshot, () => {
    resolveCardPlay(snapshot, USER_INDEX, move.card.id, move.preferredTargetId, { auto: true });
    resolveSimulationGoStop(snapshot);
    let safetyGuard = 0;
    while (snapshot.winner == null && snapshot.currentPlayer !== USER_INDEX && safetyGuard < 2) {
      runSimulationAiTurn(snapshot);
      safetyGuard += 1;
    }
    const lookaheadScore = evaluateSimulationBalance(snapshot);
    return {
      ...move,
      heuristicScore: move.score,
      lookaheadScore,
      score: move.score + lookaheadScore
    };
  });
}

function formatScoreBreakdown(cards) {
  const breakdown = evaluateScoreBreakdown(cards);
  if (!breakdown.parts.length) return "점수 없음";
  return breakdown.parts.map((part) => part.label + " " + part.score + "점").join(" + ");
}

function formatPlayerScoreBreakdown(player) {
  const breakdown = evaluatePlayerScoreBreakdown(player);
  if (!breakdown.parts.length) return "점수 없음";
  return breakdown.parts.map((part) => part.label + " " + part.score + "점").join(" + ");
}

function summarizePlayerResult(player) {
  const evaluated = evaluatePlayerScoreBreakdown(player);
  return player.name + " " + evaluated.score + "점(" + formatPlayerScoreBreakdown(player) + ")";
}

function buildPayoutSummary(state, winner) {
  const winnerEval = evaluatePlayerScoreBreakdown(winner);
  const settlementScore = Math.max(RULE_CONFIG.stopThreshold || 3, winner.score || 0);
  const base = settlementScore * MONEY_PER_POINT;
  const wonByJunk = winnerEval.parts.some((part) => part.label.startsWith("피 "));
  const losers = state.players
    .filter((player) => player.seat !== winner.seat)
    .map((player) => {
      const loserEval = evaluateScoreBreakdown(player.captured);
      let multiplier = 1;
      const tags = [];
      if (wonByJunk && loserEval.totals.junk < 6) {
        multiplier *= 2;
        tags.push("피박");
      }
      const amount = base * multiplier;
      return { player, amount, multiplier, tags };
    });
  const total = losers.reduce((sum, loser) => sum + loser.amount, 0);
  const detail = losers
    .map((loser) => loser.player.name + " " + loser.amount.toLocaleString("ko-KR") + "원" + (loser.tags.length ? "(" + loser.tags.join(", ") + ")" : ""))
    .join(" + ");
  const extraReasons = [];
  if (settlementScore > (winner.score || 0)) {
    extraReasons.push("정산은 3점부터 시작해 " + winner.name + "의 " + (winner.score || 0) + "점 승리도 3점 기준으로 계산");
  }
  const tagReasons = losers
    .filter((loser) => loser.tags.length)
    .map((loser) => loser.player.name + "은 " + loser.tags.join(", ") + " 적용");
  const reasons = [...extraReasons, ...tagReasons].join(" · ");
  return { base, total, detail, reasons, wonByJunk, losers, settlementScore };
}

function getOpponentGoStopStatus(state, player) {
  const canStopNow = RULE_CONFIG.enableGoStop && player.score >= RULE_CONFIG.stopThreshold;
  if (!canStopNow) return null;
  const suggestion = recommendGoStop(state, player.seat, { useLookahead: false });
  const actionLabel = suggestion.action === "go" ? "고 쪽" : "스톱 쪽";
  const goNote = player.goCount > 0 ? "이미 고 " + player.goCount + "번 상태입니다. " : "";
  const shortReason = suggestion.action === "go"
    ? (suggestion.goBalance > suggestion.stopBalance
      ? "한 턴 더 벌 여지가 있습니다"
      : "고를 볼 수는 있지만 위험도 큽니다")
    : (player.score === RULE_CONFIG.stopThreshold
      ? "지금 끊어도 이기는 점수입니다"
      : "지금 점수를 굳히는 쪽이 낫습니다");
  return {
    canStopNow,
    action: suggestion.action,
    actionLabel,
    shortReason: goNote + shortReason,
    forecast: suggestion.action === "go" ? suggestion.goForecast : suggestion.stopForecast,
    reason: suggestion.action === "go" ? suggestion.goReason : suggestion.stopReason
  };
}

function inferOpponentTrend(player) {
  const evaluated = evaluateScoreBreakdown(player.captured);
  const comboNames = findCompletedNamedCombos(player.captured);
  const comboProgress = analyzeComboProgress({ players: [player] }, player)
    .filter((item) => item.count >= 2 && !item.brokenBy);
  const ribbonProgress = comboProgress.filter((item) => ["홍단", "청단", "초단"].includes(item.name));
  const parts = [];

  if (comboProgress.some((item) => item.name === "고도리") || comboNames.includes("고도리")) {
    parts.push("고도리 줄이 강합니다");
  }
  if (ribbonProgress.length) {
    parts.push(ribbonProgress.map((item) => item.name + " " + item.count + "장").join(", "));
    parts.push("띠 줄을 모으는 흐름입니다");
  }
  if (!ribbonProgress.length && (comboNames.some((name) => ["홍단", "청단", "초단"].includes(name)) || evaluated.totals.ribbon >= 4)) {
    parts.push("띠 줄을 모으는 흐름입니다");
  }
  if (evaluated.totals.bright >= 2) {
    parts.push("광 " + evaluated.totals.bright + "장입니다");
  }
  if (player.goCount > 0) {
    parts.push("이미 고 " + player.goCount + "번 했습니다");
  }
  if (evaluated.totals.junk >= 8) {
    parts.push("피를 모아 막판 점수를 보려는 흐름입니다");
  }
  if (evaluated.totals.animal >= 4) {
    parts.push("열끗 쪽이 붙고 있습니다");
  }

  const unique = [];
  parts.forEach((part) => {
    if (!part || unique.includes(part)) return;
    unique.push(part);
  });
  if (!unique.length) return "아직 한 줄로 확정되진 않았지만 공개패 흐름은 나쁘지 않습니다.";
  return unique.slice(0, 3).join(" · ") + ".";
}

function formatOpponentRiskLine(state, rival, index) {
  const brightCount = evaluateScoreBreakdown(rival.player.captured).totals.bright;
  const status = getOpponentGoStopStatus(state, rival.player);
  const pieces = [];
  pieces.push((index + 1) + "순위 " + rival.player.name);
  pieces.push(rival.trend.replace(/\.$/, ""));
  if (brightCount >= 2 && !/광 \d+장/.test(rival.trend)) {
    pieces.push("광 " + brightCount + "장");
  }
  if (status) {
    pieces.push("이미 " + rival.player.score + "점이라 스톱 가능");
    pieces.push(status.actionLabel);
  }
  return pieces.filter(Boolean).join(" · ") + ".";
}

function buildThreatWarnings(state, rivals) {
  const warnings = [];
  rivals.forEach((item) => {
    const player = item.player;
    const evald = evaluateScoreBreakdown(player.captured);
    const goStop = item.goStopStatus || getOpponentGoStopStatus(state, player);
    if (goStop && goStop.canStopNow) {
      warnings.push({ severity: 3, text: `<strong>${player.name}</strong> 이미 ${player.score}점 · 지금 스톱 가능` });
    }
    if (player.goCount > 0) {
      warnings.push({ severity: 2, text: "<strong>" + player.name + "</strong> 고 " + player.goCount + "번 진행 중" });
    }
    if (evald.totals.bright >= 2) {
      warnings.push({ severity: evald.totals.bright >= 3 ? 3 : 2, text: `<strong>${player.name}</strong> 광 ${evald.totals.bright}장` });
    }
    if (evald.totals.junk >= 8) {
      warnings.push({ severity: evald.totals.junk >= 9 ? 2 : 1, text: `<strong>${player.name}</strong> 피 ${evald.totals.junk}장` });
    }
    const progress = analyzeComboProgress(state, player)
      .filter((combo) => combo.count >= 2 && !combo.brokenBy)
      .sort((left, right) => right.count - left.count);
    progress.slice(0, 2).forEach((combo) => {
      const missing = combo.missing[0];
      warnings.push({
        severity: combo.count >= 2 ? 2 : 1,
        text: `<strong>${player.name}</strong> ${combo.name} ${combo.count}장 · ${missing}월만 더 보면 됩니다`
      });
    });
  });
  const unique = [];
  warnings
    .sort((a, b) => b.severity - a.severity)
    .forEach((item) => {
      if (unique.some((candidate) => candidate.text === item.text)) return;
      unique.push(item);
    });
  return {
    critical: unique.some((item) => item.severity >= 2),
    items: unique.slice(0, 4)
  };
}

function buildOpponentPressureLine(state, rivals) {
  const stoppable = rivals.find((item) => {
    const status = getOpponentGoStopStatus(state, item.player);
    return !!(status && status.canStopNow);
  });
  if (stoppable) {
    const status = getOpponentGoStopStatus(state, stoppable.player);
    return "<strong>흐름</strong> " + stoppable.player.name + "는 이미 "
      + stoppable.player.score + "점이라 지금 스톱 가능한 상태입니다. "
      + status.actionLabel + "으로 보이고, " + status.shortReason + ".";
  }
  return null;
}

function buildWinReason(winner, runnerUp) {
  const winnerEval = evaluatePlayerScore(winner);
  const runnerEval = evaluatePlayerScore(runnerUp);
  const winnerCombos = findCompletedNamedCombos(winner.captured);
  const reasons = [];

  if (winnerEval.totals.bright > runnerEval.totals.bright) reasons.push("광 " + winnerEval.totals.bright + "장으로 주도권을 잡았습니다.");
  if (winnerCombos.length) reasons.push(winnerCombos.join(", ") + " 완성이 점수 차를 벌렸습니다.");
  if (winnerEval.totals.ribbon > runnerEval.totals.ribbon && winnerEval.totals.ribbon >= 5) reasons.push("띠 " + winnerEval.totals.ribbon + "장으로 추가 점수를 냈습니다.");
  if (winnerEval.totals.animal > runnerEval.totals.animal && winnerEval.totals.animal >= 5) reasons.push("열끗 " + winnerEval.totals.animal + "장으로 추가 점수를 챙겼습니다.");
  if (winnerEval.totals.junk > runnerEval.totals.junk && winnerEval.totals.junk >= 10) reasons.push("피 " + winnerEval.totals.junk + "장으로 막판 점수까지 이어졌습니다.");
  if (!reasons.length) reasons.push("큰 한 방보다 광, 띠, 피를 고르게 모아 끝까지 앞섰습니다.");
  return reasons.slice(0, 2).join(" ");
}

function buildEndGameTutor(state) {
  const ordered = [...state.players].sort((a, b) => b.score - a.score);
  const winner = state.winner != null ? state.players[state.winner] : ordered[0];
  const runnerUp = ordered.find((player) => player.seat !== winner.seat) || winner;
  const scoreboard = buildScoreboardHtml(state);
  const payout = buildPayoutSummary(state, winner);
  const endingLabel = state.endReason === "stop" ? "스톱 종료" : state.endReason === "deck" ? "패 소진 종료" : "판 종료";
  const tiedTop = runnerUp && runnerUp !== winner && runnerUp.score === winner.score;
  const reason = state.endReason === "stop" && tiedTop
    ? "동점이었지만 스톱을 선언한 " + winner.name + "가 승리를 확정했습니다."
    : buildWinReason(winner, runnerUp);
  return {
    summary: "<strong>" + endingLabel + "</strong> " + winner.name + " 승리",
    flow: '<strong>수령액</strong> ' + winner.name + '가 총 ' + payout.total.toLocaleString("ko-KR") + '원을 받습니다.'
      + '<br><span>승리 점수 ' + winner.score + '점, 정산 기준 ' + payout.settlementScore + '점</span>'
      + '<br><span>' + payout.detail + '</span>'
      + (payout.reasons ? '<br><span>' + payout.reasons + '</span>' : '')
      + (state.endReason === "stop" && tiedTop ? '<br><span>동점 ' + winner.score + '점이었지만 스톱 선언자는 ' + winner.name + '입니다.</span>' : '')
      + '<div class="scoreboard-lines">' + scoreboard + '</div>',
    risk: "<strong>승부 포인트</strong> " + reason,
    skill: runnerUp && runnerUp !== winner
      ? "<strong>점수 근거</strong> " + winner.name + "는 " + formatPlayerScoreBreakdown(winner) + ". " + runnerUp.name + "는 " + formatPlayerScoreBreakdown(runnerUp) + "."
      : "<strong>점수 근거</strong> " + winner.name + "는 " + formatPlayerScoreBreakdown(winner) + ".",
    recommendations: []
  };
}

function assessTutor(state) {
  if (state.winner != null) {
    state.tutor = buildEndGameTutor(state);
    return;
  }
  const user = state.players[USER_INDEX];
  const recommendations = user.hand
    .map((card) => scoreTutorMove(state, scoreMove(state, user, card)))
    .sort((a, b) => b.score - a.score);
  const best = recommendations[0];
  const noCaptureChoices = recommendations.filter((move) => move.matches.length === 0);
  const safestDiscard = noCaptureChoices[0];
  const rivals = state.players
    .filter((player) => player.seat !== USER_INDEX)
    .map((player) => ({
      player,
      score: evaluatePlayerScore(player).score,
      threat: evaluateThreatLevel(player),
      trend: inferOpponentTrend(player),
      goStopStatus: getOpponentGoStopStatus(state, player)
    }))
    .sort((a, b) => b.threat - a.threat);
  const allMiss = recommendations.length > 0 && recommendations.every((move) => move.matches.length === 0);
  const pressureLine = buildOpponentPressureLine(state, rivals);
  const threatWarnings = buildThreatWarnings(state, rivals);

  state.tutor = {
    summary: best
      ? (allMiss
        ? "<strong>지금 추천</strong> " + best.card.label + "부터 정리"
        : "<strong>지금 추천</strong> " + best.card.label)
      : "<strong>지금 추천</strong> 손패 분석 중",
    strategy: inferStrategyLine(state, user, recommendations),
    flow: best
      ? (pressureLine
        ? pressureLine
        : allMiss
          ? "<strong>흐름</strong> 버리는 턴. " + (safestDiscard ? safestDiscard.card.label + "부터 보면 됩니다." : "상대가 좋아할 월만 덜 열어주세요.")
          : "<strong>흐름</strong> " + formatTutorOverview(best))
      : "<strong>흐름</strong> 겹치는 월부터 보세요.",
    risk: rivals.length
      ? "<strong>위험</strong> " + rivals.slice(0, 2).map((item, index) => formatOpponentRiskLine(state, item, index)).join("<br>")
      : "<strong>위험</strong> 아직 큰 위협은 없습니다.",
    skill: (() => {
      const stoppableRival = rivals.find((item) => item.goStopStatus && item.goStopStatus.canStopNow);
      if (stoppableRival) {
        return "<strong>기술 포인트</strong> "
          + stoppableRival.player.name + "는 이미 " + stoppableRival.player.score + "점이라 다음 한 턴은 고/스톱 판단까지 같이 봐야 합니다. "
          + stoppableRival.goStopStatus.reason;
      }
      if (allMiss) {
        return "<strong>기술 포인트</strong> 비풍초보다 광, 열끗, 단 줄 재료를 먼저 아끼세요.";
      }
      return "<strong>기술 포인트</strong> " + inferSkillLine(state, user, recommendations);
    })(),
    warnings: threatWarnings.items,
    criticalWarning: threatWarnings.critical,
    recommendations
  };
}

function takePreferredJunkCard(player) {
  const junkCards = player.captured
    .filter((card) => getEffectiveType(card) === "junk" || card.type === "joker")
    .sort((left, right) => {
      const leftValue = getJunkValue(left);
      const rightValue = getJunkValue(right);
      if (leftValue !== rightValue) return leftValue - rightValue;
      const leftIsDouble = left.label.includes("쌍피") || leftValue > 1;
      const rightIsDouble = right.label.includes("쌍피") || rightValue > 1;
      if (leftIsDouble !== rightIsDouble) return leftIsDouble ? 1 : -1;
      return left.month - right.month;
    });
  const target = junkCards[0];
  if (!target) return null;
  return removeCard(player.captured, target.id);
}

function applyJunkSteal(state, winnerIndex, title) {
  if (!RULE_CONFIG.enableJunkStealOnZzokSseul) return;
  const winner = state.players[winnerIndex];
  const taken = [];
  state.players.forEach((player) => {
    if (player.seat === winnerIndex) return;
    const beforeScore = evaluatePlayerScore(player).score;
    const junk = takePreferredJunkCard(player);
    if (junk) {
      winner.captured.push(junk);
      const afterScore = evaluatePlayerScore(player).score;
      const drop = beforeScore - afterScore;
      taken.push(player.name + "의 " + junk.label + (drop > 0 ? "(" + beforeScore + "점→" + afterScore + "점)" : ""));
    }
  });
  if (taken.length) {
    logEvent(state, title, winner.name + "가 피를 가져왔습니다: " + taken.join(", "));
  }
}

function resolveCapture(player, playedCard, targetCards) {
  player.captured.push(playedCard, ...targetCards);
}

function chooseBestFlexibleMode(player, card) {
  if (!card.flexibleScore) return;
  const originalMode = card.scoreMode;
  let bestMode = originalMode || card.flexibleScore[0];
  let bestScore = -Infinity;
  let bestJunkTotal = -Infinity;
  card.flexibleScore.forEach((mode) => {
    card.scoreMode = mode;
    const evaluated = evaluatePlayerScore(player);
    if (
      evaluated.score > bestScore
      || (evaluated.score === bestScore && evaluated.totals.junk > bestJunkTotal)
      || (evaluated.score === bestScore && evaluated.totals.junk === bestJunkTotal && mode === "junk")
    ) {
      bestScore = evaluated.score;
      bestJunkTotal = evaluated.totals.junk;
      bestMode = mode;
    }
  });
  card.scoreMode = bestMode;
}

function queueFlexibleChoiceIfNeeded(state, playerIndex, cards) {
  const flexibleCards = cards.filter((card) => card.flexibleScore?.length);
  if (!flexibleCards.length) return false;
  flexibleCards.forEach((card) => {
    chooseBestFlexibleMode(state.players[playerIndex], card);
  });
  return false;
}

function maybeHandleGoStop(state, playerIndex) {
  if (!RULE_CONFIG.enableGoStop) return false;
  const player = state.players[playerIndex];
  if (player.score < RULE_CONFIG.stopThreshold) return false;
  const scoreBreakdown = formatPlayerScoreBreakdown(player);
  if (playerIndex !== USER_INDEX) {
    const suggestion = recommendGoStop(state, playerIndex, { useLookahead: false });
    if (suggestion.action === "stop") {
      logEvent(state, "고/스톱", `${player.name}가 ${player.score}점에서 스톱을 선택했습니다. 근거는 ${scoreBreakdown}입니다.`);
      endGame(state, playerIndex, "stop");
      return true;
    }
    player.goCount += 1;
    player.score = evaluatePlayerScore(player).score;
    logEvent(state, "고/스톱", `${player.name}가 ${player.score - 1}점에서 고를 선택했습니다. 당시 점수 근거는 ${scoreBreakdown}입니다.`);
    return false;
  }
  state.pendingGoStopChoice = { playerIndex, score: player.score, scoreBreakdown };
  render();
  return true;
}
function drawAndResolve(state, playerIndex, turnContext = null) {
  if (!state.deck.length) {
    endGame(state);
    return;
  }
  const player = state.players[playerIndex];
  const drawn = state.deck.pop();
  if (turnContext) {
    turnContext.drawn = drawn;
    turnContext.drawMatchCount = 0;
  }
  if (drawn.type === "joker") {
    player.captured.push(drawn);
    if (turnContext) {
      turnContext.drawMatchCount = -1;
      turnContext.drawCaptured = [];
    }
    queueMotion(state, { capturedIds: [drawn.id], seat: playerIndex, stockPulse: true });
    logEvent(state, `${player.name} 뒤집기`, `${drawn.label}를 뒤집어 피를 더 챙겼습니다.`);
    return;
  }

  const matches = getMatches(drawn, state.field);
  if (turnContext) {
    turnContext.drawn = drawn;
    turnContext.drawMatchCount = matches.length;
  }
  if (matches.length === 0) {
    state.field.push(drawn);
    queueMotion(state, { fieldCardId: drawn.id, seat: playerIndex, stockPulse: true });
    logEvent(state, `${player.name} 뒤집기`, `${drawn.label}는 바닥에 남았습니다.`);
  } else if (matches.length === 1) {
    removeCard(state.field, matches[0].id);
    resolveCapture(player, drawn, [matches[0]]);
    queueMotion(state, { capturedIds: [drawn.id, matches[0].id], seat: playerIndex, stockPulse: true });
    logEvent(state, `${player.name} 뒤집기`, `${drawn.label}로 ${matches[0].label}을 챙겼습니다.`);
    queueFlexibleChoiceIfNeeded(state, playerIndex, [drawn, matches[0]]);
    if (turnContext) turnContext.drawCaptured = [matches[0]];
  } else {
    const target = chooseBestCaptureTarget(state, player, drawn, matches);
    removeCard(state.field, target.id);
    resolveCapture(player, drawn, [target]);
    queueMotion(state, { capturedIds: [drawn.id, target.id], seat: playerIndex, stockPulse: true });
    logEvent(state, `${player.name} 뒤집기`, `${drawn.label}로 ${target.label}을 골라 가져갔습니다.`);
    queueFlexibleChoiceIfNeeded(state, playerIndex, [drawn, target]);
    if (turnContext) turnContext.drawCaptured = [target];
  }
}

function finishTurn(state, playerIndex) {
  if (state.pendingFlexibleChoice || state.pendingGoStopChoice || state.pendingShakeChoice) {
    render();
    return;
  }
  state.players[playerIndex].score = evaluatePlayerScore(state.players[playerIndex]).score;
  if (state.deck.length === 0 || state.players.every((player) => player.hand.length === 0)) {
    endGame(state, playerIndex, "deck");
    return;
  }
  if (maybeHandleGoStop(state, playerIndex)) {
    return;
  }
  state.currentPlayer = (playerIndex + 1) % state.players.length;
  if (state.players[state.currentPlayer].hand.length === 0) {
    endGame(state, null, "deck");
    return;
  }
  state.pendingChoice = null;
  state.pendingFlexibleChoice = null;
  state.pendingGoStopChoice = null;
  state.pendingShakeChoice = null;
  assessTutor(state);
  render();
  scheduleAiTurn();
}

function resolveCardPlay(state, playerIndex, cardId, preferredFieldCardId = null, options = {}) {
  const player = state.players[playerIndex];
  const card = removeCard(player.hand, cardId);
  if (!card) return false;
  const initialMatches = getMatches(card, state.field);
  const turnContext = { playedCard: card, playMatchCount: initialMatches.length, drawCaptured: [] };

  if (card.type === "joker") {
    player.captured.push(card);
    if (state.deck.length > 0) {
      const replacement = state.deck.pop();
      player.hand.push(replacement);
      logEvent(state, `${player.name}의 선택`, `${card.label}를 챙기고 덱에서 한 장을 더 받아 같은 턴을 이어갑니다.`);
    } else {
      logEvent(state, `${player.name}의 선택`, `${card.label}를 챙겼지만 덱이 비어 추가로 받을 패가 없습니다.`);
      finishTurn(state, playerIndex);
      return true;
    }
    player.score = evaluatePlayerScore(player).score;
    queueMotion(state, { capturedIds: [card.id], seat: playerIndex, stockPulse: true }, () => {
      assessTutor(state);
      render();
      if (playerIndex !== USER_INDEX && state.winner == null) {
        scheduleAiTurn();
      }
    });
    return true;
  }

  const matches = initialMatches;
  if (matches.length === 0) {
    state.field.push(card);
    queueMotion(state, { fieldCardId: card.id, seat: playerIndex, stockPulse: false });
    logEvent(state, `${player.name}의 선택`, `${card.label}를 바닥에 냈습니다.`);
  } else if (matches.length === 1) {
    removeCard(state.field, matches[0].id);
    resolveCapture(player, card, [matches[0]]);
    queueMotion(state, { capturedIds: [card.id, matches[0].id], seat: playerIndex, stockPulse: false });
    logEvent(state, `${player.name}의 선택`, `${card.label}로 ${matches[0].label}을 먹었습니다.`);
    queueFlexibleChoiceIfNeeded(state, playerIndex, [card, matches[0]]);
  } else if (matches.length === 2) {
    let target = matches.find((match) => match.id === preferredFieldCardId);
    if (!target) {
      if (playerIndex === USER_INDEX && !options.auto) {
        player.hand.push(card);
        state.pendingChoice = { cardId, fieldIds: matches.map((match) => match.id) };
        render();
        return false;
      }
      target = chooseBestCaptureTarget(state, player, card, matches);
    }
    removeCard(state.field, target.id);
    resolveCapture(player, card, [target]);
    queueMotion(state, { capturedIds: [card.id, target.id], seat: playerIndex, stockPulse: false });
    logEvent(state, `${player.name}의 선택`, `${card.label}로 ${target.label}을 선택해 먹었습니다.`);
    queueFlexibleChoiceIfNeeded(state, playerIndex, [card, target]);
  } else {
    matches.forEach((match) => removeCard(state.field, match.id));
    resolveCapture(player, card, matches);
    queueMotion(state, { capturedIds: [card.id, ...matches.map((match) => match.id)], seat: playerIndex, stockPulse: false });
    logEvent(state, `${player.name}의 선택`, `${card.label}로 세 장 깔린 월을 정리했습니다.`);
    queueFlexibleChoiceIfNeeded(state, playerIndex, [card, ...matches]);
  }

  drawAndResolve(state, playerIndex, turnContext);
  const isZzok = card.type !== "joker" && turnContext.playMatchCount === 1 && turnContext.drawn && turnContext.drawn.month === card.month && turnContext.drawMatchCount === 1;
  const isSseul = state.field.length === 0;
  if (isZzok) applyJunkSteal(state, playerIndex, "쪽");
  if (isSseul) applyJunkSteal(state, playerIndex, "쓸");
  const motionActive = state.motion && (state.motion.fieldCardId || state.motion.capturedIds?.length || state.motion.stockPulse);
  if (motionActive) {
    const patch = { ...state.motion };
    queueMotion(state, patch, () => finishTurn(state, playerIndex));
  } else {
    finishTurn(state, playerIndex);
  }
  return true;
}

function endGame(state, winnerIndex = null, endReason = null) {
  state.players.forEach((player) => {
    player.score = evaluatePlayerScore(player).score;
  });
  const ordered = [...state.players].sort((a, b) => b.score - a.score);
  state.winner = winnerIndex == null ? ordered[0].seat : winnerIndex;
  state.endReason = endReason || state.endReason || "deck";
  app.dealerIndex = state.winner;
  const orderedSummary = ordered.map((player) => `${player.name} ${player.score}점`).join(", ");
  const payout = buildPayoutSummary(state, state.players[state.winner]);
  const endingLabel = state.endReason === "stop" ? "스톱 종료" : state.endReason === "deck" ? "패 소진 종료" : "판 종료";
  logEvent(state, endingLabel, `${state.players[state.winner].name} 승리. 승리 점수 ${state.players[state.winner].score}점, 정산 기준 ${payout.settlementScore}점으로 ${payout.detail} 총 ${payout.total.toLocaleString("ko-KR")}원을 받습니다. 최종 점수는 ${orderedSummary}입니다.`);
  assessTutor(state);
  render();
}

function runAiTurn() {
  clearScheduledAiTurn();
  const state = app.state;
  if (!state || state.winner != null || state.currentPlayer === USER_INDEX) return;
  const player = state.players[state.currentPlayer];
  const shakenMonth = maybeDeclareAiShake(state, player);
  if (shakenMonth != null) {
    assessTutor(state);
    render();
  }
  const choices = player.hand.map((card) => scoreMove(state, player, card)).sort((a, b) => b.score - a.score);
  const best = choices[0];
  if (!best) return;
  resolveCardPlay(state, player.seat, best.card.id, best.preferredTargetId, { auto: true });
}

function clearScheduledAiTurn() {
  if (app.pendingAiTimeout != null) {
    window.clearTimeout(app.pendingAiTimeout);
    app.pendingAiTimeout = null;
  }
}

function scheduleAiTurn() {
  clearScheduledAiTurn();
  const state = app.state;
  if (!state || state.winner != null || state.currentPlayer === USER_INDEX) {
    renderPaceControls();
    return;
  }
  if (state.players[state.currentPlayer].hand.length === 0) {
    endGame(state, null, "deck");
    return;
  }
  if (app.pace === "step") {
    renderPaceControls();
    return;
  }
  const gameToken = state.gameToken;
  app.pendingAiTimeout = window.setTimeout(() => {
    if (app.gameToken !== gameToken) return;
    app.pendingAiTimeout = null;
    runAiTurn();
  }, PACE_DELAY[app.pace]);
  renderPaceControls();
}

function ensureAiTurnProgress() {
  const state = app.state;
  if (!state || state.winner != null) return;
  if (state.currentPlayer === USER_INDEX) return;
  if (state.pendingChoice || state.pendingFlexibleChoice || state.pendingGoStopChoice || state.pendingShakeChoice) return;
  if (app.pendingAiTimeout != null) return;
  if (app.pace === "step") return;
  scheduleAiTurn();
}

function startAiWatchdog() {
  if (app.aiWatchdog != null) return;
  app.aiWatchdog = window.setInterval(() => {
    const state = app.state;
    if (!state || state.winner != null) return;
    const hasPendingModal = state.pendingChoice || state.pendingFlexibleChoice || state.pendingGoStopChoice || state.pendingShakeChoice;
    if (state.motion && state.motion.token && state.motion.startedAt && Date.now() - state.motion.startedAt > 1200) {
      if (app.motionTimeout != null) {
        window.clearTimeout(app.motionTimeout);
        app.motionTimeout = null;
      }
      settleMotion(state, state.motion.token, state.gameToken);
      return;
    }
    if (state.currentPlayer === USER_INDEX) return;
    if (hasPendingModal) return;
    if (app.pendingAiTimeout != null) return;
    if (app.pace === "step") return;
    scheduleAiTurn();
  }, 500);
}

function setPace(nextPace) {
  app.pace = nextPace;
  scheduleAiTurn();
  renderPaceControls();
}

function renderRulesSummary() {
  if (!els.rulesSummary) return;
  const basicRules = [
    '표준 광/띠/피 점수',
    '비광 포함 3광 2점',
    '고도리 5점',
    '같은 월 맞추기'
  ];
  const optionRules = [
    { label: '조커', enabled: RULE_CONFIG.enableJokers },
    { label: '쪽/쓸 피 이동', enabled: RULE_CONFIG.enableJunkStealOnZzokSseul },
    { label: '9월 술잔 자동 겸용 처리', enabled: RULE_CONFIG.enableFlexibleAnimals },
    { label: '고/스톱', enabled: RULE_CONFIG.enableGoStop },
    { label: '따닥 피', enabled: false },
    { label: '싹쓸이 피', enabled: false }
  ];
  els.rulesSummary.innerHTML = `<section class="rules-block"><h3>기본룰</h3><div class="rules-tags">${basicRules.map((rule) => `<span class="rules-tag basic">${rule}</span>`).join('')}</div><p class="rules-note">README 기준의 표준룰을 우선 적용합니다.</p></section><section class="rules-block"><h3>옵션룰 상태</h3><div class="rules-tags">${optionRules.map((rule) => `<span class="rules-tag ${rule.enabled ? 'option-on' : 'option-off'}">${rule.label} ${rule.enabled ? '사용' : '꺼짐'}</span>`).join('')}</div><p class="rules-note">논란이 있는 규칙은 기본값으로 단정하지 않고 분리합니다.</p></section>`;
}

function syncOptionButtons() {
  if (els.jokerToggleBtn) {
    els.jokerToggleBtn.textContent = RULE_CONFIG.enableJokers ? "조커 켜짐" : "조커 꺼짐";
    els.jokerToggleBtn.classList.toggle("active", RULE_CONFIG.enableJokers);
  }
}

function renderPaceControls() {
  els.paceSlowBtn.classList.toggle("active", app.pace === "slow");
  els.paceNormalBtn.classList.toggle("active", app.pace === "normal");
  els.paceStepBtn.classList.toggle("active", app.pace === "step");
  const canAdvance = app.pace === "step"
    && app.state
    && app.state.winner == null
    && app.state.currentPlayer !== USER_INDEX;
  els.nextTurnBtn.disabled = !canAdvance;
  if (app.state && app.state.winner == null) {
    const nextSeat = app.state.currentPlayer !== USER_INDEX
      ? app.state.currentPlayer
      : (app.state.currentPlayer + 1) % app.state.players.length;
    const nextName = app.state.players[nextSeat].name;
    els.nextTurnBtn.textContent = canAdvance ? `다음 턴 보기: ${nextName}` : `다음 차례: ${nextName}`;
  } else {
    els.nextTurnBtn.textContent = "다음 턴 보기";
  }
}

function getReferenceTags(card) {
  const tags = [];
  if (card.type === "bright") tags.push("광");
  if (card.type === "animal") tags.push("열끗");
  if (card.type === "ribbon") tags.push("띠");
  if (card.type === "junk") tags.push(getJunkValue(card) >= 2 ? "쌍피" : "피");
  if (card.type === "ribbon" && NAMED_COMBO_MONTHS.홍단.includes(card.month)) tags.push("홍단");
  if (card.type === "ribbon" && NAMED_COMBO_MONTHS.청단.includes(card.month)) tags.push("청단");
  if (card.type === "ribbon" && NAMED_COMBO_MONTHS.초단.includes(card.month)) tags.push("초단");
  if (getEffectiveType(card) === "animal" && NAMED_COMBO_MONTHS.고도리.includes(card.month)) tags.push("고도리");
  if (card.month === 9 && card.flexibleScore?.length) tags.push("겸용");
  return tags;
}

function renderReferenceGuide() {
  if (!els.referenceGrid) return;
  const months = MONTH_NAMES.map((_, index) => index + 1);
  els.referenceGrid.innerHTML = months.map((month) => {
    const cards = CARD_LIBRARY.filter((card) => card.month === month);
    const monthTags = new Set();
    cards.forEach((card) => getReferenceTags(card).forEach((tag) => monthTags.add(tag)));
    return       '<article class="reference-month">' +
        '<div class="reference-month-header">' +
          '<div>' +
            '<strong>' + MONTH_NAMES[month - 1] + '</strong>' +
            '<span>' + MONTH_THEME[month].name + '</span>' +
          '</div>' +
          '<div class="reference-month-tags">' + [...monthTags].map((tag) => '<span class="reference-tag">' + tag + '</span>').join('') + '</div>' +
        '</div>' +
        '<div class="reference-card-grid">' + cards.map((card) =>           '<div class="reference-card-item">' +
            renderCardVisual(card, { small: true }) +
            '<div class="reference-card-meta">' +
              '<strong>' + card.label + '</strong>' +
              '<span>' + getReferenceTags(card).join(' · ') + '</span>' +
            '</div>' +
          '</div>'
        ).join('') + '</div>' +
      '</article>';
  }).join('');
}

function openReferenceModal() {
  if (!els.referenceModal) return;
  renderReferenceGuide();
  els.referenceModal.hidden = false;
  document.body.classList.add('reference-open');
}

function closeReferenceModal() {
  if (!els.referenceModal) return;
  els.referenceModal.hidden = true;
  document.body.classList.remove('reference-open');
}

function renderCardVisual(card, options = {}) {
  const recommendationClass = options.recommended ? " recommended" : "";
  const playableClass = options.playable ? " playable" : "";
  const sizeClass = options.small ? " small" : "";
  const hiddenClass = options.hidden ? " hidden" : "";
  const extraClass = options.extraClass || "";
  const tooltip = options.tooltip ? ` data-tooltip="${options.tooltip}"` : "";
  return `
    <div class="card-shell${recommendationClass}${playableClass}${sizeClass}${hiddenClass}${extraClass}" title="${card.label}"${tooltip}>
      <div class="card-visual">
        ${buildCardFace(card, options)}
        ${card.type === "joker" && !options.hidden ? `<div class="card-label-overlay">조커</div>` : ""}
      </div>
    </div>
  `;
}

function buildCardFace(card, options = {}) {
  if (options.hidden) {
    return `
      <div class="card-back" aria-label="상대 손패">
        <div class="back-dot"></div>
        <div class="back-moon"></div>
        <div class="back-stem"></div>
        <div class="back-flower"></div>
      </div>
    `;
  }

  if (card.type !== "joker" && card.sprite) {
    const [row, col] = card.sprite;
    const x = SPRITE.x[col];
    const y = SPRITE.y[row];
    const backgroundSizeX = (SPRITE.width / SPRITE.cardWidth) * 100;
    const backgroundSizeY = (SPRITE.height / SPRITE.cardHeight) * 100;
    const positionX = col === 0 ? 0 : (x / (SPRITE.width - SPRITE.cardWidth)) * 100;
    const positionY = row === 0 ? 0 : (y / (SPRITE.height - SPRITE.cardHeight)) * 100;
    return `
      <div
        class="card-sprite"
        role="img"
        aria-label="${card.month}월 ${card.label}"
        style="
          background-image: url('${SPRITE.url}');
          background-size: ${backgroundSizeX}% ${backgroundSizeY}%;
          background-position: ${positionX}% ${positionY}%;
        "
      ></div>
    `;
  }

  const theme = card.type === "joker" ? MONTH_THEME.joker : MONTH_THEME[card.month];
  const name = card.type === "joker" ? "조커" : `${card.month}월`;
  return `
    <svg viewBox="0 0 88 128" role="img" aria-label="${name}">
      <rect x="1.5" y="1.5" width="85" height="125" rx="16" fill="${theme.base}" stroke="rgba(67,38,18,0.18)" stroke-width="1.4" />
      <rect x="8" y="8" width="72" height="112" rx="12" fill="rgba(255,255,255,0.36)" />
      ${buildMonthMotif(card, "#fbe5a6", "#4f536c")}
      ${buildTypeSymbol(card, "#fbe5a6")}
    </svg>
  `;
}

function buildMonthMotif(card, fg, soft) {
  if (card.type === "joker") {
    return `
      <circle cx="24" cy="28" r="11" fill="${soft}" opacity="0.85" />
      <circle cx="60" cy="34" r="14" fill="${fg}" opacity="0.88" />
      <path d="M16 92 C28 74, 45 74, 56 92 S74 110, 70 118" stroke="${fg}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M22 96 C30 88, 36 86, 48 90" stroke="${soft}" stroke-width="5" fill="none" stroke-linecap="round"/>
    `;
  }

  const stem = `<path d="M18 112 C30 96, 42 78, 50 54" stroke="${fg}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  const leaf = `<ellipse cx="28" cy="88" rx="10" ry="6" fill="${soft}" transform="rotate(-24 28 88)"/><ellipse cx="42" cy="70" rx="12" ry="7" fill="${soft}" transform="rotate(18 42 70)"/>`;

  const flowerMap = {
    pine: `<path d="M48 34 l-18 10 l16 6 l-18 11 l20 5" stroke="${fg}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="63" cy="28" r="12" fill="${soft}" opacity="0.85"/>`,
    plum: `<circle cx="57" cy="37" r="10" fill="${soft}"/><circle cx="48" cy="32" r="8" fill="${fg}" opacity="0.75"/><circle cx="64" cy="28" r="7" fill="${fg}" opacity="0.62"/>`,
    cherry: `<circle cx="52" cy="35" r="10" fill="${soft}"/><circle cx="62" cy="44" r="9" fill="${soft}"/><circle cx="43" cy="46" r="8" fill="${fg}" opacity="0.6"/>`,
    wisteria: `<path d="M52 28 C65 38, 64 58, 54 70" stroke="${soft}" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="58" cy="44" r="8" fill="${fg}" opacity="0.55"/>`,
    iris: `<path d="M52 28 C58 40, 58 62, 48 74" stroke="${soft}" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M40 40 l18 8 l-12 9" fill="${fg}" opacity="0.68"/>`,
    peony: `<circle cx="54" cy="38" r="14" fill="${soft}"/><circle cx="54" cy="38" r="8" fill="${fg}" opacity="0.6"/>`,
    clover: `<ellipse cx="50" cy="36" rx="12" ry="8" fill="${soft}" transform="rotate(-25 50 36)"/><ellipse cx="61" cy="44" rx="12" ry="8" fill="${fg}" opacity="0.58" transform="rotate(18 61 44)"/>`,
    grass: `<path d="M34 88 C45 62, 49 44, 52 26" stroke="${soft}" stroke-width="4" fill="none"/><path d="M28 94 C42 78, 56 62, 70 38" stroke="${fg}" stroke-width="4.5" fill="none"/><circle cx="60" cy="28" r="11" fill="${soft}" opacity="0.75"/>`,
    chrysanthemum: `<circle cx="55" cy="36" r="13" fill="${soft}"/><circle cx="55" cy="36" r="6" fill="${fg}" opacity="0.65"/><path d="M43 36 h24 M55 24 v24" stroke="${fg}" opacity="0.46"/>`,
    maple: `<path d="M54 22 l7 14 l14 2 l-11 9 l4 14 l-14 -7 l-13 8 l4 -15 l-12 -9 l15 -2 z" fill="${soft}" opacity="0.92"/>`,
    paulownia: `<circle cx="54" cy="35" r="12" fill="${soft}"/><circle cx="46" cy="44" r="10" fill="${fg}" opacity="0.52"/><circle cx="63" cy="45" r="9" fill="${fg}" opacity="0.42"/>`,
    rain: `<path d="M54 22 c8 10 12 20 12 30 c0 10-8 18-18 18 s-18-8-18-18 c0-9 7-19 15-30" fill="${soft}" opacity="0.72"/><path d="M28 76 l6 -10 M44 88 l8 -14 M60 88 l8 -14" stroke="${fg}" stroke-width="4" stroke-linecap="round"/>`
  };

  return `${stem}${leaf}${flowerMap[themeKey(card)]}`;
}

function themeKey(card) {
  return MONTH_THEME[card.month].icon;
}

function buildTypeSymbol(card, fg) {
  if (card.type === "bright") {
    return `<circle cx="68" cy="18" r="8" fill="#f4ca55"/><path d="M68 7 v22 M57 18 h22 M60 10 l16 16 M76 10 l-16 16" stroke="#fff1bf" stroke-width="2" opacity="0.85"/>`;
  }
  if (card.type === "animal") {
    return `<path d="M62 92 C67 82, 78 82, 78 93 C78 103, 67 104, 62 92" fill="${fg}" opacity="0.8"/><circle cx="69" cy="90" r="2" fill="#fff"/>`;
  }
  if (card.type === "ribbon") {
    return `<path d="M61 78 l14 -8 l-6 18 l8 18 l-16 -10 l-12 12 l4 -19 l-11 -13 z" fill="${fg}" opacity="0.82"/>`;
  }
  if (card.type === "joker") {
    return `<path d="M58 88 q10 -20 20 0 q-10 20 -20 0z" fill="#d84e47" opacity="0.9"/><circle cx="68" cy="88" r="4" fill="#fff3cf"/>`;
  }
  return `<circle cx="68" cy="92" r="7" fill="${fg}" opacity="0.72"/><circle cx="59" cy="100" r="5" fill="${fg}" opacity="0.48"/>`;
}

function renderHiddenHandSummary() {
  return "";
}
function renderSeat(player, options = {}) {
  const evaluated = evaluatePlayerScore(player);
  const isActive = app.state.currentPlayer === player.seat && app.state.winner == null;
  const seatClass = isActive ? "seat active" : "seat";
  const handClass = player.seat === USER_INDEX ? "user-hand" : "opponent-hand is-hidden";
  const shakeCandidates = player.seat === USER_INDEX ? new Set(getShakeCandidates(player)) : new Set();
  const shakeButtonsShown = new Set();
  const sortedHand = player.seat === USER_INDEX ? sortHandCards(player.hand) : player.hand;
  const handHtml = player.seat !== USER_INDEX
    ? renderHiddenHandSummary(player)
    : sortedHand.map((card) => {
        const move = app.state.tutor?.recommendations.find((item) => item.card.id === card.id);
        const rankMap = buildRecommendationRanks(app.state.tutor?.recommendations || []);
        const rank = rankMap.get(card.id);
        const rankLabel = rank != null && rank <= 3 ? rank + "순위 추천" : "";
        const recommended = player.seat === USER_INDEX && app.state.currentPlayer === USER_INDEX && move && move === app.state.tutor.recommendations[0];
        const playable = player.seat === USER_INDEX && app.state.currentPlayer === USER_INDEX && app.state.winner == null && !app.state.pendingChoice && !app.state.pendingShakeChoice;
        const canShake = shakeCandidates.has(card.month) && !shakeButtonsShown.has(card.month);
        const shakeInfo = canShake ? recommendShake(app.state, player, card.month) : null;
        if (canShake) shakeButtonsShown.add(card.month);
        const rankHint = rankLabel && move ? rankLabel + " · " + formatTutorOverview(move) : (move ? formatTutorOverview(move) : card.label);
        const visual = renderCardVisual(card, { recommended, playable, tooltip: rankHint });
        return `
      <article class="hand-card">
        <button class="hand-card-select ${playable ? "" : "is-locked"}" data-card-id="${card.id}" aria-label="${card.label} 내기" aria-disabled="${playable ? "false" : "true"}">
          ${visual}
        </button>
        ${rankLabel ? `<div class="hand-rank" title="${rankHint}">${rankLabel}</div>` : ""}
        ${canShake ? `<button class="play-card-btn shake-btn ${shakeInfo?.recommend ? "" : "secondary"} ${playable ? "" : "is-locked"}" data-shake-card-id="${card.id}" data-shake-month="${card.month}" aria-disabled="${playable ? "false" : "true"}">흔들기</button><div class="shake-hint">${shakeInfo.reason}</div>` : ""}
      </article>
    `;
      }).join("");

  const capturedLayout = renderCapturedLayout(player.captured, { compact: player.seat !== USER_INDEX, seat: player.seat });
  const publicZoneClass = player.seat === 1 ? "public-zone left-public" : player.seat === 2 ? "public-zone right-public" : "public-zone";
  const seatBody = `
    <div class="seat-header">
      <div>
        <div class="seat-name">${player.name}${player.seat === app.dealerIndex ? " · 선" : ""}</div>
        <div class="seat-score" title="${formatPlayerScoreBreakdown(player)}">${evaluated.score}점 · 광 ${evaluated.totals.bright} · 열 ${evaluated.totals.animal} · 띠 ${evaluated.totals.ribbon} · 피 ${evaluated.totals.junk}</div>
      </div>
      ${player.seat === USER_INDEX ? `<span class="badge subtle hand-count-badge">${player.hand.length}장</span>` : ""}
    </div>
    ${player.seat === USER_INDEX ? `<p class="seat-comment">${seatComment(player)}</p>` : ""}
    ${player.seat === USER_INDEX ? `<div class="${handClass}">${handHtml}</div>` : ""}
    <div class="seat-group-label">먹은 패 정리</div>
    <div class="captured-strip organized ${player.seat === USER_INDEX ? "" : "opponent-captured-strip"}"><div class="${publicZoneClass}">${capturedLayout}</div></div>
  `;
  return { seatClass, seatBody };
}
function seatComment(player) {
  if (app.state.winner != null && app.state.winner === player.seat) return "이번 판 승자입니다.";
  if (player.seat === USER_INDEX) return "가장 좋은 패를 눌러도 되고, 일부러 다른 수를 내며 감각을 비교해봐도 됩니다.";
  if (player.captured.length >= 5) return "먹은 패 흐름이 올라오고 있습니다. 다음 점수 연결을 조심해야 합니다.";
  return "손패는 보이지 않습니다. 바닥에 내는 월과 먹은 패로만 흐름을 읽어야 합니다.";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildScoreboardHtml(state) {
  const ordered = [...state.players].sort((a, b) => b.score - a.score);
  return ordered.map((player) => `<div class="score-line"><strong>${player.name}</strong> ${player.score}점<br><span>${formatPlayerScoreBreakdown(player)}</span></div>`).join("");
}

function buildCoachChatReply(state, question) {
  const q = question.trim().toLowerCase();
  const tutor = state.tutor;
  const top = tutor?.recommendations?.[0];
  const rivals = state.players.filter((player) => player.seat !== USER_INDEX)
    .map((player) => ({ player, threat: evaluateThreatLevel(player), trend: inferOpponentTrend(player) }))
    .sort((a, b) => b.threat - a.threat);
  const rival = rivals[0];

  if (state.winner != null) {
    return `끝난 판 기준으로 보면 <strong>${state.players[state.winner].name}</strong>이 앞섰고, 점수 근거는 ${formatPlayerScoreBreakdown(state.players[state.winner])}입니다.`;
  }
  if (q.includes('고') || q.includes('스톱')) {
    const suggestion = recommendGoStop(state, USER_INDEX);
    return `<strong>${suggestion.action === "go" ? "고" : "스톱"} 추천</strong> ${suggestion.reason}`;
  }
  if (q.includes('상대') || q.includes('흐름') || q.includes('트렌드')) {
    return rival
      ? `<strong>${rival.player.name}</strong> 쪽을 먼저 보세요. ${rival.trend}`
      : `<strong>상대 흐름</strong> 아직 한쪽으로 크게 기운 판은 아닙니다.`;
  }
  if (q.includes('왜') || q.includes('추천') || q.includes('순위')) {
    return top
      ? `<strong>${top.card.label}</strong> 추천 이유는 ${formatTutorOverview(top)}`
      : `<strong>추천</strong> 아직 분석할 손패가 없습니다.`;
  }
  if (q.includes('점수')) {
    const mine = state.players[USER_INDEX];
    return `<strong>현재 점수</strong> 나는 ${mine.score}점이고, 근거는 ${formatPlayerScoreBreakdown(mine)}입니다.`;
  }
  return top
    ? `<strong>지금 한 수</strong> ${top.card.label}부터 보고, <strong>상대</strong>는 ${rival ? rival.player.name + ' ' + rival.trend : '아직 큰 위협 없음'} 쪽을 경계하세요.`
    : `<strong>상담</strong> 지금은 바닥패와 상대 공개패를 같이 보면서 월 흐름부터 읽어봅시다.`;
}

function renderChat(state) {
  if (!els.chatLog) return;
  els.chatLog.innerHTML = state.chatHistory.map((message) => `
    <article class="chat-message ${message.role}">
      <div class="chat-role">${message.role === "user" ? "나" : "코치"}</div>
      <div class="chat-bubble">${message.role === "user" ? escapeHtml(message.text) : message.text}</div>
    </article>
  `).join("");
}

function submitChatQuestion() {
  const state = app.state;
  const input = els.chatInput;
  if (!state || !input) return;
  const question = input.value.trim();
  if (!question) return;
  state.chatHistory.push({ role: "user", text: question });
  state.chatHistory.push({ role: "assistant", text: buildCoachChatReply(state, question) });
  state.chatHistory = state.chatHistory.slice(-14);
  input.value = "";
  renderChat(state);
}

function renderField(state) {
  const topRecommendation = state.tutor?.recommendations[0];
  const targetIds = new Set(topRecommendation?.matches.map((card) => card.id) || []);
  const sortedField = sortFieldCards(state.field);
  els.fieldArea.innerHTML = sortedField.map((card) => renderCardVisual(card, {
    recommended: targetIds.has(card.id),
    tooltip: fieldTooltip(card, state.field),
    extraClass: state.motion?.fieldCardId === card.id ? ` motion-field-drop motion-seat-${state.motion.seat}` : ""
  })).join("");
  els.fieldRead.textContent = summarizeField(state.field);
  if (els.stockPile) {
    els.stockPile.classList.toggle("is-drawing", !!state.motion?.stockPulse);
  }
}

function renderTutor(state) {
  const tutor = state.tutor;
  els.tutorSummary.innerHTML = tutor.summary;
  if (els.warningStrip) {
    const warnings = tutor.warnings || [];
    els.warningStrip.innerHTML = warnings.map((item) => `<div class="warning-chip">${item.text}</div>`).join("");
    els.warningStrip.classList.toggle('has-items', warnings.length > 0);
  }
  if (els.riskCard) {
    els.riskCard.classList.toggle('warning-pulse', !!tutor.criticalWarning);
  }
  els.recommendationList.innerHTML = "";
  els.recommendationList.style.display = "none";
  if (els.strategyInsight) {
    els.strategyInsight.innerHTML = tutor.strategy || "<strong>전략</strong> 지금은 점수 나는 줄을 먼저 보세요.";
  }
  els.flowInsight.innerHTML = tutor.flow;
  els.riskInsight.innerHTML = tutor.risk;
  els.skillInsight.innerHTML = tutor.skill;
}

function renderSeats(state) {
  const left = renderSeat(state.players[1]);
  const right = renderSeat(state.players[2]);
  const user = renderSeat(state.players[0]);

  els.leftSeat.className = `side-seat ${left.seatClass}`;
  els.leftSeat.innerHTML = left.seatBody;
  els.rightSeat.className = `side-seat ${right.seatClass}`;
  els.rightSeat.innerHTML = right.seatBody;
  els.userSeat.className = `user-seat ${user.seatClass}`;
  els.userSeat.innerHTML = `
    <div class="user-meta">
      <div>
        <div class="seat-name">내 손패</div>
      </div>
    </div>
    ${user.seatBody}
  `;

  [...els.userSeat.querySelectorAll(".hand-card-select[data-card-id]")].forEach((button) => {
    button.addEventListener("click", () => {
      const canPlay = state.currentPlayer === USER_INDEX && state.winner == null && !state.pendingChoice && !state.pendingShakeChoice && !state.pendingGoStopChoice;
      if (!canPlay) return;
      resolveCardPlay(state, USER_INDEX, button.dataset.cardId);
    });
  });
  [...els.userSeat.querySelectorAll("[data-shake-card-id]")].forEach((button) => {
    button.addEventListener("click", () => {
      const canPlay = state.currentPlayer === USER_INDEX && state.winner == null && !state.pendingChoice && !state.pendingShakeChoice && !state.pendingGoStopChoice;
      if (!canPlay) return;
      queueShakeChoice(state, USER_INDEX, button.dataset.shakeCardId, Number(button.dataset.shakeMonth));
    });
  });
}

function findCompletedNamedCombos(cards) {
  const completed = [];
  comboDefinitions().forEach((combo) => {
    const ok = combo.months.every((month) => cards.some((card) => getEffectiveType(card) === combo.type && card.month === month));
    if (ok) completed.push(combo.name);
  });
  const godori = [2, 4, 8].every((month) => cards.some((card) => getEffectiveType(card) === "animal" && card.month === month));
  if (godori) completed.push("고도리");
  return completed;
}

function describeScoreSwing(beforeCards, afterCards) {
  const before = evaluateScore(beforeCards);
  const after = evaluateScore(afterCards);
  const parts = [];
  if (after.totals.bright >= 3 && before.totals.bright < 3) parts.push("광 점수가 시작됩니다.");
  if (after.totals.ribbon >= 5 && before.totals.ribbon < 5) parts.push("띠가 5장이 되어 점수가 납니다.");
  if (after.totals.animal >= 5 && before.totals.animal < 5) parts.push("열끗이 5장이 되어 점수가 납니다.");
  if (after.totals.junk >= 10 && before.totals.junk < 10) parts.push("피가 10장을 넘겨 점수가 납니다.");
  const beforeCombos = new Set(findCompletedNamedCombos(beforeCards));
  findCompletedNamedCombos(afterCards).forEach((name) => {
    if (!beforeCombos.has(name)) parts.push(name + "이 완성됩니다.");
  });
  if (after.score > before.score) parts.unshift("지금 " + before.score + "점에서 " + after.score + "점으로 오릅니다.");
  return parts.length ? parts.join(" ") : "즉시 점수 차이는 크지 않지만, 다음 줄 연결과 상대 차단에 도움이 됩니다.";
}

function evaluateGoStopOutcomes(state, playerIndex, options = {}) {
  const useLookahead = options.useLookahead !== false;
  const player = state.players[playerIndex];
  const orderedMoves = player.hand.map((card) => scoreMove(state, player, card)).sort((a, b) => b.score - a.score);
  const bestMove = orderedMoves[0] || null;
  const rivalBest = Math.max(...state.players.filter((candidate) => candidate.seat !== player.seat).map((candidate) => evaluatePlayerScore(candidate).score), 0);
  const lead = player.score - rivalBest;
  const heuristicStop = player.score >= 5 && (state.deck.length <= 4 || lead >= 2 || !bestMove || bestMove.score < 10);
  const heuristicGo = !!(bestMove && bestMove.matches.length > 0 && state.deck.length > 4);
  let stopBalance = heuristicStop ? 22 : 8;
  let goBalance = heuristicGo ? 18 : -8;

  if (useLookahead) {
    const stopSnapshot = cloneGameState(state);
    stopBalance = withSimulationState(stopSnapshot, () => {
      endGame(stopSnapshot, playerIndex, "stop");
      return evaluateSimulationBalance(stopSnapshot);
    });
    const goSnapshot = cloneGameState(state);
    goBalance = withSimulationState(goSnapshot, () => {
      continueAfterGo(goSnapshot, playerIndex);
      let safetyGuard = 0;
      while (goSnapshot.winner == null && goSnapshot.currentPlayer !== USER_INDEX && safetyGuard < 2) {
        runSimulationAiTurn(goSnapshot);
        safetyGuard += 1;
      }
      return evaluateSimulationBalance(goSnapshot);
    });
  }

  const stopReasonParts = [];
  if (player.score >= 5) stopReasonParts.push("지금 점수를 바로 굳히는 쪽입니다.");
  if (lead >= 2) stopReasonParts.push("현재 격차가 있어 무리해서 더 열 필요가 적습니다.");
  if (stopBalance >= goBalance) stopReasonParts.push("한 턴 앞 흐름까지 보면 스톱 쪽 기대값이 더 높습니다.");
  else stopReasonParts.push("바로 끝내는 안정성은 있지만, 기대값은 고보다 낮습니다.");
  const stopReason = stopReasonParts.join(" ");
  const stopForecast = state.deck.length <= 4
    ? "남은 패가 적어 변수를 줄이고 다음 판 선 흐름으로 넘어갑니다."
    : stopBalance >= goBalance
      ? "여기서 끊으면 상대 반격 전에 점수를 확정하는 흐름이 됩니다."
      : "지금 끊으면 안전하지만, 이어질 수를 스스로 접는 모양입니다.";

  const goReasonParts = [];
  if (bestMove && bestMove.matches.length > 0) goReasonParts.push(bestMove.card.label + " 같은 이어먹이 남아 있습니다.");
  else goReasonParts.push("확실한 이어먹이는 약하지만, 더 벌 수 있는 여지는 남아 있습니다.");
  if (goBalance > stopBalance) goReasonParts.push("한 턴 앞 흐름까지 보면 고 쪽 기대값이 더 높습니다.");
  else goReasonParts.push("다만 한 턴 앞 흐름까지 보면 위험이 더 큽니다.");
  const goReason = goReasonParts.join(" ");
  const goForecast = bestMove && bestMove.matches.length > 0
    ? "고를 하면 다음 순환에서 " + bestMove.card.label + " 같은 줄을 다시 보며 점수 차를 더 벌리는 흐름을 노립니다."
    : "고를 하면 다음 순환은 새 연결을 찾아야 해서 흐름이 다소 거칠 수 있습니다.";

  const action = goBalance > stopBalance ? "go" : "stop";
  const reason = action === "go" ? goReason : stopReason;
  return { action, reason, goReason, stopReason, goForecast, stopForecast, goBalance, stopBalance };
}

function recommendGoStop(state, playerIndex, options = {}) {
  return evaluateGoStopOutcomes(state, playerIndex, options);
}

function continueAfterGo(state, playerIndex) {
  state.pendingGoStopChoice = null;
  state.pendingChoice = null;
  state.pendingFlexibleChoice = null;
  state.pendingShakeChoice = null;
  state.currentPlayer = (playerIndex + 1) % state.players.length;
  assessTutor(state);
  render();
  if (state.winner == null && state.currentPlayer !== USER_INDEX) {
    scheduleAiTurn();
  }
}

function renderLogs(state) {
  els.eventLog.innerHTML = state.logs.map((entry) => `
    <article class="log-entry">
      <strong>${entry.title}</strong>
      <div>${entry.text}</div>
    </article>
  `).join("");
}

function clearPendingChoice(state) {
  state.pendingChoice = null;
  render();
}

function renderPendingChoice(state) {
  document.querySelectorAll(".match-modal").forEach((modal) => modal.remove());
  if (state.pendingShakeChoice) {
    renderShakeChoice(state);
    return;
  }
  if (state.pendingGoStopChoice) {
    const motionActive = state.motion && (state.motion.fieldCardId || state.motion.capturedIds?.length || state.motion.stockPulse);
    if (motionActive) return;
    renderGoStopChoice(state);
    return;
  }
  if (!state.pendingChoice) return;

  const user = state.players[USER_INDEX];
  const card = user.hand.find((item) => item.id === state.pendingChoice.cardId);
  const choices = state.pendingChoice.fieldIds
    .map((id) => state.field.find((fieldCard) => fieldCard.id === id))
    .filter(Boolean);
  const recommendedMove = state.tutor?.recommendations.find((item) => item.card.id === state.pendingChoice.cardId);

  const modal = document.createElement("div");
  modal.className = "match-modal";
  modal.innerHTML = [
    `<div class="match-dialog">`,
    `<button class="match-close-btn" type="button" aria-label="선택 닫기" data-close-choice="true">x</button>`,
    `<h2>둘 중 어떤 패를 먹을까요?</h2>`,
    `<p>${card?.label || "이 카드"}는 바닥 같은 월 두 장과 맞습니다. 아래 설명처럼 점수가 어떻게 달라지는지 보고 고르세요.</p>`,
    `<div class="choice-row">`,
    choices.map((choice) => {
      const afterCards = [...user.captured, card, choice];
      const recommended = choice.id === recommendedMove?.preferredTargetId;
      const badge = recommended ? `<span class="choice-badge">추천</span>` : "";
      return `
        <button type="button" class="match-choice-btn${recommended ? " recommended-choice" : ""}" data-choice-id="${choice.id}">
          ${renderCardVisual(choice, { small: true, showLabel: false })}
          <strong>${choice.label}</strong>
          <span class="choice-helper">${describeScoreSwing(user.captured, afterCards)}</span>
          ${badge}
        </button>
      `;
    }).join(""),
    `</div>`,
    `</div>`
  ].join("");
  modal.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-close-choice]");
    if (closeButton) {
      clearPendingChoice(state);
      return;
    }
    const choiceButton = event.target.closest("[data-choice-id]");
    if (!choiceButton) return;
    resolveCardPlay(state, USER_INDEX, state.pendingChoice.cardId, choiceButton.dataset.choiceId, { auto: true });
  });
  document.body.appendChild(modal);
}
const GO_STOP_MODAL_PREFS_KEY = "gostop-go-stop-dialog";
const DEFAULT_GO_STOP_OPACITY = 0.92;

function loadGoStopDialogPrefs() {
  try {
    const raw = window.localStorage.getItem(GO_STOP_MODAL_PREFS_KEY);
    if (!raw) return { left: null, top: null, opacity: DEFAULT_GO_STOP_OPACITY };
    const parsed = JSON.parse(raw);
    return {
      left: Number.isFinite(parsed.left) ? parsed.left : null,
      top: Number.isFinite(parsed.top) ? parsed.top : null,
      opacity: Number.isFinite(parsed.opacity) ? parsed.opacity : DEFAULT_GO_STOP_OPACITY
    };
  } catch (error) {
    return { left: null, top: null, opacity: DEFAULT_GO_STOP_OPACITY };
  }
}

function saveGoStopDialogPrefs(prefs) {
  try {
    window.localStorage.setItem(GO_STOP_MODAL_PREFS_KEY, JSON.stringify(prefs));
  } catch (error) {
    // ignore localStorage failures
  }
}

function applyGoStopDialogPrefs(dialog, prefs) {
  const margin = 12;
  const width = dialog.offsetWidth || 760;
  const height = dialog.offsetHeight || 420;
  const maxLeft = Math.max(margin, window.innerWidth - width - margin);
  const maxTop = Math.max(margin, window.innerHeight - height - margin);
  const left = prefs.left == null
    ? Math.max(margin, Math.round((window.innerWidth - width) / 2))
    : Math.min(maxLeft, Math.max(margin, Math.round(prefs.left)));
  const top = prefs.top == null
    ? Math.max(margin, Math.round((window.innerHeight - height) / 2))
    : Math.min(maxTop, Math.max(margin, Math.round(prefs.top)));
  const opacity = Math.min(1, Math.max(0.4, Number.isFinite(prefs.opacity) ? prefs.opacity : DEFAULT_GO_STOP_OPACITY));
  dialog.style.left = left + 'px';
  dialog.style.top = top + 'px';
  dialog.style.opacity = opacity.toFixed(2);
  prefs.left = left;
  prefs.top = top;
  prefs.opacity = opacity;
}

function enhanceGoStopDialog(modal, dialog) {
  modal.classList.add('go-stop-overlay');
  const toolbar = dialog.querySelector('[data-drag-handle]');
  const opacityInput = dialog.querySelector('[data-go-stop-opacity]');
  const opacityValue = dialog.querySelector('[data-go-stop-opacity-value]');
  const prefs = loadGoStopDialogPrefs();
  const syncOpacityUi = () => {
    const percent = Math.round((prefs.opacity || DEFAULT_GO_STOP_OPACITY) * 100);
    if (opacityInput) opacityInput.value = String(percent);
    if (opacityValue) opacityValue.textContent = percent + '%';
  };
  requestAnimationFrame(() => {
    applyGoStopDialogPrefs(dialog, prefs);
    syncOpacityUi();
  });
  if (opacityInput) {
    opacityInput.addEventListener('input', () => {
      prefs.opacity = Number(opacityInput.value) / 100;
      applyGoStopDialogPrefs(dialog, prefs);
      syncOpacityUi();
      saveGoStopDialogPrefs(prefs);
    });
  }
  if (!toolbar) return;
  toolbar.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button, input, label')) return;
    event.preventDefault();
    const startLeft = prefs.left == null ? dialog.getBoundingClientRect().left : prefs.left;
    const startTop = prefs.top == null ? dialog.getBoundingClientRect().top : prefs.top;
    const startX = event.clientX;
    const startY = event.clientY;
    dialog.classList.add('is-dragging');
    const onMove = (moveEvent) => {
      prefs.left = startLeft + (moveEvent.clientX - startX);
      prefs.top = startTop + (moveEvent.clientY - startY);
      applyGoStopDialogPrefs(dialog, prefs);
    };
    const onUp = () => {
      dialog.classList.remove('is-dragging');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      saveGoStopDialogPrefs(prefs);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  });
  window.addEventListener('resize', () => {
    applyGoStopDialogPrefs(dialog, prefs);
    syncOpacityUi();
    saveGoStopDialogPrefs(prefs);
  }, { once: true });
}

function renderGoStopChoice(state) {
  const choice = state.pendingGoStopChoice;
  if (!choice) return;
  const player = state.players[choice.playerIndex];
  const suggestion = recommendGoStop(state, choice.playerIndex);
  const stopBadge = suggestion.action === "stop" ? `<span class="choice-badge">추천</span>` : "";
  const goBadge = suggestion.action === "go" ? `<span class="choice-badge">추천</span>` : "";
  const modal = document.createElement("div");
  modal.className = "match-modal go-stop-overlay";
  modal.innerHTML = `
    <div class="match-dialog go-stop-dialog">
      <div class="go-stop-toolbar" data-drag-handle="true">
        <div class="go-stop-drag-copy">
          <strong>판 보면서 움직이기</strong>
          <span>이 막대를 잡고 옮기세요.</span>
        </div>
        <label class="go-stop-opacity-control">
          <span>투명도</span>
          <input type="range" min="40" max="100" step="5" value="92" data-go-stop-opacity="true" />
          <strong data-go-stop-opacity-value>92%</strong>
        </label>
      </div>
      <h2>고 또는 스톱</h2>
      <p>현재 ${player.score}점입니다. 선택은 직접 하되, 지금 판에서는 <strong>${suggestion.action === "go" ? "고" : "스톱"}</strong> 쪽을 더 추천합니다.</p>
      <div class="go-stop-grid">
        <article class="go-stop-option${suggestion.action === "stop" ? " recommended-choice" : ""}">
          <h3>스톱 ${stopBadge}</h3>
          <p class="choice-helper">${suggestion.stopReason}</p>
          <p class="choice-helper">예상 흐름: ${suggestion.stopForecast}</p>
          <button class="match-choice-btn${suggestion.action === "stop" ? " recommended-choice" : ""}" data-gostop="stop">스톱 선택</button>
        </article>
        <article class="go-stop-option${suggestion.action === "go" ? " recommended-choice" : ""}">
          <h3>고 ${goBadge}</h3>
          <p class="choice-helper">${suggestion.goReason}</p>
          <p class="choice-helper">예상 흐름: ${suggestion.goForecast}</p>
          <button class="match-choice-btn${suggestion.action === "go" ? " recommended-choice" : ""}" data-gostop="go">고 선택</button>
        </article>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  enhanceGoStopDialog(modal, modal.querySelector('.go-stop-dialog'));
  [...modal.querySelectorAll("[data-gostop]")].forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.gostop;
      if (action === "stop") {
        state.pendingGoStopChoice = null;
        logEvent(state, "고/스톱", `${player.name}가 ${player.score}점에서 스톱을 선택했습니다. 근거는 ${choice.scoreBreakdown || formatPlayerScoreBreakdown(player)}입니다.`);
        endGame(state, choice.playerIndex, "stop");
        return;
      }
      player.goCount += 1;
      const beforeGoScore = player.score;
      player.score = evaluatePlayerScore(player).score;
      logEvent(state, "고/스톱", `${player.name}가 ${beforeGoScore}점에서 고를 선택했습니다. 당시 점수 근거는 ${choice.scoreBreakdown || formatPlayerScoreBreakdown(player)}입니다.`);
      continueAfterGo(state, choice.playerIndex);
    });
  });
}
function renderShakeChoice(state) {
  const pending = state.pendingShakeChoice;
  if (!pending) return;
  const player = state.players[pending.playerIndex];
  const suggestion = recommendShake(state, player, pending.month);
  const fieldMatches = state.field.filter((card) => card.month === pending.month).length;
  const canBomb = getBombCardsFromHand(player, pending.month, pending.cardId).length >= 3;
  const modal = document.createElement("div");
  modal.className = "match-modal";
  modal.innerHTML = `
    <div class="match-dialog">
      <button class="match-close-btn" type="button" aria-label="흔들기 선택 닫기" data-close-shake="true">x</button>
      <h2>흔들기 선언</h2>
      <p>${pending.month}월이 손에 세 장 이상 있습니다. 한 장씩 운영할지, 세 장을 한꺼번에 폭탄처럼 처리할지 고를 수 있습니다.</p>
      <p class="choice-helper">${suggestion.reason}</p>
      <div class="choice-row">
        <button class="match-choice-btn${suggestion.recommend ? " recommended-choice" : ""}" data-shake-action="shake">흔들고 한 장씩${suggestion.recommend ? `<span class="choice-badge">추천</span>` : ""}</button>
        <button class="match-choice-btn" data-shake-action="bomb" ${canBomb ? "" : "disabled"}>폭탄처럼 세 장 처리<span class="choice-helper">${fieldMatches ? '바닥 같은 월 ' + fieldMatches + '장까지 정리' : '바닥 짝이 적으면 효율이 낮음'}</span></button>
        <button class="match-choice-btn${suggestion.recommend ? "" : " recommended-choice"}" data-shake-action="plain">그냥 내기${suggestion.recommend ? "" : `<span class="choice-badge">추천</span>`}</button>
      </div>
    </div>
  `;
  modal.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-close-shake]");
    if (closeButton) {
      state.pendingShakeChoice = null;
      render();
      return;
    }
    const button = event.target.closest("[data-shake-action]");
    if (!button) return;
    const action = button.dataset.shakeAction;
    const cardId = pending.cardId;
    const month = pending.month;
    state.pendingShakeChoice = null;
    if (action === "shake") {
      player.shakeCount += 1;
      player.shakenMonths.push(month);
      logEvent(state, "흔들기", `${player.name}가 ${month}월 흔들기를 선언했습니다.`);
      resolveCardPlay(state, pending.playerIndex, cardId);
      return;
    }
    if (action === "bomb") {
      player.shakeCount += 1;
      player.shakenMonths.push(month);
      logEvent(state, "흔들기", `${player.name}가 ${month}월을 폭탄처럼 한꺼번에 처리했습니다.`);
      resolveBombPlay(state, pending.playerIndex, cardId, month);
      return;
    }
    logEvent(state, "흔들기 보류", `${player.name}가 ${month}월 흔들기를 보류하고 일반 진행을 선택했습니다.`);
    resolveCardPlay(state, pending.playerIndex, cardId);
  });
  document.body.appendChild(modal);
}

function renderFlexibleChoice() {}

function render() {
  const state = app.state;
  if (state.winner == null && (state.players.every((player) => player.hand.length === 0) || state.players[state.currentPlayer].hand.length === 0)) {
    endGame(state);
    return;
  }
  els.turnBadge.textContent = state.winner != null ? `${state.players[state.winner].name} 승리` : `${state.players[state.currentPlayer].name} 차례`;
  els.deckCount.textContent = `남은 패 ${state.deck.length}장`;
  els.dealerBadge.textContent = `선: ${state.players[app.dealerIndex].name}`;
  els.directionBadge.textContent = "턴 방향: 시계 방향 · 나 → 상대 A → 상대 B";
  renderField(state);
  renderTutor(state);
  renderSeats(state);
  renderLogs(state);
  renderChat(state);
  renderRulesSummary();
  renderPendingChoice(state);
  renderPaceControls();
  syncOptionButtons();
  ensureAiTurnProgress();
}

function startNewGame() {
  clearScheduledAiTurn();
  app.gameToken += 1;
  if (app.motionTimeout != null) {
    window.clearTimeout(app.motionTimeout);
    app.motionTimeout = null;
  }
  app.afterMotionCallback = null;
  document.querySelectorAll(".match-modal").forEach((modal) => modal.remove());
  app.state = createGame();
  render();
  scheduleAiTurn();
}

els.newGameBtn.addEventListener("click", startNewGame);
els.advisorToggleBtn.addEventListener("click", () => {
  app.advisorMode = app.advisorMode === "coach" ? "minimal" : "coach";
  els.advisorToggleBtn.textContent = app.advisorMode === "coach" ? "추천만 보기" : "자세한 코칭 보기";
  render();
});
if (els.jokerToggleBtn) {
  els.jokerToggleBtn.addEventListener("click", () => {
    RULE_CONFIG.enableJokers = !RULE_CONFIG.enableJokers;
    syncOptionButtons();
    startNewGame();
  });
}
els.paceSlowBtn.addEventListener("click", () => setPace("slow"));
els.paceNormalBtn.addEventListener("click", () => setPace("normal"));
els.paceStepBtn.addEventListener("click", () => setPace("step"));
els.nextTurnBtn.addEventListener("click", () => {
  if (app.pace === "step") {
    runAiTurn();
  }
});
if (els.referenceOpenBtn) {
  els.referenceOpenBtn.addEventListener("click", openReferenceModal);
}
if (els.referenceModal) {
  els.referenceModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-reference]")) closeReferenceModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.referenceModal.hidden) closeReferenceModal();
  });
}
if (els.chatForm) {
  els.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitChatQuestion();
  });
}

startAiWatchdog();
startNewGame();
