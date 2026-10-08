// const div1 = document.querySelectorAll('div')

// div1.textContent = 'Hello world'
// div.innerText = 'I am writen in JavaScript'
// div1.textContent = 'I am writen in JavaScript'
// div1.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"

// div1.forEach(el=>{
//     el.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"
// })

// const div1 = document.getElementsByClassName('hero')
const div = document.querySelector('div')
const div1 = document.getElementById('first')
const div2 = document.getElementsByClassName('hero')[1]
// const div2 = document.getElementsByClassName('hero')


function addClass(){
    div.classList.toggle('orange')
    div1.classList.toggle('white')
    div2.classList.toggle('green')
    div.innerHTML = `<h1>I</h1>`
    // div.style.display = 'inline'
    div1.innerHTML = `<h1>Love My</h1>`
    div2.innerHTML = `<h1>Country</h1>`
}

let btn = document.querySelector('button')

document.addEventListener("mouseleave",(e)=>{
    console.log(e)
    addClass()
})
