// document.addEventListener("keyup",(e)=>{
//     e.preventDefault()
//     console.log(e.key)
// })

let result = document.getElementById("result")
function simpleInterest(){
    let amount = parseInt(document.getElementById("principal").value)
    let rate = parseInt(document.getElementById("rate").value)
    let time = parseInt(document.getElementById("time").value)

    let interest = (amount * rate * time)/100

    result.innerHTML = `The total amount to be paid is ${amount+interest} and the interest is ${interest}`
}
let form = document.querySelector("form")
let btn = document.getElementById("submit")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    simpleInterest()
    form.reset()
})