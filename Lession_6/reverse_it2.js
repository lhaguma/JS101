function reverseWords(string) {
  let strArray = string.split(" ");

  let result = strArray.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      return word.split("").reverse().join("");
    }
  });

  return result.join(" ");
}

console.log(reverseWords('Professional') === "lanoisseforP");             // "lanoisseforP"
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School') === "hcnuaL loohcS");            // "hcnuaL loohcS"