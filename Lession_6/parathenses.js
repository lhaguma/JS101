/**
P
- input: string, output: Boolean
- rules
  - Explicit
    1. Each open parenthese must be paired with a closed parentheses
  - Implicit
    1. Equal number of ( and )
    2. No ( and ) returns true
    3. Every ( has to come before a )

E - see below
D - Array
A:
- create function called 'isBalanced' with one 'string' parameter
- select only ( and ) to from the array
- check that there is an equal number of ( and )
- check that every ( occurs before every )
- if both checks are true, return true
*/

// C
function isBalanced(string) {
  let parentheses = string.split("").filter(char => ['(', ')'].includes(char));
  if (parentheses.length === 0) return true;

  let openCount = parentheses.filter(char => char === '(').length;
  let closedCount = parentheses.filter(char => char === ')').length;

  return (openCount === closedCount) && (parentheses.lastIndexOf('(') < parentheses.lastIndexOf(')'));
}

// isBalanced("What (is) this?");
// isBalanced("What is) this?");
// isBalanced("What (is this?");
// isBalanced("((What) (is this))?");
// isBalanced("((What)) (is this))?");
// isBalanced("Hey!");
// isBalanced(")Hey!(");
// isBalanced("What ((is))) up(");

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);