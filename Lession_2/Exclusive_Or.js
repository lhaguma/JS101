function xor (par1, par2) {
  return !!((par1 && !par2) || (par2 && !par1));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);