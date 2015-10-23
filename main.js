// var races = [
//   'white'
// , 'black'
// , 'hispanic'
// , 'asian'
// , 'native&nbsp;american'
// ];

var economics = [
  'poor'
, 'middle&nbsp;class'
, 'rich'
];

var sexes = [
  'male'
, 'female'
];

var environment = [
  'rural'
, 'urban'
];

var birth = [
  ['born', 1]
, ['aborted', 5]     // http://www.cdc.gov/reproductivehealth/data_stats/  219 of 1000
, ['miscarried', 5]   // http://www.uptodate.com/contents/miscarriage-beyond-the-basics   about 20%
];

var death = [
  ['old age', 1]
, ['heart disease',5]
, ['cancer', 7]
, ['stroke', 23]
, ['accidental injury', 36]
, ['car accident', 100]
, ['suicide', 121]
, ['falling down', 246]
, ['assault by firearm', 325]
, ['fire', 1116]
, ['natural disaster', 3357]
, ['electrocution', 5000]
, ['drowning', 8942]
, ['air travel accident', 20000]
, ['flood', 30000]
, ['legal execution', 58618]
, ['tornado', 60000]
, ['lightning strike', 83930]
, ['venomous bite', 100000]
, ['earthquake', 131890]
, ['dog attack', 147717]
, ['asteroid impact', 200000]
, ['tsunami', 500000]
, ['fireworks discharge', 615488]
];

$(document).ready(function() {
  $('.economics').html( randomInArray(economics) );
  // $('.race').html( randomInArray(races) );
  $('.sex').html( randomInArray(sexes) );
  $('.environment').html( randomInArray(environment) );

  $('.birth').html( getOutcome(birth) );

  $('.death').html( getOutcome(death) );
});

function randomInArray(array) {
  return array[0,_.random(array.length-1)];
}

function getOutcome(odds) {
  var outcome = '';
  _.eachRight(odds, function(cause, i) {
    if(_.random(1,cause[1]) == 1) {
      outcome = cause[0];
      return false
    }
  });

  return outcome;
}
