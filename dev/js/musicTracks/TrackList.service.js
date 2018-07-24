
class TrackListService {
  constructor() {
    this.currentTrack = 1;

    this.list = [{
      title: 'Something',
      artist: 'DKSubconscious',
      src: 'audio/tracks/something.mp3',
    }, {
      title: 'Future Echoes',
      artist: 'DKSubconscious',
      src: 'audio/tracks/future-echoes.mp3',
    }, {
      title: 'Unchallenged',
      artist: 'DKSubconscious',
      src: 'audio/tracks/unchallenged.mp3',
    }, {
      title: 'The Last Swan Under A Nuclear Sky ',
      artist: 'DKSubconscious',
      src: 'audio/tracks/the-last-swan-under-a-nuclear-sky.mp3',
    }];
  }

  getCurrentTrackNumber() {
    return this.currentTrack;
  }

  getCurrentTrackData() {
    return this.list[this.currentTrack - 1];
  }

  getPreviousTrack() {
    if (this.currentTrack === 1) {
      this.currentTrack = this.list.length;
    }
    else {
      this.currentTrack -= 1;
    }

    return this.list[this.currentTrack - 1];
  }

  getNextTrack() {
    if (this.currentTrack === this.list.length) {
      this.currentTrack = 1;
    }
    else {
      this.currentTrack += 1;
    }

    return this.list[this.currentTrack - 1];
  }
}

export default new TrackListService();