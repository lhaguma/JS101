function leadingSubstrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    result.push(string.slice(0,idx + 1));
  }
  return result;
}

function substrings(string) {
  let result = [];
  while (string.length > 0) {
    result = result.concat(leadingSubstrings(string));
    string = string.substring(1);
  }
  return result;
}

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/