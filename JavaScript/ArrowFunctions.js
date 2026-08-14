//arrow functions

const a = ()=> {
    console.log("Hello I am an arrow function");
}

a();

let str = "Hello I am a string"
for(kuchbhi of str){
    console.log(kuchbhi);
}
//array , string kuch bhi likho or of lagao
const obj = {
    name:"Vinit",
    age:20,
    city:"Kaithal"
}
console.log(obj.name);

//obj ke case me in lagega
for(key in obj){
    console.log(key,obj[key]);
}

//Array methods
let arr = [2,3,4,5,6,7,8]

let newarr = arr.forEach((el)=>{console.log(el);
});
let newarr1 = arr.map((el)=>{return el*4;
})
arr.filter((el)=>{console.log(el>5);
})
console.log(newarr,newarr1);

let names = ["Vinit","Nisha","Tammana","Rashi","Punit","Kavya"]
names.filter(el=>{console.log(el == "Vinit");
 })

let result = arr.reduce((res,el)=>{return res*=el},1)
console.log(result);

const result2 = arr.some((el)=>{return el>8})
console.log(result2);

const result3 = arr.every((el)=>{return el>3})
console.log(result3);

// let myopr = 2
// function myoprPrint(){
//     console.log(myopr);
    
// }
// myoprPrint()
