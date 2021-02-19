function penultimate (sentence) {
  let words = sentence.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word"));
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great!") === "is"); // logs true

//middle word of the phrase
//Edge cases:
//If the number of words isn't even overcorrect
//If just one word, return that word
//if empty string return warning message

function middle (sentense) {
  let words = sentense.split(' ');
  let middleLength = Math.floor(words.length / 2);
  if (sentense.length > 0 ) {
    return words[middleLength];
  } else {
    return 'Please enter a non empty string.';
  }
}

console.log(middle('I love a lot of cookies!'));
console.log(middle('Tyler is the best!'));
console.log(middle('Cats are cool'));
console.log(middle('Cats'));
console.log(middle(''));

