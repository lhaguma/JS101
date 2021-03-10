// Write a function that takes a positive integer, n, as an argument, 
// and logs a right triangle whose sides each have n stars. 
// The hypotenuse of the triangle (the diagonal side in the images below) 
// should have one end at the lower-left of the triangle, and the other end at the upper-right.


// P
// input: positive integer, output: triangle of stars
// rules: logs right triangle who's sides each have n starts
//        stars start at the left side and and at the right side

// E
/*

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/

// D
// string repetition

// A
// - declear a function that takes an integer 'int'as an argument 
// - In a loop from 1 to 'int'
  // for each iternation log stars starting at 'int' spaces away

// C

function triangle (int) {
  for(let index = 1; index <= int; index += 1) {
    console.log(' '.repeat(int - index) + '*'.repeat(index));
  }
}
triangle(2);
triangle(5);
triangle(9);
