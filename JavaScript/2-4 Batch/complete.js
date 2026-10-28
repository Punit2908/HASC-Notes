// if-else statements
// if(false){
//     console.log("Khushi nhi padhti")
// }else{
//     console.log("Khushi Bilkul nhi padhti")
// }


// let a = 17

// if(a>18){
//     console.log("You can vote khushi")
// }else{
//     console.log("You can't vote khushi")
// }

// let number = 9;
// if(number>40){
//     if(number>70 && number<80){
//         console.log("You scored good")
//     }
//     if(number>80 && number<90){
//         console.log("You scored very good")
//     }
//     if(number>=90){
//         console.log("You scored excellent")
//     }
// }else{
//     console.log("Padh liya kr")
// }

// if(number>40&&number<70){
//     console.log("You passed")
// }else if(number>70 && number<80){
//     console.log("You scored good")
// }else if(number>80 && number<90){
//     console.log("You scored very good")
// }else if(number>=90){
//     console.log("You scored excellent")
// }else{
//     console.log("Padh liya kr")
// }


// let bool = 2>1 && 4>2 && 5>3 && 4>6
// console.log(bool)

// let bool2 = 2>1 || 4>2 || 5>3 || 4>6 
// console.log(bool2)

// let bool3 = 2>1 || 3>9 && 4>2 || 5>3 || 4>6 && ""
// console.log(bool3)


// truthy and falsy value
// falsy = false, "", 0, undefined, null, NaN

//switches
// let a = 10
// switch(a){
//     case 8: console.log("Komal");
//             break
//     case 10: console.log("khushi");
//             break
//     case 9: console.log("Sonali");
//             break
//     default: console.log("Dono padh liya kr");
// }

// let day = "Monday"
// switch(day){
//     case "Monday": console.log("Monday");
//     break
//     case "Tuesday": console.log("Tuesday");
//     break
//     case "Wednesday": console.log("Wednesday");
//     break
//     case "Thursday": console.log("Thursday");   
//     break
//     case "Friday": console.log("Friday");
//     break
//     case "Saturday": console.log("Saturday");
//     break
//     case "Sunday": console.log("Sunday");
//     break
//     default: console.log("Dono padh liya kr");
// }

// let num = 12
// if(num%2==0){
//   console.log("Even")
// }else{
//   console.log("Odd")
// }

// if(num%3 == 0){
//   console.log("Divisible by 3");
// }
// else{
//   console.log("Not divisible")
// }

// if(num%2==0 || num%3==0 || num%5==0 || num%7==0 || num%11==0){
//   console.log("Not prime")
// }else{
//   console.log("Prime")
// }
// let i = 1
// while(i<=10){
//   console.log(11*i)
//   i++
// }

//for loops
// let str = "Devanshu"
// for(let i=0; i<str.length ; i++){
//   console.log(str[i])
// }

// dowhile loops

// let i=1
// do{
//   console.log(11*i)
//   i++
// }while(i<1)



//Objects

// let obj = {
//   name: "Devanshu",
//   age: 17,
// }

// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)

// let obj2 = {
//   name: "Devanshu",
//   age: 17,
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//     pincode: 110001,
//   }
// }
// console.log(obj2)
// console.log(obj2.name)
// console.log(obj2.address)
// console.log(obj2.address.city)

// let obj3 = {
//   names: ["Devanshu", "Sonali", "Khushi"],
//   ages: [17, 18, 19],
// }

// console.log(obj3)
// console.log(obj3.names)
// console.log(obj3.ages)


//Arrays

// let arr = [1,2,3,4,5,"Hello", true,1]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[5])

// for(let i = 0; i<arr.length; i++){
//   console.log(arr[i])
// }

// arr.push("Devanshu")
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift("Devanshu")
// console.log(arr)

// console.log(arr.length)
// console.log(arr.includes("Devanshu"))

// console.log(arr.indexOf("hello"))
// console.log(arr.lastIndexOf(1))


//Functions 
// function sum (a,b){
//   // console.log(a+b)
//   return a+b
// }

// console.log(sum(21,22))
// let result = sum(30,21)
// console.log(result)
// sum(34,56)

// const sum = (a,b,c,d) =>{
//   return a+b+c+d
// }

// console.log(sum(21,22,21,23))

//higher order functions

// function greet(name){
//   console.log("Hello how are you?",name)
// }

// function greetme(name){
//   greet(name)
// }

// greetme("Devanshu")

//iffe function
// (()=>{
//   console.log("Hello how are you?")
// })()

// function questions
// write a function which takes 4 numbers and returns the maxium number
// write a function which takes 4 numbers and returns the minimum number
// write a function which takes 4 numbers and returns the average number