let computerSelection = ""
let played = 0;
let humanwon=0,machinewon=0;
const yourscore = document.querySelector('#manoutput');
const machinescore = document.querySelector('#macoutput');
const windisplay = document.getElementById('winner-output');
const msg = document.getElementById('msg')



//a function to declare winner
function declareWinner(a,b){
    if (a==b){
    windisplay.innerHTML = "It is a Tie";
    }
    else if(a>b){
        windisplay.innerHTML = "you won!";
    }
    else if(b>a){
        windisplay.innerHTML= "Machine Won!";
    }
}

//This is a function for the selection by computer randomly
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


//This is the Play function
function play(humanInput,machineInput){
    played+=1;
    if(played < 6){
    if (humanInput == machineInput)
        console.log(`It's a Tie.\n You both selected ${humanInput}`);
    
    else if( (humanInput.toLowerCase() == "rock" && machineInput == "scissor") || (humanInput.toLowerCase() == "paper" && machineInput == "rock") || (humanInput.toLowerCase() == "scissor" && machineInput == "paper")){
        console.log(`You Won! ${humanInput} Beats ${machineInput}`);
        humanwon += 1;
        yourscore.innerHTML = humanwon;
    }
    else{
        console.log(`Machine Won!:( ${humanInput} beaten by ${machineInput}`);
        machinewon += 1;
        machinescore.innerHTML = machinewon;
    }
    if(played==5){
        msg.innerHTML = "Click on the below button to reveal Winner:)";
    }
}
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const winner = document.getElementById('getwin');

rock.addEventListener('click',()=>{
    userInput = 'rock';
    computerPlay();
    play(userInput,computerSelection);
});

paper.addEventListener('click',()=>{
    userInput = 'paper';
    computerPlay();
    play(userInput,computerSelection);
});

scissor.addEventListener('click',()=>{
    userInput = 'scissor';
    computerPlay();
    play(userInput,computerSelection);
});

winner.addEventListener('click',()=>{
    declareWinner(humanwon,machinewon);  
});


