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

function randomIntegerFromInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}

function setRandomColor() {
  const color = colors[randomIntegerFromInterval(colors.length - 1)];
  document.body.style.backgroundColor = color;
  console.log(color);
}

function startColorChange() {
  intervalId = intervalId
    ? intervalId
    : setInterval(() => setRandomColor(), 1000);
}

function stopColorChange() {
  clearInterval(intervalId);
}

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);
