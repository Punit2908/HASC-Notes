let list = JSON.parse(localStorage.getItem("list")) || []
let btn = document.getElementById("submit")
let result = document.getElementById("result")
function addToList() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {
        id:Date.now(),
        name,
        email,
        password
    }

    list.push(user)
}
function renderList(){
    result.innerHTML = ""
    list.forEach(el=>{
        let div = document.createElement("div")
        div.id = el.id;
        div.classList.add("listItem")
        div.innerHTML = `${el.name}   ${el.email} <button onclick="deleteList(${el.id})">Delete</delete>`
        result.appendChild(div)
    })
}
btn.addEventListener("click",e=>{
    e.preventDefault()
    addToList()
    renderList()
    localStorage.setItem("list",JSON.stringify(list))
})

const deleteList =(id)=>{
    list = list.filter((el)=>{
        return el.id !=id
    })
    renderList()
}
renderList()