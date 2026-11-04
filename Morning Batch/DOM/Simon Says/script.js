let colors = ["red", "blue", "green", "yellow"]
let start = false
let randomSeq = []
let userSeq = []
let boxes = document.querySelectorAll(".box")
function blink(el){
  let e = document.querySelector(`.${el}`)

  setTimeout(() => {
    e.classList.remove("flash")
  }, 350);
  e.classList.add("flash")
}

function random(){
  let random = Math.floor(Math.random() * 4)
  return colors[random]
}

document.addEventListener("click", e=>{
  if(start) return
  let color = random()
  blink(color)
  randomSeq.push(color)
  start = true
})

document.addEventListener("keypress", e=>{
  if(start) return
  let color = random()
  blink(color)
  randomSeq.push(color)
  start = true
})

boxes.forEach(el=>{
  el.addEventListener("click", e=>{
    e.stopPropagation()
    if(!start) return
    let color = e.target.classList[0]
    blink(color)
    userSeq.push(color)
  })
})