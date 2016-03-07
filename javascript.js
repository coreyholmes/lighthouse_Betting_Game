// Starts the Game
function startGame() {
 alert("Welcome to Smoothie Bets!");
 var player_name = prompt("Enter Your Name:");
 alert("Welcome " + player_name + "!");
 generateBankroll(player_name, 100);
}

// Adds Money to the Player's Bank
function generateBankroll(player_name, bankroll) {
  var bankroll = bankroll;
  alert(player_name + " has been awarded " + "$" +bankroll);
  placeBet(player_name, bankroll);
}

// Prompts the Player the pick an appropriate bet
function placeBet(player_name, bankroll) {
  alert("Place a bet!");
  var bet = prompt("Amount [5 or 10]:");
  while (!(bet ===  "5" || bet === "10")) {
    alert("Please place an appropriate bet");
    var bet = prompt("Amount [5 or 10]:");
  }
  alert(player_name + " bet " + bet);
  chooseNum(player_name, bankroll, bet);
}

// Prompts the Player to pick an appropriate numer
function chooseNum(player_name, bankroll, bet) {
  alert("Choose a number!");
  var num = prompt("Pick a number between 1 - 10");
  while (num <=  0 || num > 10) {
    alert("Please pick an appropriate number");
    var num = prompt("Pick a number between 1 - 10");
  }
  alert(player_name + " chose the number " + num);
  results(player_name, bankroll, bet, num);
}

// Determines + Displays the outcome of the round.
function results(player_name, bankroll, bet, num) {
  alert(("The results are in!").toUpperCase());
  var winningNum = randNum()
  parseInt(num);
  alert("The Winning Number is ** " + winningNum + " **")
    if (num == winningNum) {
      alert("Congratulations! +" + bet + " Tokens!")
      bankroll += bet;
      alert(player_name + "'s balance is $" + bankroll);
    } else if (num + 1 == winningNum || num - 1 == winningNum) {
      alert("Off by One! +0 Tokens!");
      alert(player_name + "'s balance is $" + bankroll);
    } else {
      alert("You Lose! -" + bet + " Tokens!");
      bankroll -= bet;
      alert(player_name + "'s balance is $" + bankroll);
  }
  var playAgain = confirm("Play Another Round?");
  if (playAgain) {
    placeBet(player_name, bankroll);
  } else {
    alert("Thanks for playing!");
  }
}

// Generates a Random Number
function randNum() {
  return (Math.ceil(Math.random() * 10));
}

// results("Corey", "100", "5", "5");
startGame();