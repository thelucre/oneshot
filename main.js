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
, ['aborted', 5, true ]     // http://www.cdc.gov/reproductivehealth/data_stats/  219 of 1000
, ['miscarried', 5, true ]   // http://www.uptodate.com/contents/miscarriage-beyond-the-basics   about 20%
];

var death = [
  ['old age', 1, true ]
, ['heart disease',5, true ]
, ['cancer', 7, true ]
, ['stroke', 23, true ]
, ['accidental injury', 36, true ]
, ['car accident', 100, true ]
, ['suicide', 121, true ]
, ['falling down', 246, true ]
, ['assault by firearm', 325, true ]
, ['fire', 1116, true ]
, ['natural disaster', 3357, true ]
, ['electrocution', 5000, true ]
, ['drowning', 8942, true ]
, ['air travel accident', 20000, true ]
, ['flood', 30000, true ]
, ['legal execution', 58618, true ]
, ['tornado', 60000, true ]
, ['lightning strike', 83930, true ]
, ['venomous bite', 100000, true ]
, ['earthquake', 131890, true ]
, ['dog attack', 147717, true ]
, ['asteroid impact', 200000, true ]
, ['tsunami', 500000, true ]
, ['fireworks discharge', 615488, true ]
];

var index, isGameOver = false;

$(document).ready(function() {
  $('.button').on('click', next);

  startGame();
});

function startGame() {
  index = 0;
  isGameOver = false;

  $('.button').removeClass('try-again').text('Take a chance?');
  $('p').removeClass('hide').removeClass('show');
  $('.economics').html( randomInArray(economics) );
  // $('.race').html( randomInArray(races) );
  $('.sex').html( randomInArray(sexes) );
  $('.environment').html( randomInArray(environment) );

  $('.birth').html( getOutcome(birth) );

  $('.death').html( getOutcome(death) );

  setTimeout(next,500);
}

function next() {
  if( isGameOver ) {
    startGame();
    return;
  }

  if(index != 0 ) $('p').eq(index - 1).addClass('hide').removeClass('show');

  $('p').eq(index).addClass('show')

  if( $('p').eq(index + 1).length < 1 )
    gameOver();
  else
    index++;
}

function gameOver() {
  isGameOver = true;
  $('.button').addClass('try-again').text('Another life?');
}

function randomInArray(array) {
  return array[0,_.random(array.length-1)];
}

function getOutcome(odds) {
  var outcome = '';
  _.eachRight(odds, function(cause, i) {
    if(_.random(1,cause[1]) == 1) {
      outcome = cause[0];
      // if(cause[2]) gameOver();
      return false
    }
  });

  return outcome;
}
