let list = JSON.parse(localStorage.getItem("list")) || []

let btn = document.getElementById("submit")

btn.addEventListener("click", e=>{
    e.preventDefault()
    addTask()
    save()
    display()
})

const addTask = ()=>{
    let name = document.getElementById("name").value
    let date = document.getElementById("date").value
    const obj = {
        name,
        date,
        id:Date.now()
    }
    list.push(obj)
}

const display = ()=>{
    let table = document.getElementById("list")
    table.innerHTML = ""

    list.forEach(e=>{
        let li = document.createElement("div")
        li.classList.add("task")
        li.id = e.id
        li.innerHTML = `<div class="name">${e.name}</div><div class="date">${e.date}</div><button class="delete" onclick="deleteTask(${e.id})">Delete</button> <button class="check" onclick="check(${e.id})">Check</button>`

        table.appendChild(li)
    })
}

const save = ()=>{
    localStorage.setItem("list", JSON.stringify(list))
}

const check = (id)=>{
    list.forEach(e=>{
        if(e.id === id){
            document.getElementById(`${e.id}`).classList.toggle("done")
        }
    })
    save()
}

const deleteTask = (id)=>{
    list = list.filter(el=>{
        return el.id !== id
    })
    display()
    save()
}

display()