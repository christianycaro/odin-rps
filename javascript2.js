const choices = ["Rock", "Paper", "Scissors"]; 
//setting up an array to assign values to the random numbers
const win = [[choices[0] + choices[2]], [choices[1] + choices[0]], [choices[2] + choices[1]]];
const lose = [[choices[2] + choices[0]], [choices[0] + choices[1]], [choices[1] + choices[2]]];
const tie = [[choices[0] + choices[0]], [choices[1] + choices[1]], [choices[2] + choices[2]]];

const startButton = document.querySelectorAll("div button");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let val
rockButton.addEventListener("click", () => {
    val = "rock";
});
paperButton.addEventListener("click", () => {
    val = "paper";
});
scissorsButton.addEventListener("click", () => {
    val = "scissors";
});

const results = document.querySelector("#results");
const container = document.querySelector("container");
let humanScore = 0;
let computerScore = 0;

function playGame() {

if (humanScore >= 5 || computerScore >= 5) {
    let gameResults = document.createElement("div");
    gameResults.textContent = declareWin(humanScore, computerScore);
    results.appendChild(gameResults);
    humanScore = 0;
    computerScore = 0;
    //declareWin(humanScore, computerScore);
    return;
} 

//let humanScore = 0;
//let computerScore = 0;



    function getHumanChoice() {
        function assignHumanChoice(val) {
            if (val == "rock") {
                return choices[0]
            } else if (val == "paper") {
                return choices[1]
            } else if (val == "scissors") {
                return choices[2]
            } else {
                return "not a valid answer"
            };
        };
        return assignHumanChoice(val);
    };

    let humanMove = getHumanChoice();
    const humanResults = document.createElement("div");
    humanResults.textContent = humanMove;
    results.appendChild(humanResults);

    console.log(humanMove);

    function getComputerChoice() {
        const number = 3;
        function random(n) { 
            return Math.floor(Math.random() * n);
        };
        //function from mdn web docs that generates a random number between 0 and a specified number
        const choice = random(number);
        //generates a random number between 0 and 3
        function assignComputerChoice (val) {
            if (val == 0) {
                return choices[0]
            } else if (val == 1) {
                return choices[1]
            } else if (val == 2) {
                return choices[2]
            };
        };
        //assigning each value in the array to one of the possible number values
        const finalComputerChoice = assignComputerChoice(choice);
        //plugging the randomly generated number into this function to assign rock paper or scissors to it
        return finalComputerChoice;
    };
    let computerMove = getComputerChoice();

    const compResults = document.createElement("div");
    compResults.textContent = computerMove;
    results.appendChild(compResults);

    console.log(computerMove);



    function playRound(a, b) {

    if ((a + b) == win[0]) {
        return "you win! rock beats scissors.";
    } else if ((a + b) == win[1]) {
        return "you win! paper beats rock."
    } else if ((a + b) == win[2]) {
        return "you win! scissors beats paper."
    };

    if ((a + b) == lose[0]) {
        return "you lose :( scissors loses to rock"
    } else if ((a + b) == lose[1]) {
        return "you lose :( rock loses to paper"
    } else if ((a + b) == lose[2]) {
        return "you lose :( paper loses to scissors"
    };

    if ((a + b) == tie[0]) {
        return "its a tie!"
    } else if ((a + b) == tie[1]) {
        return "its a tie!"
    } else if ((a + b) == tie[2]) {
        return "its a tie!"
    };

    };

    let humanWins;

    function roundWinner(a, b) {
        if ((a + b) == win[0] || (a + b) == win[1] || (a + b) == win[2]) {
            return humanWins = true; 
        } else if ((a + b) == lose[0] || (a + b) == lose[1] || (a + b) == lose[2]) {
            return humanWins = false;
        };
    };

    function incrementHumanWin() {
        if (roundWinner(humanMove, computerMove) == true) {
            return ++humanScore
        } else {
            return humanScore
        };
    }

    function incrementComputerWin() {
        if (roundWinner(humanMove, computerMove) == false) {
            return ++computerScore
        } else {
            return computerScore
        };
    }

    const roundResults = document.createElement("div");
    roundResults.textContent = playRound(humanMove, computerMove);
    results.appendChild(roundResults);

    console.log(playRound(humanMove, computerMove));

    const humanScoreResults = document.createElement("div");
    humanScoreResults.textContent = "Human:" + incrementHumanWin();
    results.appendChild(humanScoreResults);

    console.log("Human:" + incrementHumanWin());

    const compScoreResults = document.createElement("div");
    compScoreResults.textContent = "Computer:" + incrementComputerWin();
    results.appendChild(compScoreResults);
    
    console.log("Computer:" + incrementComputerWin());



console.log ("Human Score:" + humanScore + " Computer Score:" + computerScore);


function declareWin(x, y) {
    if (x > y) {
        return "You win this game :D"
    } else if (x < y) {
        return "You lose this game D:"
    } else if (x == y) {
        return "Nobody won!"
    };
};


};

startButton.forEach(button => {
    button.addEventListener("click", playGame);
});



