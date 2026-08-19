let a = 10; //global scope
{
    let a = 9; //local scope
    console.log(a);
}
console.log(a);
//var disadvantage - var doen't value the scope
var b=11;
{
    var b = 12;
    console.log(b);
}
console.log(b);


let name = `Punit`
console.log(name);

let bool = 10>20;
console.log(bool);

let sym = Symbol("id:1")
console.log(sym);

let c;  //declaration
c = 1;  //initialization
console.log(c);

let d = null
console.log(d);

// let e = NaN
let e = 0/0
console.log(e,typeof(e));

//infinity
let f = 1/0
console.log(f);

//arthmetic operators
// +,-,/,*,**,%
let num1 = 12
let num2 = 11
console.log(num1+num2); 
console.log(num1-num2); 
console.log(num1/num2); 
console.log(num1*num2); 
console.log(num1**num2); 
console.log(num1%num2); 

//Unary Operators
// num2 = num2 + 1
// num2++
// num2--
// ++num2
// --num2

// num2 = num2 + 10
// num2+=10
// num2-=10
// num2*=10
num2/=10
console.log(num2);


//strings
let name1 = "Kanwarpal"
let name2 = "Singh"
let name3 = name1+" "+name2  //concatination of string
// console.log("Kanwarpal"+" "+"Singh");
console.log(name1,name2);
console.log(name3);

console.log(name1.length);
console.log(name1[0]);
console.log(name3.length);
console.log(name3[9]);

