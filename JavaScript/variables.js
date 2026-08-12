//varibles

//let, var, const
//let , const

let num = 10;
num = 20;
let name = "Komal Goswami"
name = "Komal"
let greet = "Hello Komal How are you?"

//can't use same variable name more than once....
const num2 = 10
const name2 = "Srishti"
//constant means never changing... We can't change const once defined

let b //declaration- maine variable to bana diya but use koi value nhi di
//Undefined result dega
b = 88 // initialization- variable ko value dena(string, number, symbol)
const c = 10//constant me undefined nhi ja skta aur use sirf declare krke nhi chod skte
// c = 20
//hamari site pe jo bhi dikha hai vo ek window ka part hai

var number//declare
number = 11//initialization
//var is variable ko window ke objects me store kr deta hai jo hamari default values ko hata skta hai

//console - ek object jisse hum consone ke andar elements ko control kr skte hai

// console.log(num)
// console.log(num2)
// console.log(name)
// console.log(name2)
console.log(num,num2,name,name2);

console.log("This is an example line")

let aaa
aaa = 10
console.log(aaa);

//typesOf variables number,string,symbol,boolean,undefined,null,NaN,infinity

let infy = 1/0
console.log(infy);
let no = null
console.log(no);
// let stake = 100>90
let stake = true
console.log(stake);
let frac = 2/5
console.log(frac);


console.log(typeof(num))
console.log(typeof(no))//js has error in print this type and shows object instead of null

// let nan = parseInt(prompt("Enter a number"))