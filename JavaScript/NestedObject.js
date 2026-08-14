//object

const obj = {
  name: "Rahul",
  age: 20,
  city: "london",
  address: {
    street: "abc",
    pincode: 123456,
    city: "delhi",
  },
  hobbies: ["cricket", "football", "chess"],
  isMarried: false,
  family: {
  
}
}

const multidimArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(multidimArr[1][2])
console.log(obj.address.pincode)
// console.log(obj[address][pincode]) box banake object log nhi chala skte

console.error("There is an error in code")