//spy numbers
// const num = 123;

// function spyNumber(num){

// }

//calculator
let num1 = parseInt(prompt("Enter num1"))
let num2 = parseInt(prompt("Enter num2"));

let operator = prompt("Enter the operator");
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1-num2);
    break;
  case "*":
    console.log(num1*num2)
    break;
  case "/":
    console.log(num1/num2)
    break;
  case "%":
    console.log(num1%num2)
    break;
  default:
    console.log("Invalid operator");
}
