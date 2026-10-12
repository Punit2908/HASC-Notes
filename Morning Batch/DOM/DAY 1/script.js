// let div = document.querySelector('div')

// div.innerText = "Hello I am Batman"
// div.textContent = "Hello Cyber students"

// div.innerHTML = "<h1>Hello I am Batman</h1><p>I am a programmer</p>"

// div.style.color = "purple"
// // div.style.backgroundColor = ""
// div.style.fontSize = "20px"

// console.log(div.classList)

// let div = document.querySelectorAll('div')
// console.log(div)

// div.forEach(el=>{
//     el.style.color = "red"
// })

// let hero = document.querySelectorAll('.hero')
// let hero = document.getElementById("villian")
// console.log(hero)

let orange = document.querySelector('.first')
let white = document.querySelector('.hero')
let green = document.querySelector('.third')
let btn = document.querySelector('button')

let list = document.createElement("ul")
list.innerHTML = `States of Our Country
    <li>Haryana</li>
    <li>Punjab</li>
    <li>Rajasthan</li>
    <li>Uttar Pradesh</li>  
    <li>Jammu and Kashmir</li>
    <li>Himachal Pradesh</li>
    <li>Uttarakhand</li>
    <li>Delhi</li>
    <li>Chandigarh</li>

`
let empty = document.querySelector('.empty')

function flag(){
    orange.classList.toggle('orange')
    white.classList.toggle('white')
    green.classList.toggle('green')

    empty.appendChild(list)
}

btn.addEventListener("dblclick", event=>{
    console.log(event)
    flag()
})

orange.addEventListener("oncopy",event=>{
    console.log(event)
    console.log(event.key)
    console.log(event.target)
    event.target.classList.toggle('red')
})