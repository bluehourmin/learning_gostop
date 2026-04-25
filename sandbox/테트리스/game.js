const COLS = 10;
const ROWS = 20;
const BLOCK = 30;
const NEXT_BLOCK = 32;

const COLORS = {
  I: "#49d7ff",
  O: "#ffd166",
  T: "#b388ff",
  S: "#4ee6a4",
  Z: "#ff667a",
  J: "#6f8cff",
  L: "#ff9f43",
};

const SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

const boardCanvas = document.getElementById("board");
const nextCanvas = document.getElementById("next");
const boardCtx = boardCanvas.getContext("2d");
const nextCtx = nextCanvas.getContext("2d");

const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const linesEl = document.getElementById("lines");
const overlayEl = document.getElementById("overlay");
const overlayTitleEl = document.getElementById("overlay-title");
const overlayTextEl = document.getElementById("overlay-text");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const soundButton = document.getElementById("sound-button");

boardCtx.scale(BLOCK, BLOCK);
nextCtx.scale(NEXT_BLOCK, NEXT_BLOCK);

const state = {
  board: createBoard(),
  current: null,
  next: null,
  score: 0,
  lines: 0,
  level: 1,
  dropCounter: 0,
  dropInterval: 800,
  lastTime: 0,
  running: false,
  paused: false,
  animationId: null,
  soundEnabled: true,
};

const audio = {
  context: null,
  master: null,
  musicGain: null,
  musicNodes: [],
  musicTimer: null,
};

const MUSIC_SEQUENCE = [
  { note: "E5", beats: 1 },
  { note: "B4", beats: 0.5 },
  { note: "C5", beats: 0.5 },
  { note: "D5", beats: 1 },
  { note: "C5", beats: 0.5 },
  { note: "B4", beats: 0.5 },
  { note: "A4", beats: 1 },
  { note: "A4", beats: 0.5 },
  { note: "C5", beats: 0.5 },
  { note: "E5", beats: 1 },
  { note: "D5", beats: 0.5 },
  { note: "C5", beats: 0.5 },
  { note: "B4", beats: 1.5 },
  { note: "C5", beats: 0.5 },
  { note: "D5", beats: 1 },
  { note: "E5", beats: 1 },
  { note: "C5", beats: 1 },
  { note: "A4", beats: 1 },
  { note: "A4", beats: 1 },
];

const NOTE_FREQUENCIES = {
  A4: 440,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
};

function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}

function randomPiece() {
  const types = Object.keys(SHAPES);
  const type = types[Math.floor(Math.random() * types.length)];
  return {
    type,
    matrix: SHAPES[type].map((row) => [...row]),
    x: 0,
    y: 0,
  };
}

function resetPiece(piece) {
  piece.y = 0;
  piece.x = Math.floor((COLS - piece.matrix[0].length) / 2);
  return piece;
}

function startGame() {
  initAudio();
  resumeAudio();
  state.board = createBoard();
  state.score = 0;
  state.lines = 0;
  state.level = 1;
  state.dropInterval = 800;
  state.dropCounter = 0;
  state.lastTime = 0;
  state.paused = false;
  state.running = true;
  state.current = resetPiece(randomPiece());
  state.next = randomPiece();
  hideOverlay();
  updateStats();
  updateSoundButton();
  startMusic();
  cancelAnimationFrame(state.animationId);
  state.animationId = requestAnimationFrame(update);
  draw();
}

function update(time = 0) {
  if (!state.running || state.paused) {
    return;
  }

  const delta = time - state.lastTime;
  state.lastTime = time;
  state.dropCounter += delta;

  if (state.dropCounter > state.dropInterval) {
    dropPiece();
  }

  draw();
  state.animationId = requestAnimationFrame(update);
}

function drawCell(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.lineWidth = 0.06;
  ctx.strokeRect(x + 0.03, y + 0.03, 0.94, 0.94);

  ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
  ctx.fillRect(x + 0.08, y + 0.08, 0.84, 0.16);
}

