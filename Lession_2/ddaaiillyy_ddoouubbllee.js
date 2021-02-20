function crunch (str) {
  let result = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== str[index + 1]) {
      result += str[index];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""