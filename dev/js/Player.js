import AudioService from './services/Audio.service';
import GraphicEqualizerService from './components/GraphicEqualizer.service';
import NextButton from './buttons/NextButton';
import PlayButton from './buttons/PlayButton';
import PreviousButton from './buttons/PreviousButton';
import TrackDetails from './musicTracks/TrackDetails';
import TrackListService from './musicTracks/TrackList.service';
import TrackTimeline from './components/TrackTimeline';
import VinylLP from './components/VinylLP';
import VolumeButton from './buttons/VolumeButton';

import Test from './Test';

class Player {
  constructor() {
    this.playState = false;
    this.playPauseButton;
    this.volumeBttn;
    this.timeline;
    this.frameLoop;
  }

  init() {
    console.log(Test.getNumber());

    PreviousButton.init();
    NextButton.init();
    PlayButton.init(this);

    TrackDetails.changeDetails(TrackListService.getCurrentTrackData());

    GraphicEqualizerService.addNewEqualizer('GraphicEqualizer', 32, 138, 500, 'px');
    GraphicEqualizerService.addNewEqualizer('GraphicEqualizerTop', 32, 300, 100, '%');

    this.timeline = new TrackTimeline('TrackTimeline', 50, 73);

    AudioService.setTrack();
    AudioService.setEffects();
    this.volumeBttn = new VolumeButton();

    AudioService.getTrack().onended = () => {
      this.end();
      AudioService.getFXTrack().pause();
      VinylLP.pause();
    }

    this.frameLoop = () => {
      requestAnimationFrame(this.frameLoop);

      if (this.playState) {
        const audioData = AudioService.updateTrackData();
        const vinylAudioData = AudioService.updateFXData();
        const trackCurrentTime = AudioService.getTrack().getAudioTrack().currentTime;
        const trackDuration = AudioService.getTrack().getAudioTrack().duration;

        // Combine static vinyl and music to one audioData
        const audioDataOutput = audioData.map((val, index) => {
          return val + vinylAudioData[index];
        });

        GraphicEqualizerService.UpdatePositions(audioDataOutput);

        this.timeline.setNewPosition(trackCurrentTime, trackDuration);

        if (AudioService.getFXTrack().currentTime > 9) {
          AudioService.getFXTrack().currentTime = 0;
        }
      }
    };

    this.start();
  }

  setPlayPause() {
    if (this.playState) {
      AudioService.getTrack().pause();
      AudioService.getFXTrack().pause();
      VinylLP.pause();
      PlayButton.setPausedMode();
    }
    else {
      AudioService.getTrack().play();
      AudioService.getFXTrack().play();
      VinylLP.play();
      PlayButton.setPlayingMode();
    }

    this.playState = !this.playState;
  }

  end() {
    if (this.playState) {
      PlayButton.setPausedMode();
      this.playState = false;
    }
  }

  getPlayState() {
    return this.playState;
  }

  start() {
    this.frameLoop();
    GraphicEqualizerService.initAll();
    this.timeline.init();
  }
}

export default new Player();
