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
function singleround(userSelection,computeSelection){
    let userselection = userSelection.toLowerCase();

    if(userselection == "rock"){
        if(computeSelection == "Rock"){
            console.log("Its a draw!"+userselection+ "its equal to" + computeSelection);
            return "draw";
        }
        if(computeSelection == "Paper"){
            console.log("You lose!"+userselection+ "does not beat"+computeSelection);
            return "lose";
        }
        if(computeSelection == "Scissors"){
            console.log("You win!"+userselection+ "beats"+computeSelection);
            return "win";
        }
    }

    if(userselection == "paper"){
        if(computeSelection == "Rock"){
            console.log( "You win!"+userselection+ "beats"+computeSelection);
            return "win";
        }
        if(computeSelection == "Paper"){
            console.log( "Its a draws!"+userselection+ "its equal to" + computeSelection);
            return "draw";
        } 
        if(computeSelection == "Scissors"){
            console.log( "You lose!"+userselection+ "does not beat"+computeSelection);
            return "lose";
        }
    }
    
    if(userselection == "scissors"){
        if(computeSelection == "Rock"){
            console.log(  "You lose!"+userselection+ "does not beat"+computeSelection);
            return "lose";
        }
        if(computeSelection == "Paper"){
            console.log(  "You win!"+userselection+ "beats"+computeSelection);
            return "win";
        } 
        if(computeSelection == "Scissors"){
            console.log(  "Its a draws!"+userselection+ "its equal to" + computeSelection);
            return "draw";
        }
    }
}

function game(){
    let computer = 0;
    let user = 0;
    for(let i = 0; i<5 ;i++){
        let usuario_input = window.prompt("please enter paper,scissor or rock please man please");
        resultado = singleround(usuario_input,computerplay());
        if(resultado == "win"){
            user++;
        }
        if(resultado == "lose"){
            computer++;
        }
    }
    if(user > computer){
        console.log("user wins")
    }
    if(user < computer){
        console.log("computer wins")
    }
    if(user == computer){
        onsole.log("its a draw")
    }
}
game();