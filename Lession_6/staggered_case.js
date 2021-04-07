function staggeredCase(string) {
  let upperCase = true;

  return string.toLowerCase().split("").map(char => {
    if (upperCase && /[a-z]/i.test(char)) {
      upperCase = false;
      return char.toUpperCase();
    } else if (/[a-z]/i.test(char)) {
      upperCase = true;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join("");

}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ignore 77 the 444 numbers"));

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");