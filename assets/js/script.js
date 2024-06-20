const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');
const user=document.getElementById('user-choiceDisplay');
const computer=document.getElementById('computer-choiceDisplay');

const userChoices=[rock, paper, scissors, lizard, spock];
const computerChoices=['rock','paper','scissors','lizard','spock'];

const score=document.getElementById('score');

let  userScore=0;
let computerScore=0;


userChoices.forEach((choice, index) => {
    choice.addEventListener('click', () => playGame(computerChoices[index]));
});




function playGame(userChoice){
    const random=Math.floor(Math.random() * computerChoices.length);
    const computerChoice= computerChoices[random];

    if (userChoice===computerChoice){
        score.textContent='its a draw';
        }
        else if(userChoice ==='rock'){
            if(computerChoice ==='paper' || computerChoice ==='spock' ){
                score.textContent='Computer Won';
                computerScore++;
            }else {
                score.textContent='User Won';
                userScore++;
            }
        }
        else if(userChoice ==='paper'){
            if (computerChoice ==='scissors' || computerChoice ==='lizard'){
                score.textContent='Computer Won';
                computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
            }
        }
        else if(userChoice ==='scissors'){
            if (computerChoice ==='rock' || computerChoice ==='spock'){
                score.textContent='Computer Won';
                computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
            }
        }
        else if(userChoice ==='lizard'){
            if (computerChoice ==='rock' || computerChoice ==='scissors'){
        score.textContent='Computer Won';
        computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
                }
        }
        else if(userChoice ==='spock'){
            if (computerChoice ==='paper' || computerChoice ==='lizard'){
        score.textContent='Computer Won';
        computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
                }
            }

            updateScore();
    }
        function updateScore() {
            score.textContent=`User: ${userScore} - Computer: ${computerScore}`;
}
