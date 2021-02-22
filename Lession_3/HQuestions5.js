function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('4.5.5.6'));
console.log(isDotSeparatedIpAddress('64.35.105.56'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));