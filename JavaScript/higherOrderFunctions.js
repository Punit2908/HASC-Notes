// Example 1: Using map()
const numbers = [1, 2, 3, 4];
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers); // Output: [2, 4, 6, 8]

// Example 2: Using filter()
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example 3: Using reduce()
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // Output: 10

// Example 4: Using forEach()
const numbers = [1, 2, 3, 4];
numbers.forEach(number => console.log(number));

// Example 5: Using find()
const numbers = [1, 2, 3, 4];
const evenNumber = numbers.find(number => number % 2 === 0);
console.log(evenNumber); // Output: 2

// Example 6: Using some()
const numbers = [1, 2, 3, 4];
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true



// Think of it like this: A higher-order function is a function that works with other functions.

// Just like you can:

// Pass a number to a function

// Pass a string to a function

// Pass a boolean to a function

// You can also pass a function to another function!

// Or, a function can return another function like it's returning a number or string.

