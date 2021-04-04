function doubleConsonants (string) {
  let vowels = 'aeiou';
  let result = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    result += string[idx];

    if (/[a-zA-Z]/.test(string[idx]) &&
     !vowels.includes(string[idx].toLowerCase())) {
      result += string[idx];
    }
  }
  return result;
}

console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === "");                // ""