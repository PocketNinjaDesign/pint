import GraphicEqualizer from './components/GraphicEqualizer';
import PlayButton from './buttons/PlayButton';
import TrackDetails from './musicTracks/TrackDetails';
import TrackListService from './musicTracks/TrackList.service';
import TrackTimeline from './components/TrackTimeline';
import VinylLP from './components/VinylLP';
import VolumeButton from './buttons/VolumeButton';
import WebAudio from './WebAudio';

class Player {
  constructor(audioCtx) {
    this.audioCtx = audioCtx;
    this.playState = false;
    this.playPauseButton;
    this.volumeBttn;

    this.equalizer;
    this.equalizerTop;
    this.timeline;

    this.waMusic;
    this.waVinylSound;

    this.frameLoop;

    this.vinylLP;

    this.nextTrackButton;
    this.previousTrackButton;
  }

  init() {
    this.playPauseButton = new PlayButton('PlayPause');
    this.playPauseButton.init(this);

    this.nextTrackButton = document.getElementById('NextTrack');
    this.previousTrackButton = document.getElementById('RewindTrack');

    this.nextTrackButton.addEventListener('click', () => {
      const data = TrackListService.getNextTrack();
      TrackDetails.changeDetails(data);
      this.waMusic.getAudioTrack().pause();
      this.waMusic = new WebAudio(this.audioCtx, data.src, 128, 32);

      if (this.playState) {
        this.waMusic.getAudioTrack().play();
      }
    });

    this.previousTrackButton.addEventListener('click', () => {
      if (this.waMusic.getAudioCurrentTime() < 10) {
        const data = TrackListService.getPreviousTrack();
        TrackDetails.changeDetails(data);
        this.waMusic.getAudioTrack().pause();
        this.waMusic = new WebAudio(this.audioCtx, data.src, 128, 32);

        if (this.playState) {
          this.waMusic.getAudioTrack().play();
        }
      }
    });

    TrackDetails.changeDetails(TrackListService.getCurrentTrackData());

    this.vinylLP = new VinylLP('VinylLP');

    this.equalizer = new GraphicEqualizer('GraphicEqualizer', 32, 138, 500);
    this.equalizerTop = new GraphicEqualizer('GraphicEqualizerTop', 32, 300, 100, '%');
    this.timeline = new TrackTimeline('TrackTimeline', 50, 73);

    this.waMusic = new WebAudio(this.audioCtx, TrackListService.getCurrentTrackData().src, 128, 32);
    this.waVinylSound = new WebAudio(this.audioCtx, 'audio/vinyl-sounds/vinyl-crackle-end-loop.mp3', 128, 32, 0.1);
    this.volumeBttn = new VolumeButton(this.waMusic);

    this.waMusic.getAudioTrack().onended = () => {
      this.end();
      this.waVinylSound.getAudioTrack().pause();
      this.vinylLP.pause();
    }

    this.frameLoop = () => {
      requestAnimationFrame(this.frameLoop);

      if (this.playState) {
        const audioData = this.waMusic.updateData();
        const vinylAudioData = this.waVinylSound.updateData();

        // Combine static vinyl and music to one audioData
        const audioDataOutput = audioData.map((val, index) => {
          return val + vinylAudioData[index];
        });

        this.equalizer.plotNewPositions(audioDataOutput);
        this.equalizerTop.plotNewPositions(audioDataOutput);
        this.timeline.setNewPosition(this.waMusic.getAudioTrack().currentTime, this.waMusic.getAudioTrack().duration);

        if (this.waVinylSound.getAudioTrack().currentTime > 9) {
          this.waVinylSound.getAudioTrack().currentTime = 0;
        }
      }
    };

    this.start();
  }

  setPlayPause() {
    if (this.playState) {
      this.waMusic.getAudioTrack().pause();
      this.waVinylSound.getAudioTrack().pause();
      this.vinylLP.pause();
      this.playPauseButton.setPausedMode();
    }
    else {
      this.waMusic.getAudioTrack().play();
      this.waVinylSound.getAudioTrack().play();
      this.vinylLP.play();
      this.playPauseButton.setPlayingMode();
    }

    this.playState = !this.playState;
  }

  end() {
    if (this.playState) {
      this.playPauseButton.setPausedMode();
      this.playState = false;
    }
  }

  getPlayState() {
    return this.playState;
  }

  start() {
    this.frameLoop();
    this.equalizer.init();
    this.equalizerTop.init();
    this.timeline.init();
  }
}

export default Player;
