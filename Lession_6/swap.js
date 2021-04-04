function swapName(fullName) {
  let nameArray = fullName.split(" ");
  let lastName = nameArray[nameArray.length - 1];
  let firstName = nameArray.slice(0, nameArray.length - 1).join(" ");
  return `${lastName}, ${firstName}`;
}
console.log(swapName('Joe Roberts') === "Roberts, Joe");    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals') === "Ragvals, Karl Oskar Henriksson");    // "Ragvals, Karl Oskar Henriksson"s