function recursion(num){
  if(num===0||num===1){
    return 1;
  }

  return num*recursion(num-1)
}
// console.log(recursion(10))

//sum of first n natural numbers

function sum(num){
  if(num === 0){
    return 0;
  }

  return num + sum(num-1)
}
// console.log(sum(10))

//sum of an array

function sumArray(arr){
  if(arr.length == 0) return 0;
  return arr[0] + sumArray(arr.slice(1))
}
// console.log(sumArray([1,2,3,4,5,6,7]))

//reverse a string

function revStr(str){
  if(str.length === 0) return "";

  return revStr(str.slice(1)) + str[0]
}
// console.log(revStr("Batman"))

//fabonacci sequence

function fabonacci(num){
  if(num === 0) return 0;
  if(num === 1) return 1;

  return fabonacci(num-1) + fabonacci(num-2)
}

// console.log(fabonacci(5))

//print first n fibonacci numbers with recursion
function printFibonacci(num){
  if(num === 0) return;
  if(num === 1){
    console.log(fabonacci(0));
    return;
  }
  if(num === 2){
    console.log(fabonacci(0));
    console.log(fabonacci(1));
    return;
  }
  printFibonacci(num-1);
  console.log(fabonacci(num-1));
}

printFibonacci(6)
