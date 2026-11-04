// const obj = {
//   name: "Batman",
//   age: 23,
//   city: "Gotham"
// }

// const {name , age, city} = obj
// console.log(name)
// console.log(age)
// console.log(city)

// const name = "Batman"
// const arr = [...name]
// console.log(arr)

let arr = [1,2,3,4,5,6,7,8,9,10]
let names = ["Devanshu","Sonali","Khushi"]
console.log(arr.filter((el,index,array)=>{
  return el >= 5
}))

console.log(names.filter(el=>{
  return el != "Khushi"
}))