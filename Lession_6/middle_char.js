/*
P
- input: Non empty string
- otuput: string
- rules:
  - explicit: return middle string.
  - return one string in string is odd length
  - and two chars if string is even length
  - implicit: you can return empty char

E - see below
D - arrays
A:
- initialize function called 'centerOf' with parameter 'string'
- determine string length then turn string into array
- if string is odd, divide length by 2 and retrun char at that length
- if string is even, divide length by 2 and determin the round up and down pos
  - return the two chars
*/

function centerOf(string) {
  let middle = string.length / 2;

  switch (string.length % 2) {
    case 1: return string[Math.floor(middle)]; // Odd
    case 0:
      return string.slice(Math.floor(middle - 1), Math.ceil(middle) + 1);
  }
  return undefined;
}

console.log(centerOf('I Love JavaScript') === "a"); // "a"
console.log(centerOf('Launch School') === " ");     // " "
console.log(centerOf('Launch') === "un");            // "un"
console.log(centerOf('Launchschool') === "hs");      // "hs"
console.log(centerOf('x') === "x");                 // "x"