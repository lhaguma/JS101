// P
// input: year, output: century.
// Rules: string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
// New centuries begin in years that end with 01.
// So, the years 1901 - 2000 comprise the 20th century.

// E
// D
// strings

// A
// - create variable 'result' which divids input by 100 then rounds up
// should be a string
// - if the last digit is 1, append st
// - if the last digit is 2, append nd
// - if the last digig is 3, append rd
// - else append th

// C

function century(year) {
  let result = (Math.ceil(year / 100)).toString();
  let lastDigit = result[result.length - 1];
  let secLastDigit = result[result.length - 2];

  if (secLastDigit === '1') {
    return result + 'th';
  } else {
    switch (lastDigit) {
      case '1': return result + 'st';
      case '2': return result + 'nd';
      case '3': return result + 'rd';
      default: return result + 'th';
    }
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"