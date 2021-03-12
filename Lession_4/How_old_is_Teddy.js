let age;

while (true) {
  age = Math.round(Math.random() * 120);
  if (age >= 20 && age <= 120) break;
}

console.log(`Teddy is ${age} years old!`);