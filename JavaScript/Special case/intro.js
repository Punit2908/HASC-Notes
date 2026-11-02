//data types - primitive and non primitives

// let a = 10; //num
// let name = "Subham";  //string
// let str = `Hello World ${name}`;
// console.log(str);
// let bool = false;

// let cond = (4+3)/2>3;
// console.log(cond);

// let b = null;
// let c;
// console.log(c);

// let d = 0/0;
// console.log(d);

// let e = 1/0
// console.log(e);


//strings 

// let str = "Jashan"
// console.log(name[6])

// console.log(name.length)

//methods in strings

// console.log(str.toUpperCase())
// let str2 = str.toUpperCase()
// console.log(str2)
// console.log(str.toLowerCase())
// console.log(str.indexOf("j"))
// console.log(str.charCodeAt(0))
// console.log("j">'J')
// console.log(str.charAt(5))
// console.log(str.concat(" , How are you?"))
// console.log(str + "How are you?")
// console.log(str.startsWith("Jan"))
// console.log(str.endsWith("n"))
// console.log(str.includes("p"))
// console.log(str.lastIndexOf("a"))
// console.log(str.replace("J", "T"))
// console.log(str.replaceAll("a", ""))
// console.log(str.trim())
// console.log(str.slice(2,4))
// console.log(str.split(""))

// let name = 0/0 + "hello"
// console.log(typeof(name),name)

// booleans
//false 0 true 1  
// let bool = 1>2>1>0;
// console.log(bool);

//comparision operators

// let a = 10
// let b = "10"
// console.log(a === b)

// console.log("a".charCodeAt(0))
// console.log("A".charCodeAt(0))

// let a 
// console.log(a)

// let a = null
// console.log(a)

// let a = 0/0
// console.log(a)

// let a = -1/0
// console.log(a)

// let a = Symbol("a")
// console.log(a)

//Local scope
// {
//   let a = 10 //Local scope
//   console.log(a)
// }
// console.log(a)

//Global scope
// let a = 10 //Global scope
// {
//   let a = 9 //Local scope
//   console.log(a)
// }
// console.log(a)

//Math js
// console.log(Math.PI)
// Math.PI = 10
// console.log(Math.PI)

// console.log(Math.floor(-3.1)) // floor me lower number
// console.log(Math.ceil(-43.4)) // ceil me higher number
// console.log(Math.round(-3.6)) // round me number depend krta hai .5 se jyada to higher number else lower number

// console.log(Math.random(Math.random()*5)+25)
//37-43
// console.log(Math.floor(Math.random()*7)+37)
// console.log(Math.ceil(Math.random()*7)+36)
// console.log(Math.round(Math.random()*6)+37)

// -7 to -13

// console.log(Math.floor(Math.random()*7)-13)
// console.log(Math.ceil(Math.random()*7)-12)
// console.log(Math.round(Math.random()*6)-13)

// console.log(Math.max(1,2,4,5,221,134))
// console.log(Math.min(1,2,4,5,221,134))

// Objects

// let num = 17
// let str = `Hello I am batman I am ${num} years old`
// console.log(str)

//Key value pairs
// let data = {
//   name: "Batman",
//   age: 23,
//   // address: "Kaithal"
//   address: {
//     city: "Gotham",
//     country: "USA",
//     pincode: 101010
//   }
// }

// console.log(data)
// console.log(data["name"])
// console.log(data.name)
// console.log(data["age"])
// console.log(data.age)
// console.log(data["address"])
// console.log(data.address)

// console.log(data.address.city)

// arrays
const arr = [1,2,3,4,"Batman", true, 3>5]
// console.log(arr[0])
// for (let index = 0; index < arr.length; index++) {
//   // const element = array[index];
//   console.log(arr[index])  
// }

// arr[1] = "Helo"
// console.log(arr)
// const arr2 = [1,2,3,4,"Batman", true, 3>5]
// const arr3 = arr // call by refrence  - deep copy
// array holds instance of data not the actual data

// let i = 10
// let j = i  //call by value - shallow copy
// j++
// console.log(i,j)
// arr3[3] = "Jashan"
// console.log(arr, arr3)
// console.log(arr == arr2)
// console.log(arr == arr3)

arr.shift()
console.log(arr)

arr.unshift("Hello bhai")
console.log(arr)

arr.pop()
console.log(arr)

arr.push(true)
console.log(arr)