//types of datatypes: num, boolean, strings, undefined, null, NaN, Symbol

const num = 10;
// num = 11
console.log(num);
let num2 = 11;
num2 = 12
console.log(num2);
//let const sirf keywords hai jo variable declare krne ke liye use krte hai
let bool = 3>10 //false
console.log(bool);

let str = "    Hello Munish. "
let str2 = "How are you?"
let str3 = str + str2
console.log(str3);
// string ke methods
//Hello Munish. How are you?
//012345678910             25   //indexing 0 se suru hoti hai or length-1 tak end hoti hai
console.log(str3.length);
console.log(str3[0]);
// console.log(str3[26]); undefined dega
console.log(str3[25]);  //?

// console.log(a); //refrence error a is not defined
// let a;
// console.log(a);  undefined dega kyuki value initialize nhi kri

// koi bhi string ka method original string ko change nhi krta. Yeh ek duplicate string banata hai aur usme store krata hai
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3);

console.log(str3.includes("m")); //case sensitive
console.log(str3.includes("Munish"));
console.log(str3.indexOf("H"));  //Jaha phli bar aata hai vha ka index deta hai
console.log(str3.replace("Munish","Punit"));
console.log(str3.replaceAll(" ","I"));

//concat method original string ko change krta hai
console.log(str3.concat(" I have been waiting for you"));
console.log(str3);

console.log(str3.split(""));


