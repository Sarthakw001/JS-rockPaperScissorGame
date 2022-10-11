let userScore = 0;
let pcScore = 0;

function whoIsWinner(user, computer) {
  if (user == "Rock") {
    if (computer == "Rock") {
      return " TIE";
    } else if (computer == "Scissor") {
      return " User";
    } else {
      return " Computer";
    }
  } else if (user == "Paper") {
    if (computer == "Paper") {
      return " TIE";
    } else if (computer == "Scissor") {
      return " Computer";
    } else {
      return " User";
    }
  } else {
    if (computer == "Scissor") {
      return " TIE";
    } else if (computer == "Rock") {
      return " Computer";
    } else {
      return " User";
    }
  }
}

function clickEvent() {
  let rpc = document.querySelectorAll(".choice");
  let user = document.getElementById("result-user-stat");
  let span = document.createElement("span");
  span.id = "rpc";
  user.appendChild(span);

  let computer = document.getElementById("result-comp-stat");
  let span1 = document.createElement("span");
  computer.appendChild(span1);

  let winner = document.getElementById("result-final-stat");
  let span2 = document.createElement("span");
  winner.appendChild(span2);

  let arr = ["Rock", "Paper", "Scissor"];

  rpc.forEach((val) => {
    val.addEventListener("click", () => {
      let value;
      if (val.id == "r") {
        span.innerText = " Rock";
        value = "Rock";
      } else if (val.id == "p") {
        span.innerText = " Paper";
        value = "Paper";
      } else {
        span.innerText = " Scissor";
        value = "Scissor";
      }
      let computerStat = arr[Math.floor(Math.random() * 3)];
      span1.innerText = computerStat;
      let winner = whoIsWinner(value, computerStat);
      span2.innerText = winner;

      if (winner == " User") {
        userScore++;
        document.getElementById("userScoreVal").innerText = userScore;
      } else if (winner == " Computer") {
        pcScore++;
        document.getElementById("compScoreVal").innerText = pcScore;
      } else {
        userScore = 0;
        pcScore = 0;
        document.getElementById("userScoreVal").innerText = userScore;
        document.getElementById("compScoreVal").innerText = pcScore;
      }
    });
  });
}
clickEvent();
