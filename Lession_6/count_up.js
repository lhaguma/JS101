function sequence(int) {
  let sequenceArr = [];

  for (let seq = 1; seq <= int; seq += 1) {
    sequenceArr.push(seq);
  }

  return sequenceArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]