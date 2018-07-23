class PagePlayer {
  constructor() {
    this.topContainer = document.getElementById('TopContainer');
    this.bottomContainer = document.getElementById('BottomContainer');
    this.MusicPlayer = document.getElementById('MusicPlayer');
  }

  init() {
    this.topContainer.style.display = 'block';
    this.bottomContainer.style.display = 'block';
  }

  show() {
    this.MusicPlayer.style.display = 'block';
  }

  hide() {
    // Stop the music playing
    // animate the content out
    // return a promise of completion
    return new Promise((resolve) => {
      this.MusicPlayer.style.display = 'none';
      resolve();
    });
  }
}

export default new PagePlayer();
