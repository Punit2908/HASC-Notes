let heading = document.querySelector("h2");
let score = document.querySelector(".score");
let btn = document.querySelectorAll(".btn");
let arr = ['red', 'blue', 'green', 'yellow'];
let start = false;
let seq = []
let userSeq = []

document.addEventListener('click', (e) => {
    if (start) {
        return;
    }
    let random = Math.floor(Math.random() * 4);
    blink(arr[random]);
    seq.push(arr[random])
    start = true;
    // console.log(arr[random])
})

document.addEventListener('keypress', () => {
    if (start) {
        return;
    }
    let random = Math.floor(Math.random() * 4);
    blink(arr[random]);
    seq.push(arr[random])
    start = true;
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
        check();
        setTimeout(() => {
            let random = Math.floor(Math.random() * 4);
            blink(arr[random]);
            seq.push(arr[random])
        }, 1000)
    })
})


function check(){
    if(seq.length === userSeq.length){
        seq[seq.length - 1] === userSeq[userSeq.length - 1];
        console.log(true)
    }
    console.log(false)
}