let scores, dice = 0,
    totalScore, roundScore, diceDom, activePlayer, gamePlay;


initialise();
if (gamePlay) {
    document.querySelector('.btn-roll').addEventListener('click', diceRoll);

    function diceRoll() {

        dice = Math.floor((Math.random() * 6) + 1);
        diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        if (dice !== 1) {

            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            alert('Ooooops!!! You rolled a ONE! It\'s the next player\s turn.');
            nextPlayer();
        }

        console.log(dice);
    }
}

function nextPlayer() {

    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
        //diceDom.style.display = 'block';

}


function initialise() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;

    document.querySelector('.dice').style.display = 'none';
    playerOne = document.getElementById('name-0').textContent = prompt('PLAYER ONE, Enter your name');
    playerTwo = document.getElementById('name-1').textContent = prompt('PLAYER TWO, Enter your name');
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
}

//HOLD SECTION

document.querySelector('.btn-hold').addEventListener('click', saveScore);

function saveScore() {
    //console.log(roundScore);
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();


}

document.querySelector('.btn-new').addEventListener('click', win);

function newGame() {
    alert('GAME RESTARTED');
    gamePlay = false;
    initialise();
}
console.log(document.getElementById('name-0').textContent);

/* if (scores[activePlayer] >= 100)
{
    
} */
function win() {
    document.querySelector('.player-0-panel').classList.replace('active', 'winner');
    document.querySelector('.player-1-panel').classList.replace('active', 'winner');

}