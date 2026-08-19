// Promise, stack, queue, event loop, call by value, call by reference, call hell
// debugger;
// function createGreeting(greetingWord) {
//   return function(name) {
//     console.log(greetingWord + ", " + name + "!");
//   };
// }

// const sayHello = createGreeting("Hello");
// const sayHola = createGreeting("Hola");

// // Use them
// sayHello("Alice"); 
// sayHola("Bob");    


function a(b){
  console.log(b)
  b()
}

(function (){
  console.log("Hiii")
})()
//this is a IIFE

//higher order functions basic example
// debugger;
function ad(){
  console.log("Hello this is a normal function")
}

function callMe(func){
  func()
}

callMe(ad)

console.log("Hello")


