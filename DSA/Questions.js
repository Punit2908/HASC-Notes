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

