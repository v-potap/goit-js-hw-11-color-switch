const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const domRefs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]')
};

class IntervalBackColor {
  constructor(obj) {
    this.obj = obj;
    this.objInitialStyle = obj.style;
    this.timerID = 0;
  }

  start(colors) {
    this.timerID = setInterval(
      () =>
        (this.obj.style.backgroundColor =
          colors[this.randomIntegerFromInterval(1, colors.length)]),
      1000
    );
  }

  stop() {
    clearInterval(this.timerID);
    this.obj.style = this.objInitialStyle;
  }

  getTimerID() {
    return this.timerID;
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

domRefs.btnStart.addEventListener("click", handleButtonStart);
domRefs.btnStop.addEventListener("click", handleButtonStop);

const intervalBackColor = new IntervalBackColor(domRefs.body);

function handleButtonStart(e) {
  e.preventDefault();
  intervalBackColor.start(colors);
  domRefs.btnStart.disabled = true;
}

function handleButtonStop(e) {
  e.preventDefault();
  intervalBackColor.stop();
  domRefs.btnStart.disabled = false;
}

