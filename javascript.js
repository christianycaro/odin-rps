console.log("Hello World");
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const number = 3;
    function random(number) {
        return Math.floor(Math.random() * number);
      };
      return random(number);
};

const choice = getComputerChoice();

function assignComputerChoice (val) {
    if (val == 0) {
        return choices[0]
    } else if (val == 1) {
        return choices[1]
    } else if (val == 2) {
        return choices[2]
    };
};

const finalComputerchoice = assignComputerChoice(choice);
console.log(finalComputerchoice);

  