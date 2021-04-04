/*
P
- input: two integers (first a count and second a starting position)
- output: array
- rules:
  - explicit:
    1. array length is equal to the count argument
    2. each element of the output array is a multiple of the staring argument
    3. count is is assumed to be a positive integer or 0
  - implicit:
    1. return empty array for all count arguments equal to zero

E - given below
D - Arrays
A:
- create function called 'sequence'
  - function accepts two arguemtns: 'count' and 'startSequnce'
- inside the function create an empty array called 'sequence'
- create a loop from 1 to 'count'
- for each iteration we want multiply the 'startSequence' with current iterator
- append the result of above line to sequce
- return sequence
*/
// C

function sequence(count, startSequence) {
  let sequence = [];

  for (let num = 1; num <= count; num += 1) {
    sequence.push(startSequence * num);
  }
  return sequence;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []