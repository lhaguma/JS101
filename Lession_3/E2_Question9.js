let title = "Flintstone Family Members";

let sides = Math.floor((40 - title.length) / 2);

console.log(' '.repeat(sides) + title + ' '.repeat(sides));

//LS examples
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));