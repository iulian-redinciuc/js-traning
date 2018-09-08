let startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function(){
    gameModel.play();
    startBtn.remove();
    document.body.appendChild(timerView(gameModel));
    document.body.appendChild(addPointsView(gameModel));
    document.body.appendChild(controlsView(gameModel));
    document.body.appendChild(endingGameView(gameModel));
})

