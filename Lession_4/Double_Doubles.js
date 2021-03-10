// Write a function that returns the number provided as an argument multiplied by two, 
// unless the argument is a double number; return double numbers as-is.

// P
// input: number , output:number
// rules: return a number multiplied by two if it is not a double number
// Questions: What's a double number?
// A number that if split in half, both sides are equal

// E

// D
// strings for length

// A
// - create function twice which takes in "number"
// - if length of odd, multiply by two. 
// - if length is even,
  // - split number in half
  // - if the two half equal return orginal number.
  // - if they dont equal, multiply by two

// C

function twice(number) {
let charNum = String(number)
let middle = charNum.length / 2;

if (charNum.slice(0, middle) === charNum.slice(middle)) {
  return number;
} else {
  return number * 2;
}

}

console.log(twice(44));          // 44
console.log(twice(37));          // 74
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676