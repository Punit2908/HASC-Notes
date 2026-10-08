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
let select = false;
let correct = 0, wrong = 0;
btn.addEventListener("click", e => {
    e.preventDefault()
    displayQuestion()
    check()
    if (i == n + 2) {
        reset()
    }
})


function displayQuestion() {
    container.innerHTML = ""
    if (i < n) {
        select = false;
        container.innerHTML = `<div class="question">Question ${i + 1}: ${questions[i].question}</div>
        <div class="answer" id="a">a. ${questions[i].a}</div>
        <div class="answer" id="b">b. ${questions[i].b}</div>
        <div class="answer" id="c">c. ${questions[i].c}</div>
        <div class="answer" id="d">d. ${questions[i].d}</div>
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
    container.innerHTML = `<h2>Quiz Completed!</h2><h3>You scored ${correct} correct and ${wrong} wrong</h3>`
    btn.innerHTML = "Restart"

}


function check() {
    
        
        let ans = document.querySelectorAll(".answer")
        console.log(ans)
        ans.forEach(e => {
            // e.classList.remove("selected")
            e.addEventListener("click", e => {
                if(select) return
                e.target.classList.add("selected")
                
                if(e.target.id == questions[i-1].correct){
                    correct++
                    console.log("Correct",correct)
                }else{
                    wrong++
                    console.log("Wrong",wrong)
                }
                select = true
            })
        })
    }
    console.log(select)


function reset() {
    i = 0;
    correct = 0;
    wrong = 0;
    displayQuestion()
}