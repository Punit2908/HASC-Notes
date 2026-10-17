let list = JSON.parse(localStorage.getItem("list")) || []
let container = document.querySelector(".container")
let form = document.querySelector("form")
let credit = document.querySelector("#credit")
let debit = document.querySelector("#debit")

function createExpense(type){
  let name = document.querySelector("#name").value
  let amount = document.querySelector("#amount").value
  let date = document.querySelector("#date").value

  let expense = {
    name,
    amount,
    date,
    type: `${type}`
  }
  list.push(expense)
}

credit.addEventListener('click', (e)=>{
  e.preventDefault();
  createExpense("credit")
  displayExpenses()
  save()
  form.reset()
})

debit.addEventListener("click", e=>{
  e.preventDefault();
  createExpense("debit")
  displayExpenses()
  save()
  form.reset()
})

function displayExpenses(){
  container.innerHTML = ""
  list.map(el=>{
    let cost = document.createElement("div")
    cost.innerHTML = `<div>Expense Name: ${el.name}</div>
    <div class="${el.type}">Amount: ${el.amount}</div>
    <div>Date of Expense: ${el.date}</div>
    `
    container.appendChild(cost)
  })
}

function save(){
  localStorage.setItem("list", JSON.stringify(list))
}

displayExpenses()