function drawMatrix(ctx, matrix, offset, palette = COLORS) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        const color = typeof value === "string" ? value : palette[state.current?.type] || palette[offset.type];
        drawCell(ctx, x + offset.x, y + offset.y, color);
      }
    });
  });
}

function drawBoardGrid() {
  boardCtx.fillStyle = "#060b13";
  boardCtx.fillRect(0, 0, COLS, ROWS);

  boardCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  boardCtx.lineWidth = 0.03;

  for (let x = 0; x <= COLS; x += 1) {
    boardCtx.beginPath();
    boardCtx.moveTo(x, 0);
    boardCtx.lineTo(x, ROWS);
    boardCtx.stroke();
  }

  for (let y = 0; y <= ROWS; y += 1) {
    boardCtx.beginPath();
    boardCtx.moveTo(0, y);
    boardCtx.lineTo(COLS, y);
    boardCtx.stroke();
  }
}

function draw() {
  drawBoardGrid();
  drawMatrix(boardCtx, state.board, { x: 0, y: 0 });

  if (state.current) {
    drawMatrix(boardCtx, state.current.matrix, state.current, {
      [state.current.type]: COLORS[state.current.type],
    });
  }

  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
  nextCtx.fillStyle = "#060b13";
  nextCtx.fillRect(0, 0, nextCanvas.width, nextCanvas.height);

  if (state.next) {
    const matrix = state.next.matrix;
    const offsetX = (5 - matrix[0].length) / 2;
    const offsetY = (5 - matrix.length) / 2;
    drawMatrix(nextCtx, matrix, { x: offsetX, y: offsetY, type: state.next.type }, {
      [state.next.type]: COLORS[state.next.type],
    });
  }
}

function merge() {
  state.current.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        state.board[y + state.current.y][x + state.current.x] = COLORS[state.current.type];
      }
    });
  });
}

function collide(board, piece) {
  return piece.matrix.some((row, y) => {
    return row.some((value, x) => {
      if (!value) {
        return false;
      }

      const boardY = y + piece.y;
      const boardX = x + piece.x;
      return (
        boardX < 0 ||
        boardX >= COLS ||
        boardY >= ROWS ||
        (boardY >= 0 && board[boardY][boardX] !== 0)
      );
    });
  });
}

function rotate(matrix, dir) {
  const rotated = matrix.map((_, index) => matrix.map((row) => row[index]));
  return dir > 0 ? rotated.map((row) => row.reverse()) : rotated.reverse();
}

function playerRotate(dir) {
  if (!state.running || state.paused) {
    return;
  }

  const originalX = state.current.x;
  const rotated = rotate(state.current.matrix, dir);
  let offset = 1;
  state.current.matrix = rotated;

  while (collide(state.board, state.current)) {
    state.current.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (Math.abs(offset) > state.current.matrix[0].length) {
      state.current.matrix = rotate(rotated, -dir);
      state.current.x = originalX;
      return;
    }
  }

  playSound("rotate");
}

function clearLines() {
  let cleared = 0;

  outer: for (let y = ROWS - 1; y >= 0; y -= 1) {
    for (let x = 0; x < COLS; x += 1) {
      if (state.board[y][x] === 0) {
        continue outer;
      }
    }

    const row = state.board.splice(y, 1)[0].fill(0);
    state.board.unshift(row);
    cleared += 1;
    y += 1;
  }

  if (cleared > 0) {
    const points = [0, 100, 300, 500, 800];
    state.score += points[cleared] * state.level;
    state.lines += cleared;
    state.level = Math.floor(state.lines / 10) + 1;
    state.dropInterval = Math.max(120, 800 - (state.level - 1) * 70);
    updateStats();
    playSound(cleared >= 4 ? "tetris" : "clear", cleared);
  }
}

