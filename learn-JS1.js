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
