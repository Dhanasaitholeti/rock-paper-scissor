let userInput = prompt("enter any option from rock,paper,scissor");
let computerSelection = ""
function computerPlay(){
    let randomnum = Math.floor(Math.random()*3);
    switch(randomnum){
    case 0:
        computerSelection = "rock";
        break;
    case 1:
        computerSelection = "paper";
        break;
    case 2:
        computerSelection = "scissor"
        break;
    }
}

function play(humanInput,machineInput){
    if (humanInput == machineInput)
        console.log(`It's a Tie.\n You both selected ${humanInput}`);
    
    else if( (humanInput.toLowerCase() == "rock" && machineInput == "scissor") || (humanInput.toLowerCase() == "paper" && machineInput == "rock") || (humanInput.toLowerCase() == "scissor" && machineInput == "paper")){
        console.log(`You Won! ${humanInput} Beats ${machineInput}`);
    }
    else{
        console.log(`Machine Won!:( ${humanInput} beaten by ${machineInput}`);
    }
}

computerPlay();
play(userInput,computerSelection);