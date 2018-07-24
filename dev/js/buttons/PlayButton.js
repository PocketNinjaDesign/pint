
class PlayButton {
  constructor(targetId) {
    this.targetId = targetId;
    this.playPause;
  }

  init(thisPlayer) {
    this.playPause = document.getElementById('PlayPause');
    this.setButtonEvents(thisPlayer);
  }

  setButtonEvents(thisPlayer) {
    this.playPause.addEventListener('click', thisPlayer.setPlayPause.bind(thisPlayer));
  }

  setPlayingMode() {
    this.playPause.classList.remove('fa-play');
    this.playPause.classList.add('fa-pause');
  }

  setPausedMode() {
    this.playPause.classList.remove('fa-pause');
    this.playPause.classList.add('fa-play');
  }
}

export default PlayButton;