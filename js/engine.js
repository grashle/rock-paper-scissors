/*variables we need for the game*/

var choices = ["rock", "paper", "scissors"] /*we are assigning values to a list here, remember the first item in a list is assigned 0. all lists start at 0. */

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

/*listen for the button clicks*/

$("#rock").click(function(event) {
  var you_played ='rock';
  $("#play_you").text(you_played);

  var play_machine = computer_move();
  compare(you_played, play_machine);
});


$("#paper").click(function(event) {
  var you_played='paper';
  $("#play_you").text(you_played);

  var play_machine = computer_move();
  compare(you_played, play_machine);
});

$("#scissors").click(function(event) {
  var you_played='scissors';
  $("#play_you").text(you_played);

  var play_machine = computer_move();
  compare(you_played, play_machine);
});


function computer_move() { /*note the bracket format*/
  var machine_played = Math.floor(Math.random() * (3 - 0)) + 0;  /*Math.floor guarantees an integer instead of a decimal. the 3 signifies the topmost number plus one*/

  machine_played = choices[machine_played];
  $("#machine_played").text(machine_played);
  console.log('move: ' + machine_played);

  $("game_won").empty();
  $("game_lost").empty();
  $("game_drawn").empty();

  return machine_played;
}

function compare(you, machine){

  var verdict = 'you lost!';

  if ( you == machine ) {
    verdict = 'a draw!';
  }

  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'you won!';
  }

  if ((you == "paper") && (machine == "rock")) {
    verdict = 'you won!';
  }

  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'you won!';
  }

  if ( verdict == 'you won!') {
    won++;
    $("#game_won").text(won);
  }

  if ( verdict == 'you lost!') {
    lost++;
    $("#game_lost").text(lost);
  }
  if ( verdict == 'a draw!') {
    draw++;
    $("#game_drawn").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);

}
