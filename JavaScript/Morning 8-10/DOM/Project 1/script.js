let btn = document.querySelector("button");
let list = document.querySelector("#list");
let tasks = [];
let form = document.querySelector("form");

function addTask(){
    let name = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    const task = {
        name,
        date
    }
    tasks.push(task);
}

function displayTasks(){
    list.innerHTML = "";
    tasks.forEach(task =>{
        list.innerHTML += `<div class="name">${task.name}</div><div class="date">${task.date}</div>
        <button class="check">Check</button>
        <button class="delete">Delete</button>
        `
    })
}

btn.addEventListener("click", e=>{
    e.preventDefault()
    addTask();
    displayTasks();
    form.reset();
})