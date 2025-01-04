const choices = ["rock", "paper", "scissors"];
let winners = [];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function startRound()  {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("click", () => {
        if (img.id) {
            playRound(img.id);
        }
    } ))
  }

  function displayAttacks(playerMove, computerMove) {
    let playerAttackBox = document.querySelector(".playerAttack");
    let computerAttackBox = document.querySelector(".computerAttack");

    playerAttackBox.innerHTML = "";
    computerAttackBox.innerHTML = "";

    let playerImg = document.createElement("img");
    playerImg.src = `images/${playerMove}.png`;
    playerImg.style.width = "200px";

    let computerImg = document.createElement("img");
    computerImg.src = `images/${computerMove}.png`;
    computerImg.style.width = "200px";

    playerAttackBox.appendChild(playerImg);
    computerAttackBox.appendChild(computerImg);

    

  }


  function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC === "scissors") ||
      (choiceP === "paper" && choiceC === "rock") ||
      (choiceP === "scissors" && choiceC === "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }

  function displayRoundWinner(winner) {
    if (winner == "Player") {
      document.querySelector(".winnerUi").textContent = "player";
    } else if (winner == "Computer") {
      document.querySelector(".winnerUi").textContent =
        "computer";
    } else {
      document.querySelector(".winnerUi").textContent = "tie";
    }
  }

  function displayResults() {
    let playerWins = winners.filter((item) => item == "Player").length;
    if (playerWins == 5) {
      document.querySelector(".winnerUi").textContent = "player won 5 rounds";
    } else {
      document.querySelector(".winnerUi").textContent =
        "computer won 5 rounds";
    }
    document.querySelector(".reset").style.display = "flex";
  }

  function trackWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = pWinCount;
    document.querySelector(".computerScore").textContent = cWinCount;
    document.querySelector(".ties").textContent = `ties: ${ties}`;
  }

  function countWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
  }

  function playRound(playerMove) {
    let computerMove = computerChoice();
    let winner = checkWinner(playerMove, computerMove);
    winners.push(winner);
    displayAttacks(playerMove, computerMove);
    console.log(playerMove);
    console.log(computerMove);
    console.log(winner);

    trackWins();

    displayRoundWinner(winner);
    wins = countWins();
    if (wins == 5) {
        displayResults();
    }
  }

  function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "0";
    document.querySelector(".computerScore").textContent = "0";
    document.querySelector(".ties").textContent = "ties: 0";
    document.querySelector(".winnerUi").textContent = "";
    document.querySelector(".reset").style.display = "none";

    let playerAttackBox = document.querySelector(".playerAttack");
    let computerAttackBox = document.querySelector(".computerAttack");
    playerAttackBox.innerHTML = "";
    computerAttackBox.innerHTML = "";
  }


startRound();


