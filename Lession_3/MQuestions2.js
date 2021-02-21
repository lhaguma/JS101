
/*
input: regular string
output: cases of the string flipped 

requirements: string is entered 
rules: if previous case was lowercase now it's upper case, if previous case was uppercase, 
then it's lowercase now

mental model: Creat empty. Iterate thorugh given string. If the character is a alphabet uppercase, turn it
to lowcase and concaticate to empty string. If the character is alphabet lowercase, turn it to uppercase and
concatenate to new string. If char is not alphabet, concatanate to new string. 

Examples: 
Input: "The Munsters are creepy and spooky."
output: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Input: 'tHE mUNSTERS ARE CREEPY AND SPOOKY.'
output: 'The Munsters are creepy and spooky.'

Data structure:
store intermediate steps in string using string concatnation

Algo:
1. Create empty string called result
2. For every char in given string 
  1. Check it is an uppercase
      1. if it is, convert to lowercase and concat to string 
      2. if it is not, converte to uppercase and concat to string
3. return new string. 

*/

let munstersDescription = "The Munsters are creepy and spooky.";
let result = "";

for (let index = 0; index < munstersDescription.length; index += 1) {
  munstersDescription[index] === munstersDescription[index].toUpperCase()? 
    result += munstersDescription[index].toLowerCase():
    result += munstersDescription[index].toUpperCase();
}

console.log(result);