'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// When player click check
document.querySelector('.check').addEventListener
  ('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  // When box number empty
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When the player win
  } else if (secretNumber === guess) {
    displayMessage('🎈 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector(".number").style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⤴ Too high!' : '⤵ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      score;
    } else {
      displayMessage('😢 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

  //Play Again
 document.querySelector('.again').addEventListener
 ('click',function (){
   displayMessage('Start guessing...');
   document.querySelector('.guess').value='';
   score=20;
   document.querySelector('.score').textContent= score;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector("body").style.backgroundColor= '#222';
   document.querySelector(".number").style.width= '15rem';
   document.querySelector('.number').textContent= '?' ;
 });

// function for message
const displayMessage = function (message){
  document.querySelector('.message').textContent= message;
};
