const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');

const userChoices=[rock, paper, scissor, lizard, spock];
const computerChoices=['rock','paper','scissor','lizard','spock'];


const score=document.getElementById('score');


let  userScore=0;
let computerScore=0;

userChoices.forEach((choice,index) => {
    choice.addEventListener('click', () => playGame(computerChoices[index]));

});


function playGame(userChoice){
    const random=Math.floor(Math.random()*computerChoices.length);
    const computerChoice= computerChoices[random];
    if (userChoice===computerChoice){
        score.textContent='its a draw';
    }
        else if(userChoice==='rock'){
            if(computerChoice==='paper'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else {
                score.textContent='User Won';
                userScore++;
                userChoice++;userChoice;
                
            }
        }
        else if(userChoice==='paper'){
            if (computerChoice==='scissors'){
                score.textContent='Computer Won';
                
            }else{
                score.textContent='User Won';
                userScore++;
                userChoice++;userChoice;

            }
        }
        else if(userChoice==='scissors'){
            if (computerChoice==='lizard'){
                score.textContent='Computer Won';
               
            }else{
                score.textContent='User Won';
                userScore++;
                userChoice++;userChoice;
            }
}
        else if(userChoice==='lizard'){
            if (computerChoice==='spock'){
        score.textContent='Computer Won';
        
            }else{
                score.textContent='User Won';
                userScore++;
                userChoice++;userChoice;
    }

    
}

}

updateScore();

function updateScore(){
    score.textContent=`User: ${userScore} - Computer: ${computerScore}`;
}
