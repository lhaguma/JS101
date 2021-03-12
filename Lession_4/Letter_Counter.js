// P
// input: string, output: object
// Rules:
  // Explicit:
  // - object that shows the number of words of different sizes
  // - Words consist of any sequence of non-space characters.

  // Implicit:
  // - empty string returns empty object
  // - non alphabetical characters are inlcuded in the words

// E
// input: "my name is leocaDie!", output: {"2": 1, "4": 1, "8": 1}

// D
// Arrays

// A
// - create function named "wordSizes" that accpets only the "string" agument
// - turn "string" array of words seperated by only one space called "arrString"
// - create an empty objected called "result"
// - iterate through each words of "arrString"
// - for each word in "arrString", find the "length"
// - if "length" value is not a property of "result", set property value to 1
// - else add 1 to the value
// - return result

// C
function wordSizes(string) {
  let arrString = string.split(" ");
  let result = {};

  if (string.length === 0) { //empty string returns empty object
    return {};
  } else {
    arrString.forEach(word => {
      let fixedLength = word.replace(/[^a-zA-Z]/g,"").length;
      if (!Object.keys(result).includes(String(fixedLength))) {
        result[fixedLength] = 1;
      } else {
        result[fixedLength] += 1;
      }
    });

    return result;
  }
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));