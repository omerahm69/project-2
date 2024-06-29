
"use strict";

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

userChoices.forEach((button) => {
    button.addEventListener('click', function() {
        if (gamesPlayed < maxGames){
        const userChoice = this.getAttribute('aria-label');
        userChoiceDisplay.textContent = "User: " + userChoice;
        playGame(userChoice);
        } else{
            endGame();
        }
    });
});
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
              //  console.log('Invalid user choice.');//
                
            }
            scoreBoard.innerText=score;
            updateScore();
            if(gamesPlayed >= maxGames){
                endGame();
            }
}
        function updateScore() {
        gameScore.textContent=`User: ${playerScore} - Computer: ${cpuScore}`;
        localStorage.getItem('playerScore', playerScore);
        localStorage.setItem('cpuScore', cpuScore);
}
        function endGame(){
            for (let button of userChoices){
                button.disabled=true;
            }
            scoreBoard.innerText=('Game over!  Thanks for playing.');
        }
            updateScore();