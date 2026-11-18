// console.log(document)
// let div = document.querySelector("div")
// console.log(div)
// div.innerText = "I am Batman"
// div.textContent = "I am Batman"
// let a = 10
// div.innerHTML = `<h1>I am Batman</h1>
// <div>Hello Everyone</div>
// `

// console.log(document.title)
// document.title = "Jashan"
// div.style.color = "red"
// div.style.backgroundColor = "black"

// let divs = document.querySelectorAll("div")[2]
// console.log(divs)

// divs.forEach(el=>{
//   el.style.color = "red"
//   el.style.backgroundColor = "black"
//   el.innerHTML = `<h1>I am Batman</h1>
//   <div>Hello Everyone</div>
//   `
// })
// divs.innerHTML = `<h1>I am Batman</h1>`
// let hero = document.querySelector(".hero")
// hero.style.color = "pink"

// let id = document.querySelector("#hero")
// id.style.color = "red"

// let div1 = document.getElementsByClassName("hero")
// console.log(div1)

// let div2 = document.getElementById("hero")
// console.log(div2)

// let div = document.querySelectorAll("p")
// console.log(div)

// function changeColor(){
//   div1[0].style.color = "red"
//   div2.style.color = "blue"
  
//   div.forEach(el=>{
//     el.style.color = "lightgreen"
//   })
// }

let red = document.querySelector(".one")
let white = document.querySelector(".two")
let green = document.querySelector(".three")

function tiranga(){
  red.classList.toggle("red")
  white.classList.toggle("white")
  green.classList.toggle("green")
}