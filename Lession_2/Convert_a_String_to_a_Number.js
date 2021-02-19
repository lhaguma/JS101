//convert string to number
//cannot use parseInt or Number() function

function stringToInteger (string) {
  return string * 1;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


function stringToInteger2 (string) {
  let numbers = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  };

  let arrValues = string.split('').map(num => numbers[num]);
  let result = 0;

  arrValues.forEach(element => {
    result = (result * 10) + element;
  });
  return result;
}

console.log(stringToInteger2("4321") === 4321); // logs true
console.log(stringToInteger2("570") === 570); // logs true