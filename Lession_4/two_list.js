function interleave(arr1, arr2) {
  let result = [];

  arr1.forEach((element, idex) => {
    result.push(element, arr2[idex]);
  });

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]