let timer;
let timeLeftOver = 25 * 60;
let run = false;

let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startButton");
let stopBtn = document.getElementById("stopButton");
let resetBtn = document.getElementById("resetButton");
let shortBreakBtn = document.getElementById("shortBreakButton");
let longBreakBtn = document.getElementById("longBreakButton");

function updateTimer() {
    let min = Math.floor(timeLeftOver / 60);
    let sec = timeLeftOver % 60;
    timerDisplay.textContent = `${min}:${sec}`;
}

function startButton() {
    if (!run) {
        run = true;
        timer = setInterval(() => {
            if (timeLeftOver > 0) {
                timeLeftOver--;
                updateTimer();
            } else {
                clearInterval(timer);
                run = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    run = false;
}

function reset() {
    clearInterval(timer);
    run = false;
    timeLeftOver = 25 * 60;
    updateTimer();
}

function shortBreak() {
    clearInterval(timer);
    run = false;
    timeLeftOver = 5 * 60;
    updateTimer();
}

function longBreak() {
    clearInterval(timer);
    run = false;
    timeLeftOver = 15 * 60;
    updateTimer();
}

stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
shortBreakBtn.addEventListener("click", shortBreak);
longBreakBtn.addEventListener("click", longBreak);

updateTimer();