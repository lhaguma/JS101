// A
// - function "dms" takes "int"
// - aissgn "degree" to the whole number part of the number
// - assign "remainder" to 60 times the subtractration of "degree" from "int"
// - assign "minutes" whole number part of "remainder"
// - assign "seconds" to 60 times subtraction of "minutes" from "remainder"
// - round "seconds" to nearest whole number
// - concat "degrees", "minutes", and "seconds" with appropriate symboles
// - return contactation
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(int) {
  let degree = parseInt(int, 10);
  let remainder = MINUTES_PER_DEGREE * (int - degree);
  let minutes = String(parseInt(remainder, 10)).padStart(2,"0");
  let seconds = String(Math.round(SECONDS_PER_MINUTE * (remainder - minutes))).padStart(2,"0");

  return `${degree}˚${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"