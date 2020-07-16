const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = undefined;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  if (isActive) {
    refs.startBtn.disabled = true;
  }
  const color = colors[randomIntegerFromInterval(0, colors.length)];
  document.body.style.backgroundColor = color;
}

function startColorChange() {
  intervalId = setInterval(() => setRandomColor(), 1000);
  isActive = true;
}

function stopColorChange() {
  clearInterval(intervalId);
  isActive = false;
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);
