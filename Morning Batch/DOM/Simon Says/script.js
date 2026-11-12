let colors = ["red", "blue", "green", "yellow"];
let start = false;
let randomSeq = [];
let userSeq = [];
let boxes = document.querySelectorAll(".box");
let level = 0;
let score = document.querySelector(".score");
let heading = document.querySelector("h2")
function blink(el) {
  let e = document.querySelector(`.${el}`);

  setTimeout(() => {
    e.classList.remove("flash");
  }, 350);
  e.classList.add("flash");
}

function random() {
  let random = Math.floor(Math.random() * 4);
  return colors[random];
}

document.addEventListener("click", (e) => {
  if (start) return;
  let color = random();
  blink(color);
  randomSeq.push(color);
  levelUp();
  start = true;
});

document.addEventListener("keypress", (e) => {
  if (start) return;
  let color = random();
  blink(color);
  randomSeq.push(color);
  levelUp();
  start = true;
});

boxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!start) return;
    let color = e.target.classList[0];
    blink(color);
    userSeq.push(color);
    check(userSeq.length - 1);
  });
});

function levelUp() {
  level++;
  heading.innerHTML = `<h2>Simon Says</h2>Level ${level}`
  let highscore = level - 1 || 0;
  score.innerHTML = `Score: ${highscore}`;
  userSeq = [];
}
function check(i) {
  if (randomSeq[i] !== userSeq[i]) {
    reset();
  } else if (randomSeq.length == userSeq.length) {
    levelUp();
    setTimeout(() => {
      let color1 = random();
      blink(color1);
      randomSeq.push(color1);
    }, 350);
  }
}
function reset() {
  console.log(randomSeq);
  console.log(userSeq);
  start = false;
  level = 0;
  score.innerHTML = `Score: 0`;
  randomSeq = [];
  userSeq = [];
  document.querySelector("body").classList.add("game-over")
  setTimeout(() => {
    document.querySelector("body").classList.remove("game-over")
  }, 400);
}
