let arr = [1,2,3,4,5,6,7,8,9,10]

let arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr==arr2)  //false
//array kabhi value ke basis pe compare nahi hota hai, ye reference ke basis pe compare hota hai
//Refrence or address store krta

let arr3 = arr
console.log(arr == arr3)  //true
console.log(3 == '3') //true
// == operator value ke basis pe compare krta hai, type ko ignore krta hai
console.log(3 === '3') //false
// === operator value ke basis pe compare krta hai, type ko bhi consider krta hai
//array methods

console.log(arr.length)
let arr4 = [...arr]
arr[2] = 200
console.log(arr)
//spread operator
console.log(arr4)
let str = "Hello World"
let arr5 = [...str]
console.log(arr5)

arr.push("Hello") //end me add krta hai
console.log(arr)
arr.unshift("Sharman") //start me add krta hai
console.log(arr)

arr.pop() //end se remove krta hai
console.log(arr)
arr.shift() //start se remove krta hai
console.log(arr)