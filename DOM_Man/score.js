var p1 = document.getElementById('p1');

var p2 = document.getElementById('p2');

var score1Display = document.getElementById('score1');

var score2Display = document.getElementById('score2');

var resetButton = document.querySelector('#reset');

var numInput = document.querySelector("input[type ='number']"); //Carefull not to leave spaces in the method arguments.

var winningDisplay = document.querySelector("p span");

var p1Score = 0;

var p2Score = 0;

var gameOver = false;

var totalScore = 5;

p1.addEventListener('click', function(){
    console.log('Player 1 Clicked');
    if(!gameOver) {
        p1Score++;
        if(p1Score === totalScore) {
            score1Display.classList.add('winner');
            gameOver = true;
        }
        score1Display.textContent = p1Score;
    }  

})

p2.addEventListener('click', function(){
    console.log('Player 2 Clicked');
    if(!gameOver) {
        p2Score++;
        if(p2Score === totalScore) {
            score2Display.classList.add('winner');
            gameOver = true;
        }
        score2Display.textContent = p2Score;
    }
    
})

numInput.addEventListener('change', function(){
    //alert("changed");
    winningDisplay.textContent = this.value;

    totalScore =  Number(this.value);

    reset();
});

resetButton.addEventListener('click', function(){
    reset();
})


function reset() {
    p1Score = 0;
    p2Score = 0;
    score1Display.textContent = 0;
    score2Display.textContent = 0;
    score1Display.classList.remove('winner');
    score2Display.classList.remove('winner');
    gameOver = false;
}



