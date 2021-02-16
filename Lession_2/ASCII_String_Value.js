function asciiValue (string) {
  let longString = string.split('');
  let asciiCount = 0;
  longString.forEach(element => {
    asciiCount += element.charCodeAt(0);
  });
  return asciiCount;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
