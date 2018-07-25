
class PlayButton {
  constructor() {
    this.bttn;
  }

  init(thisPlayer) {
    this.bttn = document.getElementById('PlayPause');
    this.setButtonEvents(thisPlayer);
  }

  setButtonEvents(thisPlayer) {
    this.bttn.addEventListener('click', thisPlayer.setPlayPause.bind(thisPlayer));
  }

  setPlayingMode() {
    this.bttn.classList.remove('fa-play');
    this.bttn.classList.add('fa-pause');
  }

  setPausedMode() {
    this.bttn.classList.remove('fa-pause');
    this.bttn.classList.add('fa-play');
  }
}

export default new PlayButton();