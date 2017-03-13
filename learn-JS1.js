var harryPotterFan = true;
if (harryPotterFan) {
    console.log('Mischief managed.');
} else {
    console.log('I lead a muggle\'s life.');
} 
var hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}

var moonPhase = 'full';
var foggyNight = false;
if (moonPhase === 'full' || foggyNight) {
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else { 
  console.log('Invalid moon phase');
}

var moonPhase = 'full';
switch (moonPhase) {
  case 'full':
    console.log('Howwwwlll!!'); break;
  case 'mostly full': 
    console.log('Arms and legs are getting hairier'); break;
  case 'mostly new':
    console.log('Back on two feet'); break;
  default: 
    console.log('Invalid moon phase'); break; 
}

//
// if/else statements make binary decisions and execute separate code based on a condition.
// We can add extra conditions with to if/else statements with else if conditions.
// switch statements make complicated if/else statements easier to read, however they achieve the same result as if/else statements.
// Comparison operators, like <, >, <=, and >= can compare two variables. After they compare, they always return either true or false.
// Logical Operators, like &&, ||, !==, and !, can compare two variables to see if a certain condition exists:
// && checks if both sides are true.
// || checks if either side is true.
// !== checks if both sides are not equal.
// ! changes a variable that is true to false, and vice versa.
// In the next lesson, we'll learn about functions, and how to write blocks of code that are reusable.
//
