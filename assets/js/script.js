const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');

const userChoices=[rock,paper,scissor,lizard,spock];
const computerChoices=['rock','paper','scissor','lizard','spock'];


const score=document.getElementById('score');
const choices=document.querySelectorAll('.rpsls-main');

let  userChoice=0;
let computerChoice=0;

userChoices.addEventListener('click',()=>playGame(choices));


function playGame(userChoice){
    const userChoices=['rock','paper','scissors','lizard','spock'];
    const computerChoices=choices[Math.floor(Math.random()* computerChoices.length)];
    if (userChoice===computerChoice){
        score.textContent='its a draw';
        else if(userChoices=='rock'){
            if(computerChoice=='paper'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else {
                score.textContent=='User Won';
                userChoice++;
                userChoice++;userChoice;
                
            }
        }
        else if(userChoice=='paper'){
            if (computerChoice=='scissors'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won';
                userChoice++;
                userChoice++;userChoice;

            }
        }
        else if(userChoice=='scissors'){
            if (computerChoice=='lizard'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won';
                userChoice++;
                userChoice++;userChoice;
            }
}
        else if(userChoice=='lizard'){
            if (computerChoice=='spock'){
        score.textContent='Computer Won';
        computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won';
                userChoice++;
                userChoice++;userChoice;
    }
}
}
}

