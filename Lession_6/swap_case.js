function swapCase(stirng) {
  return stirng.split("").map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join("");
}
console.log(swapCase('CamelCase') === 'cAMELcASE');              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV') === 'tONIGHT ON xyz-tv');      // "tONIGHT ON xyz-tv"