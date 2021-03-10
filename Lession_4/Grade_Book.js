// determine the mean of 3 grades and return the letter grade
// P
// input: 3 positive numbers <= 100, output: Letter grade associated with the number grade
// rule: use letter grade gride given

// E

// D
// case statements 

// A
// - create variable 'average' that is the average the three input grades
// - match 'average' to appropraite letter grade
// - return letter grade

// C

function getGrade (grade1, grade2, grade3) {
  let score = (grade1 + grade2 + grade3) / 3;

  if ((0 <= score) && (score < 60)) {
    return 'F';
  } else if ((60 <= score) && (score < 70)) {
    return 'D';
  } else if ((70 <= score) && (score < 80)) {
    return 'C';
  } else if ((80 <= score) && (score < 90)) {
    return 'B';
  } else if ((90 <= score) && (score <= 100)) {
    return 'A';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"