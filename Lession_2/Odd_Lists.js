function oddities (array) {
  let oddList = [];

  for (let ele = 0; ele < array.length; ele += 2 ) {
    oddList.push(array[ele]);
  }

  return oddList;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//further explanation
function eveny (array) {
  let evenList = [];
  let index = 1;

  while (index < array.length) {
    evenList.push(array[index]);

    index += 2;
  }
  return evenList;
}

console.log(eveny([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(eveny([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(eveny(["abc", "def"])); // logs ['def']
console.log(eveny([123])); // logs []
console.log(eveny([])); // logs []
