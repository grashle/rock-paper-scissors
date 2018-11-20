/*variables we need for the game*/

var choices = ["rock", "paper", "scissors"] /*we are assigning values to a list here, remember the first item in a list is assigned 0. all lists start at 0. */
var you_played;
var game_won = 0;
var game_lost = 0;
var game_drawn = 0;
var machine_played;
var game_played = 0;


/*listen for the button clicks*/

$('button').click(function(event){
  var you_played = this.getAttribute("value");

  $("#play_you").text(you_played);
  computer_move();
  compare(you_played, machine_played);

});

/* $("#rock").click(function(event) {
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
});  */

function computer_move() { /*note the bracket format*/
  var random_number = Math.floor(Math.random() * (3 - 0)) + 0;  /*Math.floor guarantees an integer instead of a decimal. the 3 signifies the topmost number plus one*/
  machine_played = choices[random_number];
  $("#machine_played").text(machine_played);
  console.log('move: ' + machine_played);
//  $("game_won").empty();
//  $("game_lost").empty();
//  $("game_drawn").empty();
}

function compare(you, machine){

  var verdict = 'lose';

  if ( you == machine ) {
    verdict = 'draw';
  }

  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }

  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "scissors")) {
    verdict = 'lose';
  }
  if ((you == "rock") && (machine == "paper")) {
    verdict = 'lose';
  }
  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  switch (verdict) {
      case 'win':
      game_won++;
      $("#game_won").text(game_won);
      break;
    case 'lose':
      game_lost++;
      $('#game_lost').text(game_lost);
      break;
    case 'draw':
      game_drawn++;
      $("#game_drawn").text(game_drawn);
      break;
    }

  $("#verdict").text(verdict);

  game_played++;
  $("#game_played").text(game_played);

}
