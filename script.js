"use strict";

const btnRockEl = document.querySelector(".btn-rock");
const btnPaperEl = document.querySelector(".btn-paper");
const btnScissorEl = document.querySelector(".btn-scissor");
const messageEl = document.querySelector(".message");
const compScoreEl = document.querySelector(".computer-score");
const userScoreEl = document.querySelector(".user-score");
const timesEl = document.querySelector(".times");
const btnNewGameEl = document.querySelector(".btn-new-game");

const computerElChoose = "RPS";
let computerScore = 1;
let userScore = 1;
let compScore = 0;
let perScore = 0;
let times = 10;
let gives = 1;
let match = 1;
let wonMatch = 0;
let lossMatch = 0;
let drawMatch = 0;

btnRockEl.addEventListener("click", function (e) {
  const computerMove = computerElChoose.charAt(
    Math.floor(Math.random() * computerElChoose.length)
  );

  if (btnRockEl && computerMove === "P") {
    lossMatch += match;
    messageEl.textContent = ` User choose the Rock Vs paper. You Lost the ${lossMatch} match`;
    compScore += computerScore;
    compScoreEl.textContent = compScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      compScoreEl.textContent = 0;
      userScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnRockEl && computerMove === "S") {
    wonMatch += match;
    messageEl.textContent = `User choose the Rock Vs Scissors. You Won the ${wonMatch} match`;
    perScore += userScore;
    userScoreEl.textContent = perScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      userScoreEl.textContent = 0;
      compScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnRockEl && computerMove === "R") {
    drawMatch += match;
    messageEl.textContent = `User choose the Rock Vs Rock. Draw the ${drawMatch} match`;
    times -= gives;
    timesEl.textContent = times;
  }
  if (times === 0) {
    if (perScore > compScore) {
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
      timesEl.textContent = "🥳🏆🥝🥝🎉";
    } else if (perScore < compScore) {
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(#fff 0%, #ff6b6b 100%)";
      timesEl.textContent = "😭😢";
    } else {
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(#fff 0%, #a5d8ff 100%)";
      timesEl.textContent = "🙂😀";
    }
  } else if (times < 0) {
    timesEl.textContent = 0;
    userScoreEl.textContent = 0;
    compScoreEl.textContent = 0;
    messageEl.textContent = "Sir/Mam Next Time! Come";
  }
});

btnPaperEl.addEventListener("click", function () {
  const computerMove = computerElChoose.charAt(
    Math.floor(Math.random() * computerElChoose.length)
  );

  if (btnPaperEl && computerMove === "S") {
    lossMatch += match;
    messageEl.textContent = `User choose the Paper Vs Scissor. You Lost the ${lossMatch} match`;
    compScore += computerScore;
    compScoreEl.textContent = compScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      compScoreEl.textContent = 0;
      userScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnPaperEl && computerMove === "R") {
    wonMatch += match;
    messageEl.textContent = `User choose the Paper Vs Rock. You Won the ${wonMatch} match`;
    perScore += userScore;
    userScoreEl.textContent = perScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      userScoreEl.textContent = 0;
      compScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnPaperEl && computerMove === "P") {
    drawMatch += match;
    messageEl.textContent = `User choose the Paper Vs Paper. Draw the ${drawMatch} match`;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      userScoreEl.textContent = 0;
      compScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  }
});

btnScissorEl.addEventListener("click", function () {
  const computerMove = computerElChoose.charAt(
    Math.floor(Math.random() * computerElChoose.length)
  );

  if (btnScissorEl && computerMove === "R") {
    lossMatch += match;
    messageEl.textContent = `User choose the Scissor Vs Rock. You Lost the ${lossMatch} match`;
    compScore += computerScore;
    compScoreEl.textContent = compScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      compScoreEl.textContent = 0;
      userScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnScissorEl && computerMove === "P") {
    wonMatch += match;
    messageEl.textContent = `User choose the Scissor Vs Paper. You Won the ${wonMatch} match`;
    perScore += userScore;
    userScoreEl.textContent = perScore;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      userScoreEl.textContent = 0;
      compScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  } else if (btnScissorEl && computerMove === "P") {
    drawMatch += match;
    messageEl.textContent = `User choose the Scissor Vs Scissor. Draw the ${drawMatch} match`;
    times -= gives;
    timesEl.textContent = times;
    if (times === 0) {
      if (perScore > compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#ff9a2f, 	#ffff, 	#0a8901)";
        timesEl.textContent = "🥳🏆🥝🥝🎉";
      } else if (perScore < compScore) {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #ff6b6b 100%)";
        timesEl.textContent = "😭😢";
      } else {
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(#fff 0%, #a5d8ff 100%)";
        timesEl.textContent = "🙂😀";
      }
    } else if (times < 0) {
      timesEl.textContent = 0;
      userScoreEl.textContent = 0;
      compScoreEl.textContent = 0;
      messageEl.textContent = "Sir/Mam Next Time! Come";
    }
  }
});

btnNewGameEl.addEventListener("click", function () {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right,#fff 0%, #ced4da 100%)";
  timesEl.textContent = 10;
  userScoreEl.textContent = 0;
  compScoreEl.textContent = 0;
  messageEl.textContent = "Starting...";
  computerScore = 1;
  userScore = 1;
  compScore = 0;
  perScore = 0;
  times = 10;
  gives = 1;
  match = 1;
  wonMatch = 0;
  lossMatch = 0;
  drawMatch = 0;
});
