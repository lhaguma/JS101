// P
// input:minute based time, ouput:time of in 24hr formate
// rules: output needs to look like 24hr format
// two spaces for hour and minute

// E
// D
// numbers

// A
// distinguish if 'number' is positive or negative
// divide 'number' by 60
// if 'number' is negative, add 24 hours until it's positive
// if number is great then 24, subtract 24 until 'number' is less than 24
// set 'hours' to Math.floor('number'/60)
// set 'minutes' to Math.round(('number'/60 - 'number') * 60)
// - return hours and minutes in date format
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(number) {
  let realTime = number / MINUTES_IN_HOUR;

  // convert negative time to positive time
  while (realTime < 0) {
    realTime += HOURS_IN_DAY;
  }

  // convert large hours to be under 24
  while (realTime > HOURS_IN_DAY) {
    realTime -= HOURS_IN_DAY;
  }

  let hours = Math.floor(realTime);
  let minutes = Math.round((realTime - hours) * MINUTES_IN_HOUR);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
