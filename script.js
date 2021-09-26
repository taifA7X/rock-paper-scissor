function computerWeapon() {
    randomNumber = Math.floor(Math.random() * (4 - 1) ) + 1;
    weapon = ''
    if (randomNumber === 1) weapon = 'rock';
    if (randomNumber === 2) weapon = 'paper';
    if (randomNumber === 3) weapon = 'scissor';
    return weapon;
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let computerScore = document.createElement('p');
let playerScore = document.createElement('p');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let winnerMessage = document.createElement('p');
let loserMessage = document.createElement('p');
let winner = document.querySelector('#winner')
let loser = document.querySelector('#loser')
let cScore = 0;
let pScore  = 0;

rock.addEventListener('click', () => {
    let weapon = computerWeapon();
    if (weapon === 'rock') return;
    if (weapon === 'paper') {
        cScore++;
        computerScore.textContent = cScore;
        computer.appendChild(computerScore)
    }
    if (weapon === 'scissor') {
        pScore++;
        playerScore.textContent = pScore;
        player.appendChild(playerScore)
    }
    if (pScore === 3) {
        winnerMessage.textContent = 'you win';
        winner.appendChild(winnerMessage)
    }
    if (cScore ===3) {
        loserMessage.textContent = 'you lose';
        loser.appendChild(loserMessage)
    }
})

paper.addEventListener('click', () => {
    let weapon = computerWeapon();
    if (weapon === 'paper') return;
    if (weapon === 'scissor') {
        cScore++;
        computerScore.textContent = cScore;
        computer.appendChild(computerScore)
    }
    if (weapon === 'rock') {
        pScore++;
        playerScore.textContent = pScore;
        player.appendChild(playerScore)
    }
    if (pScore === 3) {
        winnerMessage.textContent = 'you win';
        winner.appendChild(winnerMessage)
    }
    if (cScore ===3) {
        loserMessage.textContent = 'you lose';
        loser.appendChild(loserMessage)
    }
})

scissor.addEventListener('click', () => {
    let weapon = computerWeapon();
    if (weapon === 'scissor') return;
    if (weapon === 'rock') {
        cScore++;
        computerScore.textContent = cScore;
        computer.appendChild(computerScore)
    }
    if (weapon === 'paper') {
        pScore++;
        playerScore.textContent = pScore;
        player.appendChild(playerScore)
    }
    if (pScore === 3) {
        winnerMessage.textContent = 'you win';
        winner.appendChild(winnerMessage)
    }
    if (cScore ===3) {
        loserMessage.textContent = 'you lose';
        loser.appendChild(loserMessage)
    }
})








    

















