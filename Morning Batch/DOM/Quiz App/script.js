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
let correct = 0, incorrect = 0;

function displayQuestions() {
  if(i<0){
    return
  }
  if (i == questions.length) {
    questionBank.innerHTML = `<h3>You have completed the quiz!</h3>
    <div>Correct Answers: ${correct}</div><div>Incorrect Answers: ${incorrect}</div>
    `;
    startQuiz.innerHTML = `restart`;
    return;
  }
  if (i == questions.length + 1) {
    reset()
  }
  questionBank.innerHTML = `<h3>${questions[i].question}</h3>
  <div id="a" onClick="check("a")">${questions[i].a}</div>
  <div id="b" onClick="check("b")">${questions[i].b}</div>
  <div id="c" onClick="check("c")">${questions[i].c}</div>
  <div id="d" onClick="check("d")">${questions[i].d}</div>

  `;
  startQuiz.innerHTML = `Next Question`;
  if (i == questions.length - 1) {
    startQuiz.innerHTML = `Submit`;
  }
}

startQuiz.addEventListener("click", (e) => {
  displayQuestions();
  console.log(i)
  i++;
});

const reset = () =>{
  i=-1
  correct=0
  incorrect=0
  questionBank.innerHTML = `Click on start to begin the quiz`
  startQuiz.innerHTML = `Start`
}

function check(ans){
  console.log("Hy")
  if(questions[i].correct == ans){
    correct++
  }else{
    incorrect++
  }
}