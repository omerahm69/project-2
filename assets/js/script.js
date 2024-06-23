const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');

const userChoices=document.querySelectorAll('button');
for (i of userChoices){
    i.addEventListener('click', function() {
        console.log('userChoices');
        
    })
}

const computerChoices=['rock','paper','scissors','lizard','spock'];

const score=document.getElementById('score');

let  userScore=0;
let computerScore=0;

function playGame( userChoices){
    const random=Math.floor(Math.random() * computerChoices.length);
    const computerChoice= computerChoices[random];

    console.log(userChoices);
    console.log(computerChoice);

    if (userChoices===computerChoice){
        score.textContent='its a draw';
        }
        else if(userChoices ==='rock'){
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
        else if(userChoices ==='lizard'){
            if (computerChoice ==='rock' || computerChoice ==='scissors'){
        score.textContent='Computer Won';
        computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
                }
        }
        else if(userChoices ==='spock'){
            if (computerChoice ==='paper' || computerChoice ==='lizard'){
        score.textContent='Computer Won';
        computerScore++;
            }else{
                score.textContent='User Won';
                userScore++;
                }
            }
            playGame();
            
            userChoiceDisplay.textContent="You chose: " + userChoices;
            computerChoice.textContent="Computer chose: " + computerChoice;
    }
        function updateScore() {
            score.textContent=`User: ${userScore} - Computer: ${computerScore}`;
}
            updateScore();
