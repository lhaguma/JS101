// swap the first and last letter of every word in a sentence

// A
// - write funtion called "swap" with a "string" parameter
// - split "string" into the words seperated by a space called "words"
// - iterate through "words"
// - for each word, take store the first and last letter into "first" and "last"
// - join the word with "last" and "first" reversed
// - join the words of "words" back together in "result"
// - return result

// C
function swap(string) {
  let words = string.split(" ");

  let newWord = words.map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    }
  });
  let result = newWord.join(" ");
  return result;
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"