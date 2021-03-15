
function countOccurrences(array) {
  let count = {};

  array.forEach((element, index, array) => {
    let countValue = array.filter(element => element === array[index]);
    count[element] = countValue.length;
  });

  for (let property in count) {
    console.log(`${property} => ${count[property]}`);
  }
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2