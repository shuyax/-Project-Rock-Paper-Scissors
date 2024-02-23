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
  

// creates a new div referenced in the variable 'div'
const container = document.querySelector('#container');

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const score1 = document.createElement('div') 
const score2 = document.createElement('div')
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
    computer_score = 0
    player_score = 0
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        let result = playRound(button.id, computerSelection)
        if (result == 'playerWin'){
            player_score += 1
        }else if (result == 'computerWin'){
            computer_score += 1}
        score1.textContent = 'Your Score: ' + player_score 
        score2.textContent = 'Computer Score: ' + computer_score
        container.appendChild(score1)
        container.appendChild(score2)
    });
});