function spawnNext() {
  state.current = resetPiece(state.next);
  state.next = randomPiece();

  if (collide(state.board, state.current)) {
    endGame();
  }
}

function dropPiece() {
  state.current.y += 1;

  if (collide(state.board, state.current)) {
    state.current.y -= 1;
    merge();
    playSound("lock");
    clearLines();
    spawnNext();
  }

  state.dropCounter = 0;
}

function hardDrop() {
  if (!state.running || state.paused) {
    return;
  }

  while (!collide(state.board, state.current)) {
    state.current.y += 1;
  }

  state.current.y -= 1;
  merge();
  playSound("drop");
  clearLines();
  spawnNext();
  state.dropCounter = 0;
  draw();
}

function movePiece(dir) {
  if (!state.running || state.paused) {
    return;
  }

  state.current.x += dir;
  if (collide(state.board, state.current)) {
    state.current.x -= dir;
    return;
  }

  playSound("move");
}

function softDrop() {
  if (!state.running || state.paused) {
    return;
  }

  dropPiece();
  state.score += 1;
  updateStats();
}

function updateStats() {
  scoreEl.textContent = state.score;
  levelEl.textContent = state.level;
  linesEl.textContent = state.lines;
}

function showOverlay(title, text, buttonText) {
  overlayTitleEl.textContent = title;
  overlayTextEl.textContent = text;
  startButton.textContent = buttonText;
  overlayEl.classList.remove("hidden");
}

function hideOverlay() {
  overlayEl.classList.add("hidden");
}

function pauseGame() {
  if (!state.running) {
    return;
  }

  state.paused = !state.paused;
  pauseButton.textContent = state.paused ? "계속하기" : "일시정지";

  if (state.paused) {
    stopMusic();
    showOverlay("일시정지", "다시 시작하려면 버튼이나 P 키를 누르세요", "계속하기");
  } else {
    hideOverlay();
    resumeAudio();
    startMusic();
    state.lastTime = performance.now();
    state.animationId = requestAnimationFrame(update);
  }
}

function endGame() {
  state.running = false;
  state.paused = false;
  pauseButton.textContent = "일시정지";
  cancelAnimationFrame(state.animationId);
  stopMusic();
  playSound("gameOver");
  showOverlay("게임 오버", `최종 점수 ${state.score}점`, "다시 시작");
}

function initAudio() {
  if (audio.context) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    state.soundEnabled = false;
    updateSoundButton();
    return;
  }

  audio.context = new AudioContextClass();
  audio.master = audio.context.createGain();
  audio.master.gain.value = 0.28;
  audio.master.connect(audio.context.destination);

  audio.musicGain = audio.context.createGain();
  audio.musicGain.gain.value = 0.18;
  audio.musicGain.connect(audio.master);
}

function resumeAudio() {
  if (audio.context && audio.context.state === "suspended" && state.soundEnabled) {
    audio.context.resume();
  }
}

function stopMusic() {
  audio.musicNodes.forEach((node) => {
    try {
      node.stop();
    } catch (error) {
      // Ignore nodes that have already stopped.
    }
  });
  audio.musicNodes = [];

  if (audio.musicTimer) {
    clearTimeout(audio.musicTimer);
    audio.musicTimer = null;
  }
}

function startMusic() {
  if (!state.soundEnabled || !audio.context || !state.running || state.paused) {
    return;
  }

  stopMusic();

  const beat = 60 / 138;
  let cursor = audio.context.currentTime + 0.05;

  MUSIC_SEQUENCE.forEach((step) => {
    const osc = audio.context.createOscillator();
    const gain = audio.context.createGain();
    const duration = step.beats * beat;

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(NOTE_FREQUENCIES[step.note], cursor);
    gain.gain.setValueAtTime(0.0001, cursor);
    gain.gain.exponentialRampToValueAtTime(0.075, cursor + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, cursor + duration);
    osc.connect(gain);
    gain.connect(audio.musicGain);
    osc.start(cursor);
    osc.stop(cursor + duration + 0.03);
    audio.musicNodes.push(osc);
    cursor += duration;
  });

  audio.musicTimer = setTimeout(() => {
    if (state.running && !state.paused && state.soundEnabled) {
      startMusic();
    }
  }, Math.max(250, (cursor - audio.context.currentTime) * 1000 - 120));
}

