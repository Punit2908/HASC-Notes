let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let container = document.querySelector('.container')

let btn = document.querySelector('.submit')
let resetbtn = document.querySelector('.reset')

function makeTask(){
  let name = document.querySelector('#name').value
  let date = document.querySelector('#date').value

  let task = {
    name,
    date,
    id: Date.now()
  }
  tasks.push(task)
}

function displayTasks(){
  container.innerHTML = ''

  tasks.forEach((el)=>{
    let div = document.createElement('div')
    div.classList.add('item')
    div.id = el.id
    div.innerHTML = `<div>${el.name}</div><div>${el.date}</div> <button onClick="deleteTask(${el.id})">Delete</button> <button onClick="check(${el.id})">Check</button>`

    container.appendChild(div)
  })
}

btn.addEventListener("click", e=>{
  e.preventDefault()
  makeTask()
  displayTasks()
  save()
})


function deleteTask(id){
  tasks = tasks.filter(el=>el.id !== id)
  displayTasks()
}

function check(id){

  let items = document.querySelectorAll('.item')
  // console.log(items)

  items.forEach(el=>{
    if(el.id == id){
      console.log("first")
      el.classList.toggle('check')
    }
  })
}

function reset(){
  tasks = []
  displayTasks()
  save()
}

function save(){
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

displayTasks()