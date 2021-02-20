function logInBox (text) {

  console.log(`+-${'-'.repeat(text.length)}-+\n| ${' '.repeat(text.length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${' '.repeat(text.length)} |\n+-${'-'.repeat(text.length)}-+`);

}

logInBox('To boldly go where no one has gone before.');

// Further Exploration

// Modify this function so that it truncates the message if it doesn't fit
//inside a maximum width provided as a second argument (the width is the
//width of the box itself). You may assume no maximum if the
//second argument is omitted.

// For a challenging but fun exercise, try word wrapping
// messages that are too long to fit, so that they appear
// on multiple lines but are still contained within the box.
// This isn't an easy problem, but it's doable with basic JavaScript.