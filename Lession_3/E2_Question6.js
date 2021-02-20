let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

function collapse(a, b, c, d) {
  return [].concat(a, b, c, d);
}

flintstones = collapse(...flintstones);
console.log(flintstones);


//reduce 
const reducer = (accum, element) => accum.concat(element);
console.log(flintstones.reduce(reducer, []));

//foreach
let newflintstones = [];
flintstones.forEach(element => {
  newflintstones = newflintstones.concat(element);
});
console.log(newflintstones);