

function calculateAmount() {
  let principle = document.getElementById("principle").value;
  let time = document.getElementById("time").value;
  let rate = document.getElementById("rate").value;
  let amount = principle * (1 + rate/100) * time;
  console.log(principle,time,rate)
  // document.getElementById("amount").value = amount;
  let p = document.getElementsByClassName("output").item(0)
  p.innerText = amount
  console.log(p.innerText)
  
}
let btn = document.querySelector(".submit")

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  calculateAmount()
})

let box = document.getElementById("box")

let btn2 = document.querySelector(".change-css")

btn2.addEventListener("click",()=>{
  box.innerText = "The text is changed";
  box.classList.add("box")
})

document.addEventListener("keydown",(e)=>{
  e.preventDefault()
  if(e.key == "Enter"){
    console.log("Enter pressed");
  }
  
})

document.getElementsByClassName("experiment").item(0).addEventListener("dblclick",(e)=>{
  console.log("double clicked");
  
})