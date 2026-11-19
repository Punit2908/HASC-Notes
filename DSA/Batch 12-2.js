//Basic dsa -> data structure and algorithms
// Array, sets, maps, linked list, stacks, queues, trees, graphs, vectors
//time complexity, space complexity
// time complexity -> loops and functions (recursion) -> O(1), O(log n) ,O(n), O(n^2), O(n^3), O(2^n), O(n!)

// space complexity -> O(1), O(n), O(n^2), O(n^3), O(2^n), O(n!)

// sum of array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//Time complexity -> O(n)
//Space complexity -> O(1)
// console.log(sumOfArray([1,2,3,4,5,6]))

// maximun in array
function maxInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
//Time complexity -> O(n)
//Space complexity -> O(1)
// console.log(maxInArray([1,2,8,4,5,6]))

//Minimun in array
function minInArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//Time complexity -> O(n)
//Space complexity -> O(1)
// console.log(minInArray([1,2,8,4,5,6]))

// sum of all even numbers in an array
function sumOfEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // sum += arr[i]
      sum = sum + arr[i];
    }
  }
  return sum;
}
//Time complexity -> O(n)
//Space complexity -> O(1)
// console.log(sumOfEven([1, 2, 3, 4, 5, 6]));

// sum of all odd numbers in an array
function sumOfOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      // sum += arr[i]
      sum = sum + arr[i];
    }
  }
  return sum;
}
//Time complexity -> O(n)
//Space complexity -> O(1)
// console.log(sumOfOdd([1, 2, 3, 4, 5, 6]));

// Reverse an array
function reverseArray(arr){
  let j = arr.length-1;
  for(let i=0; i<j; i++){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j--;
  }
  return arr
}
//Time complexity -> O(n/2)
//Space complexity -> O(1)
// console.log(reverseArray([1,2,3,4,5,6]))
