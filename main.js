//Scores varibles
let scoreboard = {
    player: 0,
    computer: 0
}

//Computer choice which will select randomly 
function computerPlay() {
 const choices = ['rock', 'paper', 'scissors']
 const randomChoice = Math.floor(Math.random() * 3)
 return choices[randomChoice]
}

//Single round choice 
function playRound(playerSelection, computerSelection) {
    //Checking for a tie
    if (playerSelection === computerSelection) {
        return 'It is a tie'
    }
    //Checking for rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            scoreboard.player++
            return 'You win! Rock beats scissors'
        } else {
            scoreboard.computer++
            return 'You Lose! Paper beats rock'
        }
    }
    //Checking for paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            scoreboard.player++
            return 'You Lose! Scissors beats paper'
        } else {
            scoreboard.computer++
            return 'You Win! Rock beats scissors'
        }
    }
    //Checking for rock
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            scoreboard.player++
            return 'You Lose! Rock beats scissors'
        } else {
            scoreboard.computer++
            return 'You Win! Scissors beats paper'
        }
    }
}
//Game function to play 5 rounds
function game() {
    const playerSelection = prompt('Pick your weapon')
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}

for (let round = 0; round < 5; round++) {
    game();
}

//Result the final scores
function result() {
    console.log(`Computer Score: ${scoreboard.computer} Player Score: ${scoreboard.player}`)
    if (scoreboard.computer > scoreboard.player) {
        console.log('The computer wins!')
    }else if (scoreboard.computer < scoreboard.player) {
        console.log('The player wins!')
    }else{
        console.log('It is a draw')
    }
}

result()