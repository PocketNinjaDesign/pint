import Hammer from 'hammerjs';

import PageManager from './page/PageManager';

import WebAudio from './WebAudio';
import Player from './Player';

require('../sass/primary.scss');

// let volume = document.getElementById('Volume');
// let mc = new Hammer(volume);
// let rotate = 0;

// mc.get('pan').set({
//   direction: Hammer.DIRECTION_VERTICAL
// });

// mc.on("panup pandown press", (ev) => {
//   // console.log(`gesture: ${ev.type}`);
//   console.log(ev.velocityY);
//   rotate += ev.velocityY;
//   volume.style.transform = `rotate(${rotate}deg)`;
// });


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

zingchart.render({
  id: 'chart',
  height: '200',
  borderWidth: 10,
  data: {
    "scale-x": {
      "line-color":"#0f1011",
      item: {
        "font-color": "#0f1011"
      },
      guide: {
        visible: 0
      }
    },
    "scale-y":{
      "line-color":"#0f1011",
      item: {
        "font-color": "#0f1011"
      }
    },
    backgroundColor: 'none',
    type: 'bar',
    plot: {
      'border-radius': '10px',
    },
    series: [{
      values: waMusic.getData(),
      "background-color":"#6666FF #FF0066",
    }],
  }
});



function draw() {
  requestAnimationFrame(draw);

  if (myPlayer.getPlayState()) {
    const audioData = waMusic.updateData();
    const vinylAudioData = waVinylSound.updateData();

    // Combine static vinyl and music to one audioData
    const audioDataOutput = audioData.map((val, index) => {
      return val + vinylAudioData[index];
    });

    zingchart.exec('chart', 'setseriesdata', {
      data: [{
        values: audioDataOutput,
        "background-color":"#4a7a8c #FF0066 #fc0",
      }]
    });

    if (vinylSound.currentTime > 9) {
      vinylSound.currentTime = 0;
    }
  }
}



window.onload = () => {
  draw();
  PageManager.init();
}
