function getComputerChoice() {
    let number=Math.random();
    let choice = (number < 1/3) ? 'rock' :
    (number>2/3) ? 'paper' :
    'scissors';
    return choice
}


function playRound(playerSelection, computerSelection) {
    const player= playerSelection.toLowerCase();
    if (player== computerSelection) {
        return `It's a tie! ${player} ties with ${computerSelection}`;
    } else {
        switch (player) {
            case "rock": 
                if (computerSelection=="paper") {
                    return `You LOSE! ${computerSelection} beats ${player}`;
                } 
                else {
                    return `You WIN! ${player} beats ${computerSelection}`;
            }
                break;
            case "paper": 
                if (computerSelection=="scissors") {
                    return `You LOSE! ${computerSelection} beats ${player}`;
                } 
                else {
                    return `You WIN! ${player} beats ${computerSelection}`;
            }
                break;
            case "scissors": 
                if (computerSelection=="rock") {
                    return `You LOSE! ${computerSelection} beats ${player}`;
                } 
                else {
                    return `You WIN! ${player} beats ${computerSelection}`;
                }
                break;
        }
    }
}



function game() {
    let wins=0;
    let loses=0;
    for(let i=0;i<5;i++) {
        const playerSelection= prompt('Please make a choice between the rock, the paper or the scissors.');
        const computerSelection=getComputerChoice();
        let result=playRound(playerSelection,computerSelection);
        console.log(result);
        if (result.slice(4,6)==`WIN`){
            wins=wins+1;
        } 
        else if (result.slice(4,7)==`LOSE`){
            loses=loses+1;
        } 
    }
    console.log(count, ties)
    if (wins>loses){
        return `You won the GAME! - ${wins} / ${loses} `;
    }
    else if (wins<loses){
        return `You lose the GAME! - ${wins} / ${loses} ` ;
    }
    else {
        return `Equality! - ${wins} / ${loses} `;
    }
}

console.log(game())