// P
// input: array , output: object
// rules: object keys are array elements and object values are array indexes
// E
// D
// array iteration
// A
/*
1. iterate through the array 
2. create empty object
3. Each array element will be the object key
4. Each array index will the be the object value 
5. log object 
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flinObj = {};
flintstones.forEach((element, index) => flinObj[element] = index);
console.log(flinObj);
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
