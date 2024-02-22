//console.log("Hello World")

function getComputerChoice(){
    let random_number = Math.floor(Math.random() * 10) % 3
    if (random_number === 0){
        return 'Rock'
    }        
    else if (random_number === 1){
        return 'Paper'
    }
    else if (random_number === 2){
        return 'Scissors'
    }
}
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection == playerSelection){
        console.log('A draw. Let us have one more round')
        return 
    } else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'rock')){
        string = 'You Win! ' + playerSelection + ' beats ' + computerSelection
        console.log(string)
        return 'playerWin'
    }else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper')){
        string = 'You Lose! ' + computerSelection + ' beats ' + playerSelection
        console.log(string)
        return 'computerWin'
    }else {
        console.log('Please enter valid selection!')
        return 'invalid'
    }
    
  }
  
  //const playerSelection = "rock";
  //const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));

function playGame(){
    round = 1
    computer_score = 0
    player_score = 0
    while (round < 6){
        console.log('Round: ', round)
        const playerSelection = prompt("Please enter your choice: (Rock or Paper or Scissors)")
        const computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        if (result == 'playerWin'){
            player_score += 1
        }else if (result == 'computerWin'){
            computer_score += 1
        }else if (result == 'invalid'){
            round -= 1
        }
        round += 1
    }
    console.log('Your Score: ', player_score)
    console.log('Computer Score: ', computer_score)
    if (player_score > computer_score){
        console.log('Player wins!')
    }else if (player_score < computer_score){
        console.log('Computer wins!')
    }else{
        console.log('A draw!')
    }

}

playGame()