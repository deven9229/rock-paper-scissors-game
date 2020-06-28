function computerPlay() {
 const choices = ['rock', 'paper', 'scissors']
 const randomChoice = Math.floor(Math.random() * 3)
 return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
       if (computerSelection === 'paper') {
           return 'You Lose! Paper beats Rock'
       } else {
           if (computerSelection === 'scissors') {
               return 'You Win! Rock beats scissors'
           }
       }
        if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                return 'You Lose! Scissors beats paper'
            } else {
                if (computerSelection === 'rock') {
                    return 'You Win! Paper beats rock'
                }
            }
       if (playerSelection === 'scissors') {
           if (computerSelection === 'rock') {
               return 'You Lose! Rock beats scissors'
           } else {
               if (computerSelection === 'paper') {
                   return 'You Win! Scissors beats paper'
               }
           }
       }
   }
 }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        let playerScore = 0
        let computerScore = 0
    }
}