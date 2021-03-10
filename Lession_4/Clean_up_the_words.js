// get rid of non alphabet characters

// P
// input: string, ouput: string
// rule: output string will have all non aphabet characters replaced with one space
// rule: no consectuive spaces allowed

// E

// D
// strings

// A
// - create string of all alphebets
// - create empty string called 'results'
// - loop through strings to determine if current character is a string
// - if current character is a alphabet, append to 'results'
// - else if first character or if previous character is an alphabet, append a space to result


// C
function cleanUp(string) {
  let alphebets = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  

  for (index = 0; index < string.length; index += 1) {
    let char = string[index] ;
    let prevChar = string[index - 1];

    if (alphebets.includes(char)) {
      result += string[index];
    } else if (index === 0 || alphebets.includes(prevChar)) {
      result += " ";
    } 
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "