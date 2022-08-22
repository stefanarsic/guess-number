'use strict';

// Introduction to DOM
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/* _____________________________________________________________________________ */
// GUESS MY NUMBER! - GAME!!!

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Refactored code
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // Game Logic

  // When player don't put a number
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';

    // Refactored code
    displayMessage('⛔ No number!');

    // When player WINS!
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    // Refactored code (check above)
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100%';

    // Implementing Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong (Refactored code, first one is commented under)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📈 Too Low!';

      // Refactored code (check above)
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥 You lost the game 💥';

      // Refactored code (check above)
      displayMessage('💥 You lost the game 💥');

      document.querySelector('.score').textContent = 0;
    }
  }
  // We have refactored this code !!!
  // When guess number is too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥 You lost the game 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Moj nacin
  /*
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  */

  // Njegov nacin
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';

  // Refactored code (check above)
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