function playTone({ frequency, duration, type = "square", volume = 0.05, slideTo, when = 0 }) {
  if (!state.soundEnabled || !audio.context || !audio.master) {
    return;
  }

  const start = audio.context.currentTime + when;
  const osc = audio.context.createOscillator();
  const gain = audio.context.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  if (slideTo) {
    osc.frequency.exponentialRampToValueAtTime(slideTo, start + duration);
  }

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  osc.connect(gain);
  gain.connect(audio.master);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function playSound(name, intensity = 1) {
  if (!state.soundEnabled) {
    return;
  }

  resumeAudio();

  switch (name) {
    case "move":
      playTone({ frequency: 320, duration: 0.04, type: "square", volume: 0.02, slideTo: 280 });
      break;
    case "rotate":
      playTone({ frequency: 420, duration: 0.06, type: "triangle", volume: 0.03, slideTo: 520 });
      break;
    case "lock":
      playTone({ frequency: 180, duration: 0.08, type: "square", volume: 0.03, slideTo: 120 });
      break;
    case "drop":
      playTone({ frequency: 260, duration: 0.06, type: "sawtooth", volume: 0.035, slideTo: 90 });
      break;
    case "clear":
      playTone({ frequency: 520, duration: 0.08, type: "triangle", volume: 0.04 });
      playTone({ frequency: 680 + intensity * 30, duration: 0.12, type: "triangle", volume: 0.04, when: 0.05 });
      break;
    case "tetris":
      playTone({ frequency: 520, duration: 0.08, type: "triangle", volume: 0.05 });
      playTone({ frequency: 660, duration: 0.08, type: "triangle", volume: 0.05, when: 0.06 });
      playTone({ frequency: 880, duration: 0.18, type: "triangle", volume: 0.05, when: 0.12 });
      break;
    case "gameOver":
      playTone({ frequency: 240, duration: 0.18, type: "sawtooth", volume: 0.045, slideTo: 180 });
      playTone({ frequency: 180, duration: 0.24, type: "sawtooth", volume: 0.04, slideTo: 110, when: 0.14 });
      break;
  }
}

function updateSoundButton() {
  soundButton.textContent = state.soundEnabled ? "사운드 켜짐" : "사운드 꺼짐";
}

function toggleSound() {
  initAudio();
  state.soundEnabled = !state.soundEnabled;
  updateSoundButton();

  if (!state.soundEnabled) {
    stopMusic();
    return;
  }

  resumeAudio();
  playSound("rotate");
  if (state.running && !state.paused) {
    startMusic();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
  }

  switch (event.key.toLowerCase()) {
    case "arrowleft":
      movePiece(-1);
      break;
    case "arrowright":
      movePiece(1);
      break;
    case "arrowdown":
      softDrop();
      break;
    case "arrowup":
    case "x":
      playerRotate(1);
      break;
    case "z":
      playerRotate(-1);
      break;
    case " ":
      hardDrop();
      break;
    case "p":
      pauseGame();
      break;
  }

  draw();
});

startButton.addEventListener("click", () => {
  if (!state.running || !state.paused) {
    startGame();
    pauseButton.textContent = "일시정지";
    return;
  }

  pauseGame();
});

pauseButton.addEventListener("click", pauseGame);
soundButton.addEventListener("click", toggleSound);

showOverlay("시작 준비", "방향키와 스페이스로 블록을 쌓아보세요", "게임 시작");
updateSoundButton();
draw();
