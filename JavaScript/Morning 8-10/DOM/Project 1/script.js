let btn = document.querySelector("button");
let list = document.querySelector("#list");
let tasks = JSON.parse(localStorage.getItem("task")) || [];
let form = document.querySelector("form");

function addTask(){
    let name = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    const task = {
        name,
        date,
        id: Date.now()
    }
    tasks.push(task);
}

function displayTasks(){
    list.innerHTML = "";

    tasks.forEach(task =>{
        let item = document.createElement("div");
        item.innerHTML += `<div class="name">${task.name}</div><div class="date">${task.date}</div>
        <button class="check" onClick="check(${task.id})">Check</button>
        <button class="delete" onClick="deleteTask(${task.id})">Delete</button>
        `
        item.id = `a${task.id}`;
        item.classList.add(`item`);
        list.appendChild(item);
        
    })
}

btn.addEventListener("click", e=>{
    e.preventDefault()
    addTask();
    displayTasks();
    saveTask();
    form.reset();
})

function saveTask(){
    localStorage.setItem("task",JSON.stringify(tasks));
}

function check(id){
    let item = document.querySelector(`#a${id}`);
    item.classList.toggle("checka");
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    saveTask();
    displayTasks();
}

displayTasks();
