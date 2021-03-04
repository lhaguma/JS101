// P
// input: string, output: object
// rules:
  // Explicit: Frequncy of each letter in the string is the value and the key is the letter
  // Implicit: Letters are case sensetive and listed in order and spaces characters are ignored
  // Question: What about punctuations? - ignore for now
  // Qeustion: What to do what empty strings? - return empty object
// E
// input: "The peep!", output: {T: 1, h: 1, e: 3, p: 2}
// input: "The PeEp", output: {T: 1, h: 1, e: 2, P: 1, E: 1, p: 1}
// input: "", output: {}
// D
// Array of letters
// A
/*
1. Create an empty object
2. Convert string to array
3. for each letter in the string
    - search the array for other letters that are equal
    - record the nummber of letters in that that equal into letterFreq
    - append the letter as the key and letterFreq as the value

*/
//  C

// Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";
let freqObject = {};
let letters = statement.split("").filter(letter => letter != ' ');
// console.log(letters);

letters.forEach(element => {
  let letterFreq = letters.filter(letter => letter === element).length;
  freqObject[element] = letterFreq;
});

console.log(freqObject);
// output
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }