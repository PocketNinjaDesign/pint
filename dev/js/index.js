import PageManager from './page/PageManager';

import WebAudio from './WebAudio';
import Player from './Player';
import GraphicEqualizer from './components/GraphicEqualizer';
import TrackTimeline from './components/TrackTimeline';

require('../sass/primary.scss');

const equalizer = new GraphicEqualizer('GraphicEqualizer', 32, 138, 500);
const equalizerTop = new GraphicEqualizer('GraphicEqualizerTop', 32, 300, 100, '%');
const timeline = new TrackTimeline('TrackTimeline', 50, 73);

const audioCtx = new (window.AudioContext || window.webkitAudioContext);

const audioTrack = new Audio('audio/tracks/something.mp3');
const vinylSound = new Audio('audio/vinyl-sounds/vinyl-crackle-end-loop.mp3');
vinylSound.loop = true;
vinylSound.volume = 0.0;
vinylSound.play();

const waMusic = new WebAudio(audioCtx, audioTrack, 128, 32);
const waVinylSound = new WebAudio(audioCtx, vinylSound, 128, 32);
const myPlayer = new Player(waMusic, vinylSound);

myPlayer.setButtonEvents();

audioTrack.onended = () => {
  myPlayer.end();
  vinylSound.pause();
}


function draw() {
  requestAnimationFrame(draw);

  if (myPlayer.getPlayState()) {
    const audioData = waMusic.updateData();
    const vinylAudioData = waVinylSound.updateData();

    // Combine static vinyl and music to one audioData
    const audioDataOutput = audioData.map((val, index) => {
      return val + vinylAudioData[index];
    });

    equalizer.plotNewPositions(audioDataOutput);
    equalizerTop.plotNewPositions(audioDataOutput);
    timeline.setNewPosition(audioTrack.currentTime, audioTrack.duration);

    if (vinylSound.currentTime > 9) {
      vinylSound.currentTime = 0;
    }
  }
}



window.onload = () => {
  draw();
  PageManager.init();
  equalizer.init();
  equalizerTop.init();
  timeline.init();
}
