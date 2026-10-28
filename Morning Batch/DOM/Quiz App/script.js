let questions = [
  {
    question: "Which language is used to add interactivity to websites?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "SQL",
    correct: "c",
  },
  {
    question:
      "Which keyword declares a block-scoped variable that can be reassigned?",
    a: "const",
    b: "let",
    c: "fixed",
    d: "static",
    correct: "b",
  },
  {
    question: "What is the output of 2 + 3 in JavaScript?",
    a: "23",
    b: "5",
    c: "6",
    d: "Error",
    correct: "b",
  },
  {
    question: "Which method adds an element to the end of an array?",
    a: "pop()",
    b: "shift()",
    c: "push()",
    d: "unshift()",
    correct: "c",
  },
  {
    question: "Which symbol is used for strict equality?",
    a: "==",
    b: "=",
    c: "!=",
    d: "===",
    correct: "d",
  },
  {
    question: "Which method selects an element by its ID?",
    a: "document.querySelectorAll()",
    b: "document.getElementById()",
    c: "document.getElementsByClassName()",
    d: "document.createElement()",
    correct: "b",
  },
  {
    question: "Which keyword is used to define a function?",
    a: "function",
    b: "method",
    c: "define",
    d: "func",
    correct: "a",
  },
  {
    question: "What does Array.length return?",
    a: "The last array element",
    b: "The first array element",
    c: "The number of elements in the array",
    d: "The array's data type",
    correct: "c",
  },
];
let questionBank = document.querySelector(".questionBank");
let startQuiz = document.querySelector(".startQuiz");
let i = 0;
let correct = 0,
  incorrect = 0;
let selected = null;
function displayQuestions() {

  if (i == questions.length) {
    questionBank.innerHTML = `<h3>You have completed the quiz!</h3>
    <div>Correct Answers: ${correct}</div><div>Incorrect Answers: ${incorrect}</div>
    `;
    startQuiz.innerHTML = `restart`;
    return;
  }
  if (i == questions.length + 1) {
    reset();
  }
  questionBank.innerHTML = `<h3>${questions[i].question}</h3>
  <div id="a" onClick="check('a')" class="option">${questions[i].a}</div>
  <div id="b" class="option" onClick="check('b')" >${questions[i].b}</div>
  <div id="c" class="option" onClick="check('c')" >${questions[i].c}</div>
  <div id="d" class="option" onClick="check('d')" >${questions[i].d}</div>

  `;
  startQuiz.innerHTML = `Next Question`;
  if (i == questions.length - 1) {
    startQuiz.innerHTML = `Submit`;
  }
}

startQuiz.addEventListener("click", () => {
  // Restart if quiz is completed
  if (i >= questions.length) {
    reset();
    return;
  }

  // First click starts the quiz
  if (i === 0 && selected === null) {
    displayQuestions();
    return;
  }

  // Require an answer before moving forward
  if (selected === null) {
    alert("Choose one before moving forward");
    return;
  }

  // Check answer
  if (selected === questions[i].correct) {
    correct++;
  } else {
    incorrect++;
  }

  selected = null;
  i++;

  displayQuestions();
});

const reset = () => {
  i = 0;
  correct = 0;
  incorrect = 0;
  questionBank.innerHTML = `Click on start to begin the quiz`;
  startQuiz.innerHTML = `Start`;
};

function check(ans) {
  let a = document.querySelectorAll(`.option`);
  console.log(a);

  a.forEach((el) => {
    el.classList.remove("selected");
  });

  document.querySelector(`#${ans}`).classList.add("selected");

  selected = ans;
}
