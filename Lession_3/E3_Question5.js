function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {
  return (color === "blue" || color === "green");
}

function isColorValid2(color) {
  return ["blue", "green"].includes(color);
}