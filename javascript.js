
const choices = ["Rock", "Paper", "Scissors"]; 
//setting up an array to assign values to the random numbers
const humanScore = 0;
const computerScore = 0;
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


function getHumanChoice() {
    const humanChoice = prompt();
    const humanChoice2 = humanChoice.toLowerCase();
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
    return assignHumanChoice(humanChoice2);
};

let humanMove = getHumanChoice();


function playRound(a, b) {
   const win = [[choices[0] + choices[2]], [choices[1] + choices[0]], [choices[2] + choices[1]]];
   const lose = [[choices[2] + choices[0]], [choices[0] + choices[1]], [choices[1] + choices[2]]];

   if ((a + b) == win[0]) {
    return "you win! rock beats scissors."
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

}
