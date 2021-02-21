let numbers = [1, 2, 3, 4];


// numbers.splice(0); //method 1
// numbers.length = 0; //method 2

while (numbers.length) { //method 3
  numbers.pop();
}


console.log(numbers);