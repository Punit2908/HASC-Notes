// arr me multiple value dal skte hai
let arr = [1,2,3,4,5]
//         0 1 2 3 4
console.log('Array', arr);

let str = "Hello"
let str2 = "Hello"
console.log(str[4])

console.log('arr ka 2nd index', arr[2]);

let arr2 = [1,2,"Khushi","Vandana"," ",true,3>5]
console.log('Array 2',arr2);

let a = 10;
let b = 10;
// = assignment operator  mtlb hum kisi ko kuch value de rhe hai 
// == comparison operator  check krte hai ki dono ki value same hai ya alag hai
// comparison operators hame boolean return krte hai yani ki true ya false
console.log(a==b);
console.log(str==str2);

let num = 10
let str3 = "10"
//num and string same nhi hai but == hame same dikhayega kyuki vo sirf value check krta hai
console.log(num == str3); //"10" == 10

//typecheck krne ke liye hum === ka istemal krte hai
console.log(num === str3); 

let arr3 = [1,2,3,4,5]
let arr4 = arr3  //arr3 ka refrence copy hoke arr4 ko mil jayega
console.log(arr == arr3);
//answer ayega false

//array kbhi bhi value store nhi krta blki refrence store krta hai

console.log(arr === arr3); //false

console.log(arr3 == arr4);
//true milega kyuki hmne arr4 ke andar arr3 wala same refrence copy kr diya

console.log(arr4 === arr3);//true
//str imutable
//array mutable
let arr5 = [1,3,5,7]

arr5.push(9)
arr5.push(9)
console.log(arr5);
arr5.pop()
console.log(arr5);
arr5.unshift(0)
console.log(arr5);

arr5.shift()// first element remove ho jayega

//Objects