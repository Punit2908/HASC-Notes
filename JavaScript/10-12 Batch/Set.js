let set1  = new Set()

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
set1.add(5)
set1.add(6)

console.log(set1)

console.log(set1.size)
//delete
set1.delete(3)
console.log(set1)

let arr = [1,2,3,1,2,3,4,5,2,3,4]
// let set2 = new Set(arr)
// console.log(set2)

// //set to array

// let arr2 = [...set1]
// console.log(arr2)

arr = [...new Set(arr)]
console.log(arr)

set1.clear()
console.log(set1)

let str = "1+3*4/2"
console.log(eval(str))