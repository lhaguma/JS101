
function isPalindromicNumber(int) {
  return String(int) === String(int).split("").reverse().join("");
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(005));            // doesn't work. JS will convert this to 5