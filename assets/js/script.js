const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');


const userChoices = document.querySelectorAll('button');
const userChoiceDisplay = document.getElementById('user-Choices');
const computerChoiceDisplay = document.getElementById('computer-Choices');

var score="" ;

let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

const computerChoices=['rock','paper','scissors','lizard','spock'];

for (let button of userChoices) {
    button.addEventListener('click', function() {
        const userChoice = this.getAttribute('aria-label');
        userChoiceDisplay.textContent = "User: " + userChoice;
        playGame(userChoice);
    });
}

function playGame( userChoice){
    const random=Math.floor(Math.random() * computerChoices.length);
    const computerChoice= computerChoices[random];

    computerChoiceDisplay.textContent = "Computer: " + computerChoice;


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
        else if(userChoices ==='paper'){
            if (computerChoice ==='scissors' || computerChoice ==='lizard'){
                score.textContent='Computer Won';
                computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
            }
        }
        else if(userChoices ==='scissors'){
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

        console.log(computerScore);
            }else{
                score.textContent='User Won';
                userScore++;
                }
            }
        
            document.getElementById("score").innerHTML= userScore + "  "  + computerChoice;
}       updateScore();
            
        function updateScore() {
            score.textContent=`User: ${userScore} - Computer: ${computerScore}`;

            
}
                