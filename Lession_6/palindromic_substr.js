/*
P
- input: string, output: array
- rules:
  - explicit:
    1. return all the paladromic substrings
    2. substrings sorted in order of appearance
    3. include duplicated substrings
    3. use the 'substring' function from previous exercise
    4. single characters are not pallindroms
    5. stringly equal to each other (case sensetive)
  - implicit:
    idk yet
E - below
D - Array
A:
- create function 'palindromes'
- create variable 'allSubStr' and let it equal to
the result of substring(string)
- filter the 'allSubStr' to only those that are palindroms
- return the palindorms
*/

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

function isPalindrom (word) {
  return (word.length > 1) && (word.split("").reverse().join("") === word);
}

function palindromes(string) {
  return substrings(string).filter(isPalindrom);
}

// Check outputs

console.log(palindromes('abcd').every(char => [].includes(char)));       // []
console.log(palindromes('madam').every(char => [ "madam", "ada" ].includes(char)));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye').every(char => {
  return [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
    "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
    "-madam-", "madam", "ada", "oo" ].includes(char);
}));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes').every(char => [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ].includes(char)));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]