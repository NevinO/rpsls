var computerChoice = "";
var userChoice = "";
function computerThink() {
  computerChoice = Math.floor(Math.random()*5);
  if(computerChoice === 1) {
    computerChoice = "rock";
  }
  else if(computerChoice === 2) {
    computerChoice = "paper";
  }
  else if(computerChoice === 3) {
    computerChoice = "scissors";
  }
  else if(computerChoice === 4) {
    computerChoice = "lizard";
  }
  else {
    computerChoice = "spock";
  }
}

function rockPick() {
  userChoice = "rock";
  computerThink();
  results();
  replay();
  function rock() {
    document.getElementById("rock").innerHTML = results;
  }
}

function paperPick() {
  userChoice = "paper";
  computerThink();
  results();
  replay();
}

function scissorsPick() {
  userChoice = "scissors";
  computerThink();
  results();
  replay();
}

function lizardPick() {
  userChoice = "lizard";
  computerThink();
  results();
  replay();
}

function spockPick() {
  userChoice = "spock";
  computerThink();
  results();
  replay();
}

function compare(choice1, choice2) {
  if (choice1 === choice2) {
    alert("It's a tie!");
  }
  else if(choice1 === "rock") {
    if (choice2 === "paper") {
      alert("Lose!");
    }
  }
  else if(choice1 === "rock") {
    if (choice2 === "scissors") {
      alert("Win!");
    }
  }
  else if(choice1 === "rock") {
    if (choice2 === "lizard") {
      alert("Win!");
    }
  }
  else if(choice1 === "rock") {
    if (choice2 === "spock") {
      alert("Lose!");
    }
  }
  else if(choice1 === "paper") {
    if (choice2 === "rock") {
      alert("Win!");
    }
  }
  else if(choice1 === "paper") {
    if (choice2 === "scissors") {
      alert("Lose!");
    }
  }
  else if(choice1 === "paper") {
    if (choice2 === "lizard") {
      alert("Lose!");
    }
  }
  else if(choice1 === "paper") {
    if (choice2 === "spock") {
      alert("Win!");
    }
  }
  else if(choice1 === "scissors") {
    if (choice2 === "rock") {
      alert("Lose!");
    }
  }
  else if(choice1 === "scissors") {
    if (choice2 === "paper") {
      alert("Win!");
    }
  }
  else if(choice1 === "scissors") {
    if (choice2 === "lizard") {
      alert("Win!");
    }
  }
  else if(choice1 === "scissors") {
    if (choice2 === "spock") {
      alert("Lose!");
    }
  }
  else if(choice1 === "lizard") {
    if (choice2 === "rock") {
      alert("Lose!");
    }
  }
  else if(choice1 === "lizard") {
    if (choice2 === "paper") {
      alert("Win!");
    }
  }
  else if(choice1 === "lizard") {
    if (choice2 === "scissors") {
      alert("Lose!");
    }
  }
  else if(choice1 === "lizard") {
    if (choice2 === "spock") {
      alert("Win!");
    }
  }
  else if(choice1 === "spock") {
    if (choice2 === "rock") {
      alert("Win!");
    }
  }
  else if(choice1 === "spock") {
    if (choice2 === "paper") {
      alert("Lose!");
    }
  }
  else if(choice1 === "spock") {
    if (choice2 === "scissors") {
      alert("Win!");
    }
  }
  else if(choice1 === "spock") {
    if (choice2 === "lizard") {
      alert("Lose!");
    }
  }
}

function results() {
  alert("You chose " + userChoice + ". Computer chose " + computerChoice + ".");
  compare(userChoice, computerChoice);  
}