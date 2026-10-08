// reverse a string
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// reverse a number
function reverseNumber(num) {
    let reversedNumber = 0;
    while (num > 0) {
        reversedNumber = reversedNumber * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNumber;
}

// find the sum of all the digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Check if an array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Reverse of an array
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// second method to reverse an array
function reverseArray2(arr) {
    let j = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}

// LCM of two numbers
function lcm(num1, num2) {
    return Math.abs(num1 * num2) / gcd(num1, num2);
}

//largest common prefix in strings

function largestCommonPrefix(array) {
    let i = 0;
    let ans = ""
    let size = [] //optional
    array.forEach(el => {
        size.push(el.length)
    }) //optional
    let min = Math.min(...size) //optional
    let word = array[0]
    while (i < min) { //while(i<word.length){
        let ch = word[i]
        for (let j = 1; j < array.length; j++) {
            if (array[j][i] != ch) {
                return ans
            }
        }
        ans += ch
        i++
    }
    return ans
}
// console.log(largestCommonPrefix(["Shubham","Sharman","Shreya"]))
//how to calculate diffrence in characters
function isomorphicString(s, t) {
    //your code goes here
    if (s.length != t.length) {
        return false
    }
    let diff = s.charCodeAt(0) - t.charCodeAt(0)
    // console.log(diff)
    for (let i = 1; i < s.length; i++) {
        if (s.charCodeAt(i) - t.charCodeAt(i) != diff) {
            return false
        }
    }
    return true;
}

// console.log(isomorphicString('add','ehh'))

//Rotate a string by k to left

function rotateString(s,k) {
    let ans = ""
    for(let i=s.length-k;i<s.length;i++){
        // console.log(s[i])
        ans+=s[i]
        // console.log(ans)
    }
    for(let i=0;i<s.length-k;i++){
        // console.log(s[i])
        ans+=s[i]
        // console.log(ans)
    }
    return ans
}
console.log(rotateString("VANSHIKA",2))