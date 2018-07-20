class Player {
  constructor(audio, effectsAudio) {
    this.audio = audio;
    this.fx = effectsAudio;
    this.playState = false;
    this.playPause = document.getElementById('PlayPause');
  }

  setButtonEvents() {
    this.playPause.addEventListener('click', () => {
      if (this.playState) {
        this.audio.pause();
        this.setPausedMode();
        this.fx.pause();
      }
      else {
        this.audio.play();
        this.setPlayingMode();
        this.fx.play();
      }

      this.playState = !this.playState;
    });
    
    // this.volMaxBttn.addEventListener('click', () => {
    //   this.audio.setVolume(1);
    // });
    
    // this.volHalfBttn.addEventListener('click', () => {
    //   this.audio.setVolume(0.5);
    // });
    
    // this.volMinBttn.addEventListener('click', () => {
    //   this.audio.setVolume(0.1);
    // });
    
    // this.volPlusBttn.addEventListener('click', () => {
    //   let currentVolume = this.audio.getVolume();
    //   this.audio.setVolume(Math.min(1, currentVolume += 0.1));
    // });
    
    // this.volMinusBttn.addEventListener('click', () => {
    //   let currentVolume = this.audio.getVolume();
    //   this.audio.setVolume(Math.max(0, currentVolume -= 0.1));
    // });
  }

  setPlayingMode() {
    this.playPause.classList.remove('fa-play');
    this.playPause.classList.add('fa-pause');
  }

  setPausedMode() {
    this.playPause.classList.remove('fa-pause');
    this.playPause.classList.add('fa-play');
    this.fx.play();
  }

  end() {
    if (this.playState) {
      this.setPausedMode();
      this.playState = false;
    }
  }

  getPlayState() {
    return this.playState;
  }
}

export default Player;