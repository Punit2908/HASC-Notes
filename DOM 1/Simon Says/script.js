let heading = document.querySelector("h2");
let score = document.querySelector(".score");
let btn = document.querySelectorAll(".btn");
let arr = ['red', 'blue', 'green', 'yellow'];
let start = false;
let seq = []
let userSeq = []
let level = 0
// let score = document.querySelector(".score");

document.addEventListener('click', (e) => {
    if (start) {
        return;
    }
  
    start = true;
    levelUp();
    // console.log(arr[random])
})

document.addEventListener('keypress', () => {
    if (start) {
        return;
    }
    
    start = true;
    levelUp();
})

function blink(e) {
    let el = document.querySelector(`.${e}`);
    el.classList.add("flash");
    setTimeout(() => {
        el.classList.remove("flash");
    }, 300)
}


btn.forEach(e => {
    e.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        // console.log(e.target)
        e.target.classList.add("flash");
        setTimeout(() => {
            e.target.classList.remove("flash");
        }, 300)
        userSeq.push(e.target.id)
        check(userSeq.length);
            
    })
})


function check(idx){
    if(seq[idx-1]===userSeq[idx-1]){
        if(seq.length===userSeq.length){
            levelUp()            
        }
    }else{
        reset();
    }
    
}

function levelUp(){
    level++;
    let highscore = level;
    userSeq = [];
    score.innerHTML = `You score is ${highscore}`;
    heading.innerHTML = `Level ${level}`;
    setTimeout(() => {
            let random = Math.floor(Math.random() * 4);
            blink(arr[random]);
            seq.push(arr[random])
        }, 1000)  
}

function reset(){
    let body = document.querySelector("body");
        body.classList.add("error");
        setTimeout(() => {
            body.classList.remove("error");
            console.log("Done")
        }, 500)
        level = 0;
        seq = []
        score.innerHTML = `You score is ${level}`;
        heading.innerHTML = `Game Over`;
        start = false;
}