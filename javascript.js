function getComputerChoice() {
    let number=Math.random();
    let choice = (number < 1/3) ? 'rock' :
    (number>2/3) ? 'paper' :
    'scissors';
    return choice
}

let wins=0;
let loses=0;
let ties=0;

function playRound(playerSelection, computerSelection) {
    const player= playerSelection.toLowerCase();
    if (player== computerSelection) {
        return 'tie';
    } else {
        switch (player) {
            case "rock": 
                if (computerSelection=="paper") {
                    return 'lose';
                } 
                else {
                    return 'win';
            }
                break;
            case "paper": 
                if (computerSelection=="scissors") {
                    return 'lose';
                } 
                else {
                    return 'win';
            }
                break;
            case "scissors": 
                if (computerSelection=="rock") {
                    return 'lose';
                } 
                else {
                    return 'win';
                }
                break;
        }
    }
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if (wins>=4 && playRound(button.id,getComputerChoice())=='win'){
            resultGame.textContent=`Congratulations!\nYou win the GAME!!!`;
            scoreMessage.textContent=`Do you want to play again?`;
            wins=0;
            loses=0;
            ties=0;
            }
        else if (loses>=4 && playRound(button.id,getComputerChoice())=='lose'){
            resultGame.textContent=`You lose the GAME!!!`;
            scoreMessage.textContent=`Do you want to play again?`;
            wins=0;
            loses=0;
            ties=0;
            }
        else if (loses==5 || wins==5){
            wins=0;
            loses=0;
            ties=0;
        }  
        else{
            switch (playRound(button.id,getComputerChoice())){
                case 'lose':
                    loses=loses+1;
                    scoreMessage.textContent=`You lose! ${getComputerChoice()} breaks the ${button.id}!`;
                    break;
                case 'win':
                    wins=wins+1;
                    scoreMessage.textContent=`You win! ${button.id} breaks the ${getComputerChoice()}!`;
                    break;
                case 'tie':
                    ties=ties+1;
                    scoreMessage.textContent=`It's a tie! ${button.id} ties the ${getComputerChoice()}!`;
                    break;
                };
            scoreGame.textContent=`${wins}/${loses}`;
    };
    console.log(wins,loses);
    scoreGame.textContent=`${wins}/${loses}`;
    });
});

 






   