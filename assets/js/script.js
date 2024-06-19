const userChoice=document.getElementById('user-choice');
const computerChoice=document.getElementById('computer-choice');
const score=document.getElementById('score');
const choices=document.querySelectorAll('.rpsls-main');

let  userChoice=0;
let computerChoice=0;

choices.addEventListener('click',()=>playGame(choices));


function playGame(userChoice){
    const choices=['rock','paper','scissors','lizard','spock'];
    const computerChoice=choices[Math.floor(Math.random()* choices.length)];
    if (userChoice===computerChoice){
        score.textContent='its a draw';
        else if(userChoice=='rock'){
            if(computerChoice=='paper'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else {
                score.textContent=='User Won'
                userChoice++;
                userChoice++;userChoice;
                
            }
        }
        else if(userChoice=='paper'){
            if (computerChoice=='scissors'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won'
                userChoice++;
                userChoice++;userChoice;

            }
        }
        else if(userChoice=='scissors'){
            if (computerChoice=='lizard'){
                score.textContent='Computer Won';
                computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won'
                userChoice++;
                userChoice++;userChoice;
            }
}
        else if(userChoice=='lizard'){
            if (computerChoice=='spock'){
        score.textContent='Computer Won';
        computerChoice++;computerChoice;
            }else{
                score.textContent=='User Won'
                userChoice++;
                userChoice++;userChoice;
    }
}
}
}