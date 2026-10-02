let task = JSON.parse(localStorage.getItem("task")) || []
let btn = document.getElementById("submit")
let taskList = document.getElementById("list")
let form = document.querySelector("form")
function addTask() {
    let name = document.getElementById("name").value
    let date = document.getElementById("date").value
    let taskObj = {
        id:Date.now(),
        name,
        date,
    }
    if(!name || !date) return
    task.push(taskObj)

}
function display(){
    taskList.innerHTML = ""
    task.forEach(element => {
        let st = document.createElement("li")
        st.classList.add("el")
        st.id = element.id
        st.innerHTML = `${element.name} ${element.date} <button onclick="deleteTask(${element.id})">Delete</button> <button onclick="check(${element.id})">Check</button> `
        form.reset() 
        taskList.appendChild(st)
    });
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask()
    display()
    
    save()
} )

function save() {
    localStorage.setItem("task", JSON.stringify(task))
}

function check(id){
    let item = task.find(element => element.id === id);
        if (item) {
        console.log("Checked:", item);
    }

    let el = document.querySelectorAll(".el")
    console.log(el)
    el.forEach(i=>{
        if(i.id == item.id){
            i.classList.toggle("check")
        }
    })
}
function deleteTask(id){
    let item = task.find(element => element.id === id);
    task = task.filter(element => element.id !== item.id)
    display()
    save()
}

function reset(){
    task = []
    display()
    save()
}
display()