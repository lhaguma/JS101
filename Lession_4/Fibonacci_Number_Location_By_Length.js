// Fibonacci Number Location By Length

/* Q: Write a function that calculates and returns the index of 
the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.) */

// P
// Input: number of digits (length of a number), Output: index of that number
// mental model: there exists a series of number where the number the sum of the previous numbers.
// Given a length, find the first index from that series where the length is equal to the given number
  // Rule:
  // Explicit
  // 1. return index of number where digits is equal to the input number 
  // 2. The first index is 1
  // 3. sequence looks like this: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
  // Implicit
  // 1. input number needs to be grater than 1
  // 2. if there are two consecutive number that match the input length return the index of the first number

// E
// input 1, output 1
// input 2, output 7
// input 3, output 12
// D
// build sequence in an array
// input 1; array [1, 1]
// input 2; array [1, 1, 2, 3, 5, 8, 13]
// input 3; array [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// A
// - declear funciton findFibonacciIndexByLength which takes one variable 'length'
// - if the 'length' is 1n, return index 1n
// - declear array 'arrFib' with two elements [1n, 1n]
// - declear variable 'index' and assign to 1

// - enter into a loop starting at the second index of the arrFib array
  // - append the next element by adding the previous two elements
  // - set the length of the last element of the array to 'index'
  // - exit loop when 'index' greater than or equal to 'length'
// return length of 'arrFib'

// C

function findFibonacciIndexByLength(length) {
  if (length === 1n) return 1n;
  let arrFib = [1n, 1n];
  let index = 1;

  let i = 2;
  while (index < Number(length)) {
    arrFib.push(arrFib[i - 2] + arrFib[i - 1]);
    i += 1;

    index = String(arrFib[arrFib.length - 1]).length;
  }
  return BigInt(arrFib.length);
}

console.log(findFibonacciIndexByLength(1n) === 1n);    // 1 1
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
