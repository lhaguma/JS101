const readline = require('readline-sync');

console.log('Enter a noun:');
let noun = readline.prompt();
console.log('Enter a verb:');
let verb = readline.prompt();
console.log('Enter an adjective:');
let adjective = readline.prompt();
console.log('Enter an adverb:');
let adverb = readline.prompt();

console.log(`Some ${noun}s just don't know how to ${verb} correctly. That's why there is such an ${adjective} connotation to their ${adverb} ways.`);
