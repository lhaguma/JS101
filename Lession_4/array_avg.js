function average(array) {
// for
  // let sum = 0;
  // for (let idx = 0; idx < array.length; idx++) {
  //   sum += array[idx];
  // }

  // forEach
  // let sum = 0;
  // array.forEach(element => {
  //   sum += element;
  // });

  // reduce
  let sum = array.reduce((accumilator, element) => {
    return accumilator + element;
  });

  return Math.floor(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40