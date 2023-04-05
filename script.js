'use strict';

let targetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;



document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  console.log(userNumber, typeof userNumber);

  if (!userNumber) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (userNumber === targetNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number! 🎉';
    score++;
    updateScoreDisplay(score);
    document.querySelector('.number').textContent = targetNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (userNumber > targetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      updateScoreDisplay(score);
    } else {
      document.querySelector('.message').textContent = '🥲 You Lost The Game';
      document.querySelector('.score').textContent = '💔💔💔💔💔💔💔💔💔💔';
    }
  } else if (userNumber < targetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      updateScoreDisplay(score);
    } else {
      document.querySelector('.message').textContent = '🥲 You Lost The Game';
      document.querySelector('.score').textContent = '💔💔💔💔💔💔💔💔💔💔';
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

document.querySelector('.again').addEventListener('click', function () {
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️';
  document.querySelector('body').style.backgroundColor = '#222';
});


