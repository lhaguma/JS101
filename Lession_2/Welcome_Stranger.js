function greetings(arr, obj) {
  let name = arr.join(' ');
  let occupation = obj['title'] + ' ' + obj['occupation'];

  return `Hello, ${name}! Nice to have a ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

