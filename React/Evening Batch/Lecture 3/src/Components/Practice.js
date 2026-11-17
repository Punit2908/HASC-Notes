// const obj = {
//   name: "Batman",
//   age: 23,
//   address: {
//     city: "Gotham",
//     state: "NY"
//   }
// }

// const { name, age, address} = obj

// console.log(name)
// console.log(age)
// console.log(address.city)
// console.log(address.state)

//Promises
// console.log("first");
// const myPromise = new Promise((resolve, reject) => {
//   const data = true;
//   if (data) {
//     resolve("Data fetched successfully");
//   } else {
//     reject("Failed to fetch data");
//   }
// });

// myPromise.then((res) => console.log(res)).catch((e) => console.log(e, 2));
// console.log("Second");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data)=>console.log(data))
//   .catch((e) => console.log(e));

//Error handling
// try{} catch() finally{}

// try{
//   let a = 10
//   console.log(a)
//   // console.log(b)
// }catch(e){
//   console.log("Your code has error",e)
// }finally{
//   console.log("This will always run")
// }

// console.log("Hello")

// login->message page-> id -> message-> React
// function login(){
//  return message page(()=>{
//    return id -> message -> React
// })
// }

// asyncs functions
// async function getData(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await res.json()
//   console.log(data)
// }

// getData()

const obj = {
  name: "Batman",
  age: 23,
  city: "Gotham",
  state: "NY",
};
const {name, age, city, state} = obj
console.log(name)
console.log(age)
console.log(city)
console.log(state)