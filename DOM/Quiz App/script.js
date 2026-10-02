let questions = [
    {
        question: "What is the name of the first president of the United States?",
        a: "George Washington",
        b: "Abraham Lincoln",
        c: "Thomas Jefferson",
        d: "John Adams",
        correct: "a"
    },
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "Berlin",
        c: "London",
        d: "Rome",
        correct: "c"
    },
    {
        question: "What is the largest country in the world?",
        a: "China",
        b: "India",
        c: "United States",
        d: "Russia",
        correct: "d"
    },
    {
        question: "What is the smallest country in the world?",
        a: "China",
        b: "India",
        c: "United States",
        d: "Russia",
        correct: "a"
    },
    {
        question: "What is the second largest country in the world?",
        a: "China",
        b: "India",
        c: "United States",
        d: "Russia",
        correct: "b"
    }
]
let n = questions.length;
let i = 0;
let container = document.getElementById("container");
let btn = document.querySelector("button")

btn.addEventListener("click", e => {
    e.preventDefault()
    displayQuestion()
    if(i == n+2){
        reset()
    }
})

function displayQuestion() {
    container.innerHTML = ""
    if (i < n) {

        container.innerHTML = `<div class="question">Question ${i + 1}: ${questions[i].question}</div>
        <div class="answer">a. ${questions[i].a}</div>
        <div class="answer">b. ${questions[i].b}</div>
        <div class="answer">c. ${questions[i].c}</div>
        <div class="answer">d. ${questions[i].d}</div>
    `
        if (i == n - 1) {
            btn.innerHTML = "Submit"
        } else {
            btn.innerHTML = "Next"
        }
        console.log(i)
        i++;
        return
    }
    i++;
    console.log(i)
    container.innerHTML = `Quiz Completed`
    btn.innerHTML = "Restart"

}


function reset() {
    i = 0;
    displayQuestion()
}