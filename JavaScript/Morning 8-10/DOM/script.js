// const div1 = document.querySelectorAll('div')

// div1.textContent = 'Hello world'
// div.innerText = 'I am writen in JavaScript'
// div1.textContent = 'I am writen in JavaScript'
// div1.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"

// div1.forEach(el=>{
//     el.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"
// })

// const div1 = document.getElementsByClassName('hero')
// const div = document.querySelector('div')
// const div1 = document.getElementById('first')
// const div2 = document.getElementsByClassName('hero')[1]
// const div2 = document.getElementsByClassName('hero')


// function addClass(){
//     div.classList.toggle('orange')
//     div1.classList.toggle('white')
//     div2.classList.toggle('green')
//     div.innerHTML = `<h1>I</h1>`
//     // div.style.display = 'inline'
//     div1.innerHTML = `<h1>Love My</h1>`
//     div2.innerHTML = `<h1>Country</h1>`
// }

// let btn = document.querySelector('button')

// document.addEventListener("mouseleave",(e)=>{
//     console.log(e)
//     addClass()
// })


// let div = document.querySelector('div')

// function addToDiv(){
//     let h1 = document.createElement('h1')
//     h1.innerHTML = 'Hello world'
//     div.appendChild(h1)
//     let p = document.createElement('p')
//     p.innerHTML = 'I am writen in JavaScript'
//     let p1 = document.createElement('p')
//     p1.innerHTML = `${div.id} and ${div.className}`
//     div.appendChild(p1)
//     div.appendChild(p)
// }

// let btn = document.querySelector('button')
// btn.addEventListener('click',addToDiv)


let btn = document.querySelector('button')
let result = document.getElementById('result')

function calculateInterest(){
    let principal = Number(document.getElementById('principal').value)
    let rate = Number(document.getElementById('rate').value)
    let duration = Number(document.getElementById('duration').value)
    let si = principal * rate * duration/100

    result.innerHTML = `Principal: ${principal}, Rate: ${rate}, Duration: ${duration}, Simple Interest: ${si} and the total amount is ${principal + si}`
}

btn.addEventListener('click',e=>{
    e.preventDefault()
    calculateInterest()
})