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

try{
  let a = 10
  console.log(a)
  // console.log(b)
}catch(e){
  console.log("Your code has error",e)
}finally{
  console.log("This will always run")
}

console.log("Hello")