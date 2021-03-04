let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//Pick out the minimum age from our current Munster family object:
// P
// input: object, output: number
// rules: select the minium age 
// E
// input: {r: 1, t: 0}, output: 0
// input: {r: 0, t: 0}, output: 0
// input: {r: 0, t: 10}, output: 0
// input: {r: 5, t: 10}, output: 5
// D
// Array of ages
// A
/*
1. declear variable minAge
2. convert values to array
3. iterate of the values
  - let the first element be the minAge
  - If the current value is strictly less than the minAge, reassign minAge to current value 

*/
let ageValues = Object.values(ages);
let minAge = ageValues[0];

ageValues.forEach(element => {
  if (element < minAge) {
    minAge = element;
  }
});

console.log(minAge);
console.log(Math.min(...ageValues));