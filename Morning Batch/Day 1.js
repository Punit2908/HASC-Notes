// 6>7>1>3>0 False

//loops

//while, dowhile, for, for each
// let i = 10  //global scope
// while(i>5){
//     console.log(10)
//     i--
// }

// do{
//    console.log(10)
//     i-- 
// }while(i>15)
//local scope
// for(let i=0; i<10; i++){
//     console.log(i)
// }



//Maths in js

//%
// console.log(10%11)
// let a = 10
// let b = a++
// console.log(++a)

// a*=10
// console.log(Math.E)
// console.log(Math.random()*10)
// console.log(Math.floor(1.9))
// console.log(Math.ceil(1.2))
// console.log(Math.round(1.5))

// console.log(Math.floor(Math.random()*8999)+1000)

// conditional statements
// let day = 'monday'
// switch(day){
//     case 'Monday': console.log("Eat breakfast")
//         break;
//     case 'Tuesday': console.log("Eat lunch")
//         break;
//     case 'Wednesday': console.log("Eat dinner")
//         break;
//     default: console.log("Hllo")
// }

// let obj = {
//     name: 'Batman',
//     age: 30,
//     job: 'Code Runner',
//     hobbies: ['Batman', 'Superman', 'Wonder Woman'],
//     address: {
//         street: '123 Fake Street',
//         city: 'Gotham',
//         state: 'New York',
//         zip: '12345'
//     }
// }

// console.log(obj.address.state)

// obj.lastName = 'Wayne'
// obj.age = 21
// console.log(obj)

// // arrays
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  //refrence

// let arr2 = arr  //copy by refrence

// console.log(arr==arr2) 
// arr.push(11)
// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)
// arr.shift()
// console.log(arr)

//functions

// add(true, 2)

// function add(a, b){
//     console.log("Void Functions")
//     return a+b
// }
// console.log(add(true, '2'))

//higher order functions
// function greet(){
//     console.log("Greetings")
// }

// function greet2(name){
//     console.log(name)
//     greet()
// }

// greet2('Batman')

// Array methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// console.log(arr.includes(3))
// console.log(arr.indexOf(19))
// console.log(arr.splice(0,2,11,12,13,14))
// console.log(arr)

// let result = arr.forEach(el=>{
//     console.log(el)
//     return el*2
// })
// console.log(result)

// console.log(arr.map(el=>{
//     return el*2
// }))
// let names = ['Batman', 'Superman', 'Wonder Woman', 'Green Lantern', 'Flash', 'Aquaman', 'Robin', 'Batgirl', 'Catwoman', 'Wonder Woman']
// console.log(names.filter(el=>{
//     return el != 'Batman'
// }))

// console.log(arr.reduce((sum,el)=>{
//     return sum+=el
// }))

// console.log(arr.some(el=>{
//     return el>15
// }))

// console.log(arr.every(el=>{
//     return el>10
// }))


// let str = {
//     0: 'H',
//     1: 'e',
//     2: 'l',
//     3: 'l',
//     4: 'o',
// }
// let arr = {...str}
// console.log(arr)

// let obj = {
//     name: 'Batman',
//     age: 30,
//     job: 'Code Runner',
//     hobbies: ['Batman', 'Superman', 'Wonder Woman'],
//     address: {
//         street: '123 Fake Street',
//         city: 'Gotham',
//         state: 'New York',
//         zip: '12345'
//     }
// }
// const {name, age, job, hobbies, address} = obj
// console.log(name)
// console.log(address.state)
// console.log(age)

