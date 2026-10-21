//swap

const swap = (num1, num2) => {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return num1, num2;
};

//count all digits in the number
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
// console.log(countDigits(13435))

//count of odd digits in the number
function countOdd(num) {
  let count = 0;
  while (num > 0) {
    let rem = num % 10;
    if (rem % 2 != 0) count++;
    num = Math.floor(num / 10);
  }
  return count;
}
// console.log(countOdd(1343581))

//Reverse a number
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
// console.log(reverseNumber(123456789))

//palindrome number
function isPalindrome(num) {
  let rev = reverseNumber(num);
  if (rev == num) return true;
  else return false;
}
// console.log(isPalindrome(1212))

//check palindrom string
function isPalindromeString(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) return false;
    j--;
  }
  return true;
}
// console.log(isPalindromeString("radara"))

//maximun number in number
function max(num) {
  let max = 0;
  while (num > 0) {
    let rem = num % 10;
    if (rem > max) max = rem;
    num = Math.floor(num / 10);
  }
  return max;
}
// console.log(max(1324975))
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
    reversedNumber = reversedNumber * 10 + (num % 10);
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
  let ans = "";
  let size = []; //optional
  array.forEach((el) => {
    size.push(el.length);
  }); //optional
  let min = Math.min(...size); //optional
  let word = array[0];
  while (i < min) {
    //while(i<word.length){
    let ch = word[i];
    for (let j = 1; j < array.length; j++) {
      if (array[j][i] != ch) {
        return ans;
      }
    }
    ans += ch;
    i++;
  }
  return ans;
}
// console.log(largestCommonPrefix(["Shubham","Sharman","Shreya"]))
//how to calculate diffrence in characters
function isomorphicString(s, t) {
  //your code goes here
  if (s.length != t.length) {
    return false;
  }
  let diff = s.charCodeAt(0) - t.charCodeAt(0);
  // console.log(diff)
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - t.charCodeAt(i) != diff) {
      return false;
    }
  }
  return true;
}

// console.log(isomorphicString('add','ehh'))

//Rotate a string by k to left

function rotateString(s, k) {
  let ans = "";
  for (let i = s.length - k; i < s.length; i++) {
    // console.log(s[i])
    ans += s[i];
    // console.log(ans)
  }
  for (let i = 0; i < s.length - k; i++) {
    // console.log(s[i])
    ans += s[i];
    // console.log(ans)
  }
  return ans;
}
// console.log(rotateString("VANSHIKA",2))

//Anagram Strings

function AnaragramString(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

// console.log(AnaragramString("listen","silent"))

//linear search

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  console.log("not found");
}

// console.log(linearSearch([1,2,3,4,5,6,7,8,9,10],5))

//Maximum consicutive ones
function consicutiveOnes(arr) {
  let count = 0;
  let max = 0;
  arr.forEach((el) => {
    if (el === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  });
  return max;
}
// console.log(consicutiveOnes([1,1,3,4,5,1,1,1,1,1,45,2,1]))

//Move zeros to end
function MoveZeroes(arr) {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (j >= arr.length) {
      return arr;
    }
    if (arr[i] == 0) {
      if (arr[j] != 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else {
        i--;
      }
    }
    j++;
  }
  return arr;
}
// console.log(MoveZeroes([1,2,0,4,0,0,7,8,0,10]))

//Remove duplicates from sorted array

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}
// console.log(removeDuplicates([1,2,2,5,5,6,7,7,7,10]))

//Majority Element
function majorityElement(arr) {
  // let count = {}
  // arr.forEach(el=>{
  //     if(count[el]){
  //         count[el]++
  //     }else{
  //         count[el] = 1
  //     }
  // })
  // let max = 0
  // for(let key in count){
  //     if(count[key]>max){
  //         max = count[key]
  //     }
  // }
  // let targetValue = max
  // const maxvalue = Object.keys(count).filter(key => count[key] === targetValue)
  // if(max > arr.length/2){
  //     return maxvalue[0]
  // }else{
  //     return 0
  // }
  let curMaj = null;
  let majCnt = 0;

  for (const n of arr) {
    if (curMaj === null || majCnt === 0) {
      curMaj = n;
    }

    if (n === curMaj) {
      majCnt++;
    } else {
      majCnt--;
    }
  }

  return curMaj;
}
// console.log(majorityElement([1,1,1,1,2,3,4,5,6]))
// Leaders in an Array
function leaders(arr) {
  // let ans = []
  // for(let i=0; i<arr.length; i++){
  //     let j=i+1;
  //     while(j<arr.length){
  //         // console.log(arr[j])
  //         if(arr[j]>arr[i]){
  //             break;
  //         }
  //         j++;
  //     }
  //     if(j==arr.length){
  //         ans.push(arr[i]);
  //     }
  //     j=i+1;
  // }
  // return ans
  let ans = [arr[arr.length - 1]];
  let max = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }
  return ans.reverse();
}
// console.log(leaders([1,7,5,2,3,4,6]))

