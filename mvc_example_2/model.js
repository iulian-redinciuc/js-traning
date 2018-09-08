let gameModel = (() => {
  let state = {
    timer: CUSTOMIZATION.INITIAL_TIMER,
    gameStatus: undefined,
    clicks: 0
  };
  let subscribersList = [];
  let intervalID;

  function notifySubscribers() {
    subscribersList.forEach(subscriber => subscriber.notify(state));
  }

  let publicAPI = {
    register: subscriber => {
      subscribersList.push(subscriber);
      subscriber.notify(state);
    },
    play: () => {
      state.gameStatus = GAME_STATUS.PLAYING;
      notifySubscribers();
      intervalID = setInterval(() => {
        state.timer -= 1;
        if (state.timer === 0) {
          state.gameStatus = GAME_STATUS.OVER;
          clearInterval(intervalID);
          console.log("Lose!");
        }
        notifySubscribers();
      }, 1000);
    },
    pause: () => {
      state.gameStatus = GAME_STATUS.PAUSED;
      clearInterval(intervalID);
      notifySubscribers();
    },
    addPoint: () => {
      state.clicks++;
      if (state.clicks === CUSTOMIZATION.CLICKS_REQUIRED) {
        state.gameStatus = GAME_STATUS.WIN;
        clearInterval(intervalID);
        console.log("Win!");
      }
      notifySubscribers();
    },
    startOver: () =>{
        state.clicks = 0;
        state.timer = CUSTOMIZATION.INITIAL_TIMER;
        publicAPI.play();
    }
  };

  return publicAPI;
})();
