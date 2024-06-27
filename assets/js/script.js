
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
const lizard=document.getElementById('lizard');
const spock=document.getElementById('spock');

const userChoices = document.querySelectorAll('button');
const userChoiceDisplay = document.getElementById('user-Choices');
const computerChoiceDisplay = document.getElementById('computer-Choices');

const scoreBoard = document.getElementById("score");
const gameScore = document.getElementById("gameScore");
const maxGames=9;

let score="" ;
let playerScore = parseInt(localStorage.getItem('userScore')) || 0;
let cpuScore = parseInt(localStorage.getItem('computerScore')) || 0;
let gamesPlayed=0;


const computerChoices=['rock','paper','scissors','lizard','spock'];

for (let button of userChoices) {
    button.addEventListener('click', function() {
        if (gamesPlayed < maxGames){
        const userChoice = this.getAttribute('aria-label');
        userChoiceDisplay.textContent = "User: " + userChoice;
        playGame(userChoice);
        } else{
            endGame();
        }
    });
}
function playGame( userChoice){
    gamesPlayed++;

    const random=Math.floor(Math.random() * computerChoices.length);
    const computerChoice= computerChoices[random];

    computerChoiceDisplay.textContent = "Computer: " + computerChoice;

    if (userChoice===computerChoice){
        score ='its a draw';
        console.log(score);
        }
        else if(userChoice ==='rock'){
            if(computerChoice ==='paper' || computerChoice ==='spock' ){
                score = 'Computer Won';
                cpuScore ++;
            }else {
                score ='User Won';
                playerScore++;
            }
        }
        else if(userChoices ==='paper'){
            if (computerChoice ==='scissors' || computerChoice ==='lizard'){
                score = 'Computer Won';
                cpuScore++;
                
            }else{
                score='User Won';
                playerScore++;
            }
        }
        else if(userChoices ==='scissors'){
            if (computerChoice ==='rock' || computerChoice ==='spock'){
                score ='Computer Won';
                cpuScore++;
            }else{
                score ='User Won';
                playerScore++;
            }
        }
        else if(userChoice ==='lizard'){
            if (computerChoice ==='rock' || computerChoice ==='scissors'){
        score='Computer Won';
        cpuScore++;
            }else{
                score='User Won';
                playerScore++;
            }
        }
        else if(userChoice ==='spock'){
            if (computerChoice ==='paper' || computerChoice ==='lizard'){
        score='Computer Won';
        cpuScore++;
            }else{
                score='User Won';
                playerScore ++;
                }
            }
            scoreBoard.innerText=score;
            updateScore();
            if(gamesPlayed >= maxGames){
                endGame();
            }
}
        function updateScore() {
        gameScore.textContent=`User: ${playerScore} - Computer: ${cpuScore}`;
        localStorage.getItem('userScore', userScore);
        localStorage.setItem('computerScore', computerScore)
}
        function endGame(){
            for (let button of userChoices){
                button.disabled=true;
            }
            scoreBoard.innerText=('Game over!  Thanks for playing.');
        }
            updateScore();