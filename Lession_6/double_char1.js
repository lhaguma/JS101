function repeater(string) {
  if (string === '') return '';

  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    result += string[idx] + string[idx];
  }

  return result;
}

function repeater2 (string) {
  return string.split("").map(char => char + char).join("");
}

console.log(repeater('Hello') === "HHeelllloo");        // "HHeelllloo"
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");    // "GGoooodd  jjoobb!!"
console.log(repeater('') === "");             // ""

console.log(repeater2('Hello') === "HHeelllloo");        // "HHeelllloo"
console.log(repeater2('Good job!') === "GGoooodd  jjoobb!!");    // "GGoooodd  jjoobb!!"
console.log(repeater2('') === '');