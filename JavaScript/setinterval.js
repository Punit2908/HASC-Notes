//higher order function jo functions return kre ya function ko as an argument le
function add(a,b){
  return a+b;
}
//camelCasing
function greetAndAdd(){
  console.log("Hello I am a greeting function");

  let result = add(2,3)
  console.log(result);
  
}
// console.log(result);


// greetAndAdd();


//setTimeout()
// 1sec = 1000ms
// setTimeout(()=>{
//   greetAndAdd();
  
// },5000)
// console.log("This code will run first");


//setInterval()

// setInterval(()=>{
//   console.log("this will run infinitely");
//   greetAndAdd();
// },1000)
// console.log("This will run between the setInterval execution");

//functions with help of const or let keyword
//Arrow functions
const cyber = ()=>{return "This is an arrow function"}

let result = cyber()
console.log(result);


// function random(a,b){
//   let anything = (a*b)+c;
//   console.log(anything);
  
// }

// random(2,3)

//Creating functions using objects

const obj = {name:"Rahul",
  multiply: function(a,b){
    console.log(a*b);
    
  }
  // userName
}
obj.multiply(2,3)
console.log(obj.userName);

