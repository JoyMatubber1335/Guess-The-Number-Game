'use strict';

const targetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

console.log(targetNumber);
document.querySelector('.number').textContent = targetNumber;

document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  console.log(userNumber, typeof userNumber);

  if (!userNumber) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (userNumber === targetNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number! 🎉';
    score++;
    updateScoreDisplay(score);
  } else if (userNumber > targetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      updateScoreDisplay(score);
    } else {
      document.querySelector('.message').textContent = ' 🥲 You Lost The Game';
      document.querySelector('.score').textContent = '';
    }
  } else if (userNumber < targetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      updateScoreDisplay(score);
    } else {
      document.querySelector('.message').textContent = ' 🥲 You Lost The Game';
      document.querySelector('.score').textContent = '';
    }
  }
});

function updateScoreDisplay(score) {
  let Life = '';
  for (let i = 0; i < score; i++) {
    Life += '❤️';
  }
  document.querySelector('.score').textContent = Life;
}

function endGame(message) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = '';
}
