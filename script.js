//Random move by computer
function getComputerchoice(){
    let choices = ['rock','paper','scissor']
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
// T0 determine the winner
function determineWinner(playerChoice,computerChoice){
    if(computerChoice === playerChoice){
        return "It is a tie.";
    }
    if(
        (playerChoice === 'rock' && computerChoice === 'scissor')||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')){
            return 'You win!';
        }
    return 'Computer win!';
}
//Main function
function playgame(playerChoice){
    const computerChoice = getComputerchoice();
    const result = determineWinner(playerChoice,computerChoice);
    document.getElementById('result').innerHTML = `You chose ${playerChoice}<br>
    Computer chose ${computerChoice}<br>
    ${result}`;
    // document.getElementById('reset_btn').style.display = 'inline';
}
//Reset function
// function resetGame(){
//     document.getElementById('result').innerHTML = "";
//     document.getElementById('reset_btn').style.display = 'none';
// }

document.getElementById('rock_txt').addEventListener("click",()=>{
    playgame('rock');
});
document.getElementById('paper_txt').addEventListener("click",()=>{
    playgame('paper');
});
document.getElementById('scissor_txt').addEventListener("click",()=>{
    playgame('scissor');
});

// document.getElementsById("reset_btn").addEventListener("click",resetGame);