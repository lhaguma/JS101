function sumOfSums(numArray) {
  let sum = 0;
  for (let numIdx = 1; numIdx <= numArray.length; numIdx += 1) {
    sum += numArray.slice(0, numIdx).reduce((accum, num) => accum + num);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35