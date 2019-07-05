let scores, dice, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.btn-roll').addEventListener('click', diceRoll);

function diceRoll() {
    dice = Math.floor((Math.random() * 6) + 1);
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    console.log(dice);
}

document.querySelector('#current-' + activePlayer).textContent = dice;