var vacationSpots = ['Carpatians', 'Fiji', "Lima"];

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' +  vacationSpots[i] + ', then');
}
// &viceversa 
var vacationSpots = ['Carpatians', 'Fiji', "Lima"];

for (var i = vacationSpots.length-1; i >= 0 ; i--) {
  console.log('I would love to visit ' +  vacationSpots[i] );
}

// add &comparision 
var friendPlaces = ['Alps', 'Cuba', "Oslo"];

for (var i = 0; i < myPlaces.length; i++) {
  console.log( myPlaces[i] );
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
      console.log( myPlaces[i] )
    } else ; 
  }
}
