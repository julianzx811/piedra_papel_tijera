function computerplay(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "Rock";
    }
    if(random == 1){
        return "Paper";
    }
    if(random == 2){
        return "Scissors";
    }
}

function playRound(userSelection,computeSelection){
    let userselection = userSelection.toLowerCase();

    if(userselection == "rock"){
        if(computeSelection == "Rock"){
            div.textContent = "Its a draw! "+userselection+ " its equal to " + computeSelection;
            return "draw";
        }
        if(computeSelection == "Paper"){
            div.textContent = "You lose! "+userselection+ " does not beat "+computeSelection;
            return "lose"; 
        }
        if(computeSelection == "Scissors"){
            div.textContent = "You win! "+userselection+ " beats "+computeSelection;
            return "win";
        }
    }

    if(userselection == "paper"){
        if(computeSelection == "Rock"){
            div.textContent = "You win! "+userselection+ " beats "+computeSelection;
            return "win";
        }
        if(computeSelection == "Paper"){
            div.textContent = "Its a draws! "+userselection+ " its equal to " + computeSelection;
            return "draw";
        } 
        if(computeSelection == "Scissors"){
            div.textContent = "You lose! "+userselection+ " does not beat "+computeSelection;
            return "lose";
        }
    }
    
    if(userselection == "scissors"){
        if(computeSelection == "Rock"){
            div.textContent = "You lose! "+userselection+ " does not beat "+computeSelection;
            return "lose";
        }
        if(computeSelection == "Paper"){
            div.textContent = "You win! "+userselection+ " beats "+computeSelection;
            return "win";
        } 
        if(computeSelection == "Scissors"){
            div.textContent = "Its a draw! "+userselection+ " its equal to " + computeSelection;
            return "draw";
        }
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const Scissors = document.querySelector('#scissors');
const div = document.querySelector('#results');
const div2 = document.querySelector('#score');
const div3 = document.querySelector('#ganador');

let USERscore = 0;
let COMPUTERscore = 0;

let clickRock = (e) =>{
    let resultado = playRound('rock',computerplay());
    if(resultado == "win"){
        USERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(resultado == "lose"){
        COMPUTERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(USERscore == 5){
        div3.textContent = 'GANADOR!: USUARIO';
        USERscore = 0;
        COMPUTERscore = 0;
    }
    if(COMPUTERscore == 5){
        div3.textContent = 'GANADOR!: COMPUTADORA';
        USERscore = 0;
        COMPUTERscore = 0;
    }
};
rock.addEventListener('click',clickRock);

let clickScissors = (e) =>{
    let resultado = playRound('scissors',computerplay());
    if(resultado == "win"){
        USERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(resultado == "lose"){
        COMPUTERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(USERscore == 5){
        div3.textContent = 'GANADOR!: USUARIO';
        USERscore = 0;
        COMPUTERscore = 0;
    }
    if(COMPUTERscore == 5){
        div3.textContent = 'GANADOR!: COMPUTADORA';
        USERscore = 0;
        COMPUTERscore = 0;
    }
};
Scissors.addEventListener('click',clickScissors);

let clickpaper = (e) =>{
    let resultado = playRound('paper',computerplay());
    if(resultado == "win"){
        USERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(resultado == "lose"){
        COMPUTERscore++;
        div2.textContent = 'user: ' + USERscore + '/' + 'computer: ' + COMPUTERscore;
    }
    if(USERscore == 5){
        div3.textContent = 'GANADOR!: USUARIO';
        USERscore = 0;
        COMPUTERscore = 0;
    }
    if(COMPUTERscore == 5){
        div3.textContent = 'GANADOR!: COMPUTADORA';
        USERscore = 0;
        COMPUTERscore = 0;
    }
};
paper.addEventListener('click',clickpaper);


