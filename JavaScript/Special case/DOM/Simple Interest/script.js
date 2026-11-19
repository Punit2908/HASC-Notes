let result = document.getElementById("result");
function calculate() {
  let p = parseInt(document.querySelector("#principal").value);
  let r = parseInt(document.querySelector("#rate").value);
  let t = parseInt(document.querySelector("#years").value);
  let i = (p * r * t) / 100;

  result.innerText = `Your interest on given amount is ${i} and your total amount will be ${i + p}`;
}

let form = document.querySelector("form")
let btn = document.querySelector("button")
btn.addEventListener("click", event=>{
  event.preventDefault()
  calculate()
  form.reset()
})