let timer;
let timeLeft;
let isRunning = false;
let isBreak = false;

const workInput = document.getElementById("work-time");
const breakInput = document.getElementById("break-time");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-timer");
const pauseBtn = document.getElementById("pause-timer");
const resetBtn = document.getElementById("reset-timer");

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timeLeft = (isBreak ? breakInput.value : workInput.value) * 60;
    updateTimer();
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isBreak = false;
  timerDisplay.textContent = `${workInput.value}:00`;
}

function updateTimer() {
  if (timeLeft <= 0) {
    isBreak = !isBreak;
    resetTimer();
    return;
  }
  timeLeft--;
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
