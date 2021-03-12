/*
Write a function that takes an array of numbers,
and returns an array with the same number of elements,
with each element's value being the running total from the original array.
*/

// P
// input: array, output: array
// rule: new array must have the samw number of elements
// Each elment must be the running total
// Implicit: first element remains the same
// last element is the sum total of all elements

// E
// input [1, 2, 3], output: [1, 3, 6]
// input [0], output: [0]
// input [0, 1], output: [0, 1]

// D
// array

// A
// - create an array with the first element of the original array
// - call this array 'totals' and it will contain the running totals
// - loop through the original array starting at second element
// - append the sum of the last element of "totals" and the current element

// S
// input [1, 2, 3]
// totals = [1]
// from index 1 to length of input
// at index 1: append 1 + 2 = 3
// new totals = [1, 3]
// at index 2: append 3 + 3 = 6
// new totals = [1, 3, 6]

// C
function runningTotal(array) {
  if (array.length === 0) return array;

  let totals = [array[0]];
  for (let indx = 1; indx < array.length; indx += 1) {
    totals.push(totals[totals.length - 1] + array[indx]);
  }

  return totals;
}

// further explanation
function runningTotal2(array) {
  return array.map((num, idx) => {
    if (idx === 0) {
      return num;
    } else {
      return num + array[idx - 1];
    }
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

console.log(runningTotal2([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal2([3]));                    // [3]
console.log(runningTotal2([]));                     // []
