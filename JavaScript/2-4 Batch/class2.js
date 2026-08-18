// const a = 10
// {
//     const a = 11
//     console.log(a);
    
// }
// console.log(a);

let bool = (3/2+2)>5
console.log(bool);
let nan = NaN
console.log(nan);
let infy = 2/0
console.log(infy);


//string
let str = "Hello Komal This is cyber class so don't sleep."
let a = str.length   //number return krta hai
console.log(a,typeof(a));
console.log(str[-1]);
let num = "twelve"
console.log(`Hello I have ${num} bananas`);

//string operators

//strings
let helo = "    Hello I am a string     "//0-18
console.log(helo[18])
//methods on string
console.log(helo.toUpperCase());
console.log(helo);

console.log(helo.toUpperCase().trim());
console.log(helo.toLowerCase());
console.log(helo.trim());

console.log(helo.includes("ami"));
console.log(helo.indexOf("I"));
console.log(helo.replaceAll("I","You"));
console.log(helo.concat(" And I am using concat function"));

console.log(helo.split(" "));

