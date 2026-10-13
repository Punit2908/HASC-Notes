let btn = document.querySelector("button");
let result = document.querySelector("#result");
let form = document.querySelector("form");

function calculate(){
    let p = Number(document.querySelector("#principle").value);
    let i = Number(document.querySelector("#interest").value);
    let t = Number(document.querySelector("#time").value);

    let si = p * i * t/100;

    result.innerHTML = `Your interest is ${si} and your total amount is ${si + p}`;
}

btn.addEventListener("click",event=>{
    event.preventDefault();
    calculate();
    form.reset();
})