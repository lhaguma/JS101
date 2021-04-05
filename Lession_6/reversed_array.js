/*
P
- input: array, output: array
- rulles
  - explicit:
    1. original array is mutated
    2. order of the array elements has been reservesed
    3. cannot use reverse() method
  - implitcit:
    1. empty array returns empty array

E - given below
D - Array
A:
- initialize function 'reverse' with 'array' parameter
- create a copy of the array 'copyArr'
- create variable of length of array called 'lengthArr'
- iterate from lengthArr to zero
- At each iteration, remove the first element of 'array' and
  append elments from 'copyArr' at the current index
- return the mutated array
*/

// C
function reverse(array) {
  let copyArr = array.slice();
  let lengthArr = array.length;

  for (let idx = lengthArr - 1; idx >= 0; idx -= 1) {
    array.shift();
    array.push(copyArr[idx]);
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true