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


let arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach((el)=>{
  console.log(el);
})

let newarr = arr.map((el)=>{return el*2})
console.log(newarr);

arr.filter((el)=>{console.log(el>5);
})
//5 se bdo pe true less than me false

let newarr2 = arr.reduce((acc,el,idx,arr)=>{
  console.log(idx,arr);
  
  return acc*=el},1)
console.log(newarr2);

//some
let evenArr = [2,1,7,81]

let result1 = evenArr.some((el)=>{
  return el%2==0;
})
console.log(result1);
let result2 = evenArr.every((el)=>{
  return el%2!=0
})

console.log(result2);

//spread opretor
let oddArr = [...evenArr]
oddArr.pop()
console.log(evenArr,oddArr);
let name2 = "nisha"
let name3 = [...name2]
console.log(name3);

//reverse the name from array
//homework

const boj = {name:"Paul",age:20,city:"london"}
const obj2 = {...boj}
console.log(obj2);
const number4 = 12456
// number4[1]
// const number5 = [...number4]
// console.log(number5);
// numbers are non iterable so spread won't work there

