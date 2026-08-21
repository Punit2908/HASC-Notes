// let div = document.querySelector("div")

// div.innerText = "This text is changed with js"

// document.write = "This is added from document.write"

let usr = document.getElementById("username")
let lst = document.getElementById("lastname")
// let btn = document.querySelector("button")
// function fullname(){
//     console.log(usr.value+" "+lst.value);
// }

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     fullname()
// })

// console.log(usr,lst,btn);
let p = document.getElementsByClassName("output").item(0)

usr.addEventListener("input",(event)=>{
    event.preventDefault()
    // console.log(event);
    p.innerText = usr.value
})

document.addEventListener("keydown",(e)=>{
    e.preventDefault()
    p.innerText = e.key
})