//Rearrange the array in alternating positive and negative items

function rearrangeArray(arr) {
  // Method 1
  let pos = [];
  let neg = [];
  arr.forEach((el) => {
    if (el > 0) {
      pos.push(el);
    } else {
      neg.push(el);
    }
  });
  arr = [];
  for (let i = 0; i < pos.length; i++) {
    arr.push(pos[i]);
    arr.push(neg[i]);
  }
  return arr;
  // Method 2
}
// console.log(rearrangeArray([1,2,3,4,5,-1,-2,-3,-4,-5]))

//Print the array in spiral form
function spiralArray(arr) {
  let row = arr.length;
  let col = arr[0].length;

  let startRow = 0;
  let startCol = 0;
  let endRow = row - 1;
  let endCol = col - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      console.log(arr[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      console.log(arr[i][endCol]);
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      console.log(arr[endRow][i]);
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      console.log(arr[i][startCol]);
    }
    startCol++;
  }
}
// spiralArray([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]])

//isomorphic string
function isIsomorphic(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let diff = s.charCodeAt(0) - t.charCodeAt(0);
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - t.charCodeAt(i) != diff) {
      return false;
    }
  }
  return true;
}
// console.log(isIsomorphic("dog","fqi"))

//Frequency sort

function frequencySort(str) {
  let arr = str.split("");
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }
  arr = [];
  arr = Object.keys(freq).sort(
    (a, b) => freq[b] - freq[a] || a.charCodeAt(0) - b.charCodeAt(0),
  );
  return arr;
}
// console.log(frequencySort("raaajj"))

// 3 sum
function threeSum(nums) {
  //   let ans = [];
  //   let i = 0,
  //     j = 0,
  //     k = 0;
  //     nums = nums.sort()
  //   for (i = 0; i < nums.length - 2; i++) {
  //     if (i > 0 && nums[i] === nums[i - 1]) continue;
  //     for (j = i + 1; j < nums.length - 1; j++) {
  //       if (j > i + 1 && nums[j] === nums[j - 1]) continue;
  //       for (k = j + 1; k < nums.length; k++) {
  //         if (k > j + 1 && nums[k] === nums[k - 1]) continue;
  //         if ((nums[i] + nums[j] + nums[k] === 0)) {
  //             ans.push([nums[i], nums[j], nums[k]]);

  //           break;
  //         }
  //       }
  //     }
  //   }

  //   return ans;

  //Method 2
  let ans = [];
  let i = 0;
  let left = i + 1,
    right = nums.length - 1;
  nums = nums.sort();
  while (i < nums.length - 2) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    while (left < right) {
      if (
        nums[left] + nums[right] == -nums[i] &&
        !ans.some(
          (triplet) =>
            triplet[0] === nums[i] &&
            triplet[1] === nums[left] &&
            triplet[2] === nums[right],
        )
      ) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (nums[left] + nums[right] > -nums[i]) {
        right--;
      } else {
        left++;
      }
    }
    i++;
    left = i + 1;
    right = nums.length - 1;
  }

  return ans;
}
// console.log(threeSum([1,2,0,1,0,0,0,0]));

// Sort an array if 0,1 and 2s

function sortThree(arr) {
  let start = 0,
    left = 0,
    right = arr.length - 1;

  while (start <= right) {
    if (arr[start] === 0) {
      let temp = arr[left];
      arr[left] = arr[start];
      arr[start] = temp;
      start++;
      left++;
    } else if (arr[start] === 1) {
      start++;
    } else if (arr[start] === 2) {
      let temp = arr[right];
      arr[right] = arr[start];
      arr[start] = temp;
      right--;
    }
  }
  return arr;
}

// console.log(sortThree([1, 1, 0, 0, 2, 1]));

//maximum subarray sum

function maxSubArraySum(arr) {
  // let max = arr.reduce((acc,el)=>{
  //   return acc + el
  // },0)

  // for(let i=0; i<arr.length; i++){
  //   for(let j=i; j<arr.length; j++){
  //     let sum = arr.slice(i,j+1).reduce((acc,el)=>{
  //       return acc + el
  //     },0)
  //     max = Math.max(max, sum)
  //   }
  // }
  // return max
  //Kadane's Algorithm
  let sum = arr[0], max = arr[0];
  // console.log(arr.reduce((acc,el)=>{return acc+el},0))
  for(let i=1; i<arr.length; i++){
    sum = Math.max(arr[i], sum+arr[i])
    max = Math.max(max, sum)
  }
  return max

  //Mehtod 3
  // let max = nums[0]
  //   let sum = nums[0]
  //   for (let i = 1; i < nums.length; i++) {
  //       if (nums[i] < nums[i] + sum) {
  //           sum = nums[i] + sum
  //       }
  //       else {
  //           sum = nums[i] 
  //       }
  //       if (max < sum) {
  //           max = sum
  //       }
  //   }
  //   return max;
}
console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))