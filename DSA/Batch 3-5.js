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

//strings questions

//largest odd number in a string
//"12345597512"
function largestOdd(str){
    let num = 0
    let max = 0
    for(let i=0; i<str.length; i++){
        if(Number(str[i])%2==1){
            num = Number(str[i])
            max = Math.max(num,max)
        }
    }
    return max
}
// console.log(largestOdd("1873451789123"))

//largest common prefix
function largestCommonPrefix(arr){
    let ans = ""
    // let temp = []
    // temp = arr.map(el=>el.length)
    // let min = Math.min(...temp)

    let i=0
    let word = arr[0]
    while(i<arr[0].length){
        let letter = word[i]
        for(let j=1; j<arr.length; j++){
            if(arr[j][i]!=letter){
                return ans
            }
        }
        ans+=letter
        i++
    }
    return ans 
}
// console.log(largestCommonPrefix(["Batman","Bat","Bahadur","B"]))

//isomorphic strings
function isIsomorphic(str1,str2){
    if(str1.length!=str2.length) return false
    let dif = str1.charCodeAt(0)-str2.charCodeAt(0)
    for(let i=1; i<str1.length; i++){
        if(str1.charCodeAt(i)-str2.charCodeAt(i)!=dif) return false
    }
    return true
}
// console.log(isIsomorphic('eat','iex'))

//rotate string
function rotateStr(str,k){
    let ans = ""
    for(let i=str.length-k; i<str.length; i++){
        console.log(str[i])
        ans+=str[i]
    }
    for(let i=0; i<=k; i++){
        ans+=str[i]
    }
    return ans
}
// console.log(rotateStr("Anmol",2))
//anagrams

function anagrams(str1,str2){
    if(str1.length!=str2.length) return false

    str1 = str1.split("").sort()
    str2 = str2.split("").sort()
    for(let i=0; i<str1.length; i++){
        if(str1[i]!=str2[i]) return false
    }
    return true
}
// console.log(anagrams("dog","goD"))

//frequecy sort
function frequencySort(str){
    let arr = str.split("")
    let freq = {}
    for(let i=0; i<arr.length; i++){
        if(!freq[arr[i]]){
            freq[arr[i]] = 1
        }
        else{
            freq[arr[i]]++
        }
    }
    arr = []
    arr = Object.keys(freq).sort((a,b)=>freq[b]-freq[a] || a.charCodeAt(0)-b.charCodeAt(0))
    return arr
}
console.log(frequencySort("raaajj"))