
//Create a new function named getComputerChoice.

function GetComputerChoice(){

    /*Write the code so that getComputerChoice will randomly return one of the following string values: 
    “rock”, “paper” or “scissors”.*/
    let max = 4
    let min = 1
    let bNum = Math.floor(Math.random() * (max - min) + min)
    switch(bNum){
        case 1:
            return "rock"

        case 2:
            return "paper"

        case 3:
            return "scissors"

}
    return bNum;
}
//Create a new function named getHumanChoice.

function getHumanChoice(){
    /*Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. */
    const choices=prompt("Enter Your Choice for the Game:");
    
    /*Make your function’s humanChoice parameter case-insensitive 
    so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    return choice;*/
    const choice = choices.toLowerCase();
    return choice;
}

/*Create two new variables named humanScore and computerScore in the global scope.*/

let humanScore=0;
let computerScore=0;
    


/*Create a new function named playGame.*/

function playGame(){

/*Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. 
Use these two parameters to take the human and computer choices as arguments.*/

function playRound(humanChoice,computerChoice){

    /*Write the code for your playRound function to console.log a string value representing the round winner, 
    such as: “You lose! Paper beats Rock”.*/

    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won! Rock beats Scissors")
        humanScore++
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors")
        computerScore++
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won! Paper beats Rock")
        humanScore++
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won! Scissors beats Paper")
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore++
    }else if(humanChoice === computerChoice){
        console.log("We both picked the same thing, It's a draw")
    }else {
        console.log("Invalid choice")
        prompt("The value that you entered was neither rock, paper or scissor, try entering a different value");
        playRound();
    }
}

const humanSelection = getHumanChoice();
const computerSelection = GetComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your score="+humanScore);
console.log("My score="+computerScore);


}

playGame()
playGame()
playGame()
playGame()
playGame()

if (humanScore>computerScore){
    alert("You win");
}
else if(humanScore===computerScore){
    alert("It's a draw");
}
else{
    alert("You lose");
}

