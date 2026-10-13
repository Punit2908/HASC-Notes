//factorial of a number

function factorial(num){
    if(num==0 || num==1){
        return 1;
    }
    let fact = 1
    for(let i=2; i<=num; i++){
        fact*=i;
    }
    return fact;
}
// console.log(factorial(100))

//reverse a string

function reverse(a){
    let str = a.split("")
    let j = str.length-1
    for(let i=0; i<str.length/2; i++){
        if(i>j) break
        // console.log(str[i],str[j])
        let tem = str[i]
        str[i] = str[j]
        str[j] = tem

        j--
    }


    return str.join("")
}
// console.log(reverse("hello"))

//Armstrong Number
function isArmstrong(num){
    let digits = num.toString().length
    let sum = 0
    let temp = num
    while(temp>0){
        let rem = temp%10
        sum = sum + rem**digits;
        temp = Math.floor(temp/10)
    }
    if(sum==num) return true
    else return false
}
// console.log(isArmstrong(154))

//check if a number is prime
function isPrime(num){
    if(num==1 || num==0) return false
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0) return false
    }
    return true
}
// console.log(isPrime(102))

//Count primes till a number
function countPrimes(num){
    let count = 0
    for(let i=2; i<=num; i++){
        if(isPrime(i)) {
            console.log(i)
            count++
        }
    }
    return count
}
// console.log(countPrimes(100))

function gcd(a,b){
    while(b>0){
        let temp = b
        b = a%b
        a = temp
    }
    return a
}
// console.log(gcd(12,15))

//factors of a number
function factors(num){
    for(let i=2; i<=num; i++){
        if(num%i===0){
            console.log(i)
        }
    }
}
// factors(24)

// sum of an array

function sum(arr){
    let sum = 0
    // for(let i=0; i<arr.length; i++){
    //     sum+=arr[i]
    // }
    // arr.array.forEach(element => {
    //     sum+=element
    // });
    // return sum
    return arr.reduce((acc,el)=>acc+el,0)
}

// console.log(sum([1,2,3,4,5]))

//Check if an array is sorted
function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]) return false
    }
    return true
}
// console.log(isSorted([1,2,3,2,5]))

//reverse an array

function reverseArray(arr){
    let j = arr.length-1
    for(let i=0; i<arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }
    return arr
}
// console.log(reverseArray([1,2,3,4,5]))