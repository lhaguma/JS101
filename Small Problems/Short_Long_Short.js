function shortLongShort(str1, str2) {
  let arr = [str1, str2].sort((a,b) => a.length - b.length);
  arr.push(arr[0]);

  return arr.join('');
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"