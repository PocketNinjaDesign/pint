import TrackListService from '../musicTracks/TrackList.service';
import WebAudio from '../WebAudio';

class AudioService {
  constructor() {
    this.audioCtx;
    this.track;
    this.vinylFX;
    this.productionTrackList = [];
  }

  init() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext);

    this.productionTrackList = [{
      title: 'something',
      track: new WebAudio('audio/tracks/something.mp3', 128, 32),
    }, {
      title: 'Future Echoes',
      track: new WebAudio('audio/tracks/future-echoes.mp3', 128, 32),
    }, {
      title: 'Unchallenged',
      track: new WebAudio('audio/tracks/unchallenged.mp3', 128, 32),
    }, {
      title: 'The Last Swan Under A Nuclear Sky ',
      track: new WebAudio('audio/tracks/the-last-swan-under-a-nuclear-sky.mp3', 128, 32),
    }];
  }

  updateTrackData() {
    return this.track.updateData();
  }

  updateFXData() {
    return this.vinylFX.updateData();
  }

  getAudioCtx() {
    return this.audioCtx;
  }

  getTrack() {
    return this.track;
  }

  getFXTrack() {
    return this.vinylFX;
  }

  setTrack() {
    this.track = new WebAudio(TrackListService.getCurrentTrackData().src, 128, 32);
  }

  setEffects() {
    this.vinylFX = new WebAudio('audio/vinyl-sounds/vinyl-crackle-end-loop.mp3', 128, 32, 0.1)
  }
}

export default new AudioService();