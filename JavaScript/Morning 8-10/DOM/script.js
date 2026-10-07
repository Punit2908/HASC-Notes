// const div1 = document.querySelectorAll('div')

// div1.textContent = 'Hello world'
// div.innerText = 'I am writen in JavaScript'
// div1.textContent = 'I am writen in JavaScript'
// div1.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"

// div1.forEach(el=>{
//     el.innerHTML = "<h1>Hello world</h1><p>I am writen in JavaScript</p>"
// })

// const div1 = document.getElementsByClassName('hero')
const div1 = document.getElementById('first')
const div2 = document.getElementsByClassName('hero')
div1.style.color = 'blue'
div1.style.backgroundColor = 'red'
div1.style.fontSize = '20px'

function addClass(){
    div1.classList.toggle('jiya')
}

