let list = JSON.parse(localStorage.getItem("list")) || [];
let container = document.querySelector(".container");
let form = document.querySelector("form");
let credit = document.querySelector("#credit");
let debit = document.querySelector("#debit");
let inn = document.querySelector(".inn");
let out = document.querySelector(".out");

let income = 0;
let expense = 0;

function createExpense(type) {
  let name = document.querySelector("#name").value;
  let amount = document.querySelector("#amount").value;
  let date = document.querySelector("#date").value;

  let expense = {
    name,
    amount,
    date,
    type: `${type}`,
  };
  list.push(expense);
}

credit.addEventListener("click", (e) => {
  e.preventDefault();
  createExpense("credit");
   if(document.querySelector("#name").value && document.querySelector("#amount").value && document.querySelector("#date").value)
  {
    displayExpenses();
    cost();
    save();
    form.reset();
  }
});

debit.addEventListener("click", (e) => {
  e.preventDefault();
  createExpense("debit");
  if(document.querySelector("#name").value && document.querySelector("#amount").value && document.querySelector("#date").value)
  {
    displayExpenses();
    cost();
    save();
    form.reset();
  }
});

function displayExpenses() {
  container.innerHTML = "";
  list.map((el) => {
    if (el.name && el.amount && el.date) {
      let cost = document.createElement("div");
      cost.innerHTML = `<div>Expense Name: ${el.name}</div>
    <div class="${el.type}">Amount: ${el.amount}</div>
    <div>Date of Expense: ${el.date}</div>
    `;
      container.appendChild(cost);
    }
  });
}

function save() {
  localStorage.setItem("list", JSON.stringify(list));
}

function cost() {
  list.filter((el) => {
    if (el.type === "credit") {
      // console.log(el)
      income += Number(el.amount);
      return el;
    }
  });
  inn.innerHTML = `<div>Income: ${income}</div>`;
  list.filter((el) => {
    if (el.type === "debit") {
      // console.log(el)
      expense += Number(el.amount);
      return el;
    }
  });
  out.innerHTML = `<div>Expense: ${expense}</div>`;
  console.log(income, expense);
}

displayExpenses();
cost();
