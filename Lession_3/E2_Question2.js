let numbers = [1, 2, 3, 4, 5];

//using reverse
numbers1 = numbers.slice().reverse();
console.log(numbers1); // [ 5, 4, 3, 2, 1 ]

//using sort
numbers2 = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(numbers2); // [ 5, 4, 3, 2, 1 ]

//using foreach
number3 = [];
numbers.forEach(element => {
  number3.unshift(element);
});
console.log(number3);

// original
console.log(numbers);