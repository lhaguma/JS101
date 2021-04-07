function buyFruit(groceryList) {
  let fullList = [];
  groceryList.forEach(fruitArr => {
    let [fruit, count] = fruitArr;

    while (count > 0) {
      fullList.push(fruit);
      count -= 1;
    }
  });
  return fullList;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]