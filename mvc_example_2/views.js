function timerView(myModel) {
  let timerPlaceholder = document.createElement("span");
  timerPlaceholder.notify = state => {
    timerPlaceholder.innerHTML = `${state.timer} sec`;
  };
  myModel.register(timerPlaceholder);

  return timerPlaceholder;
}

function controlsView(myModel) {
  let gameBtns = document.createElement("div");

  let playBtn = document.createElement("button");
  playBtn.innerText = "Play";

  gameBtns.appendChild(playBtn);

  let pauseBtn = document.createElement("button");
  pauseBtn.innerText = "Pause";

  gameBtns.appendChild(pauseBtn);

  playBtn.addEventListener("click", myModel.play);
  pauseBtn.addEventListener("click", myModel.pause);

  gameBtns.notify = state => {
    switch (state.gameStatus) {
      case GAME_STATUS.PLAYING:
        playBtn.setAttribute("disabled", true);
        pauseBtn.removeAttribute("disabled");
        break;
      case GAME_STATUS.PAUSED:
        pauseBtn.setAttribute("disabled", true);
        playBtn.removeAttribute("disabled");
        break;
      case GAME_STATUS.OVER:
      case GAME_STATUS.WIN:
        pauseBtn.setAttribute("disabled", true);
        playBtn.setAttribute("disabled", true);
        break;
      default:
        break;
    }
  };

  myModel.register(gameBtns);

  return gameBtns;
}

function addPointsView(myModel) {
  let addPointBtn = document.createElement("button");
  addPointBtn.innerText = "Prinde-ma!";

  addPointBtn.addEventListener("click", () => {
    //schimba pozitia
    myModel.addPoint();
  });

  addPointBtn.notify = state => {
    switch (state.gameStatus) {
      case GAME_STATUS.PLAYING:
        addPointBtn.removeAttribute("disabled");
        break;
      case GAME_STATUS.PAUSED:
      case GAME_STATUS.WIN:
      case GAME_STATUS.OVER:
        addPointBtn.setAttribute("disabled", true);
        break;
      default:
        break;
    }
  };

  myModel.register(addPointBtn);

  return addPointBtn;
}

function endingGameView(myModel) {
  let endGameDiv = document.createElement("div");
  let yourStatus = document.createElement("p");

  endGameDiv.appendChild(yourStatus);

  let tryAgain = document.createElement("button");
  tryAgain.innerText = "Try again!";
  tryAgain.addEventListener("click", myModel.startOver);

  endGameDiv.appendChild(tryAgain);

  endGameDiv.style.display = "none";

  endGameDiv.notify = state => {
    switch (state.gameStatus) {
      case GAME_STATUS.OVER:
        endGameDiv.style.display = "block";
        yourStatus.innerText = "You lost!";
        break;

      case GAME_STATUS.WIN:
        endGameDiv.style.display = "block";
        yourStatus.innerText = "You win!";        
        break;
      case GAME_STATUS.PLAYING:
      case GAME_STATUS.PAUSED:
        endGameDiv.style.display = "none";
        break;
      default:
        break;
    }
  };

  myModel.register(endGameDiv);

  return endGameDiv;
}
