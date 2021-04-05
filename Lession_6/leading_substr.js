// function leadingSubstrings(string) {
//   let result = [];
//   for (let idx = 0; idx < string.length; idx++) {
//     result.push(string.slice(0,idx + 1));
//   }
//   return result;
// }

function leadingSubstrings(string) {
  let result = [];
  string.split("").reduce((accum, char) => {
    result.push(accum + char);
    return accum + char;
  },"");
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]