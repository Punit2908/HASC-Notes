const obj = {
  name: "Batman",
  age: 23,
  address: {
    city: "Gotham",
    state: "NY"
  }
}

const { name, age, address} = obj

console.log(name)
console.log(age)
console.log(address.city)
console.log(address.state)