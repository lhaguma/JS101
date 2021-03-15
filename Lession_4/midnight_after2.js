// P
// input: time , output:number of minutes between midnight and that time
// rules: ignore daylight savings
// rule: output must be between 0 and 1439

// D
// Arrays

// A
// splitup date into array
// if hours position is 24 or 0, return 0 minutes
// if after midnight totalMinutes = hours times 60 plus minutes
// if before midnight totalMinutes =
// minutes in a day - (hours times 60 plus minutes)

// A
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map(num => Number(num));
  if (hours === "24" || hours === "00" ) return 0;

  return ((hours * MINUTES_IN_HOUR) + minutes);
}

function beforeMidnight(time) {
  return MINUTES_IN_DAY - afterMidnight(time);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
// console.log(afterMidnight("00:00"));
// console.log(beforeMidnight("00:00"));
// console.log(afterMidnight("12:34"));
// console.log(beforeMidnight("12:34"));
// console.log(afterMidnight("24:00"));
// console.log(beforeMidnight("24:00"));