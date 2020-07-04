const game = ()=> {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener("click", () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function(){
        this.style.animation = '';
      }); 
    });

    //Computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function(){
        //Computer choice
        const randomNumber = Math.floor(Math.random() * 3);
        const computerSelection = computerOptions[randomNumber];
        
        setTimeout(() =>{
          //Here is where we call compare Hands
          playRound(this.textContent, computerSelection);

          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerSelection}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  //Result the final scores
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    const winner = document.querySelector('.winner');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    if (playerScore > computerScore) {
      winner.textContent = 'The computer wins';
      return;
    } else if (computerScore < playerScore) {
      winner.textContent = 'The player wins!';
      return;
    } else {
      winner.textContent = 'It is a draw';
      return;
    }
};
  
  const playRound = (playerSelection, computerSelection) => {
    //Update Text
    const winner = document.querySelector('.winner');
    //Checking for a tie
    if(playerSelection === computerSelection) {
      winner.textContent ='It is a tie';
      return;
    }
    //Checking for rock
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'You win! Rock beats scissors';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Lose! Paper beats rock';
        cScore++;
        updateScore();
        return;
      }
    }
    //Checking for paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'You Lose! Scissors beats paper';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Win! Rock beats scissors';
        pScore++;
        updateScore();
        return;
      }
    }
    //Checking for rock
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        winner.textContent = 'You Lose! Rock beats scissors';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Win! Scissors beats paper';
        pScore++;
        updateScore();
        return;
      }
    }
  }
  startGame();
  playMatch();
};

//Play 5 rounds
for (let round = 0; round < 5; round++) {
  game();
}
