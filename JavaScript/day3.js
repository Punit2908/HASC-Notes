function greet(name,callback){
    console.log("Hello "+name);
    callback();
}

function greet2(){
    console.log("Hello this is function 2");
    
}

greet("Punit",greet2)

setTimeout(()=>{
    console.log("This is a timeout function");
    
},2000)

//callback


// downloadFile(function () {

//     readFile(function () {

//         processFile(function () {

//             uploadFile(function () {

//                 sendNotification(function () {

//                     console.log("Everything completed!");

//                 });

//             });

//         });

//     });

// });

const promise = new Promise((resolve,reject)=>{
    resolve = true;
    if(resolve){
        console.log("Promise resoled successfully");
    }
    else{
        console.log("Promise rejected");
    }
})

function orderPizza() {

    return new Promise((resolve, reject) => {

        let pizzaReady = false;

        if (pizzaReady) {
            resolve("Pizza is ready 🍕");
        } else {
            reject("Pizza is not ready");
        }

    });

}

orderPizza()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//async await

async function sum(a,b) {
    try {
        // const sum = 0
        const sum = await a+b;
        console.log(sum);
    } catch (error) {
        console.log("There was error in sum function ",error); 
    }
    
}
sum()


//call by value

let a = 10;
let b = a;
b = 5
console.log(a,b);

//call by reference

let arr = [1,2,3]
let arr3 = [...arr]
let arr2 = arr
arr2.pop()
console.log(arr,arr2,arr3);

arr3.pop()
arr3.pop()
console.log(arr3,arr);
