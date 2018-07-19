import WebAudio from './WebAudio';
import Player from './Player';
// import ZingDashboard from './charts/ZingDashboard';
// import GaugeList from './charts/GaugeList';

require('../sass/primary.scss');

const audioTrack = new Audio('something.mp3');
const myAudio = new WebAudio(audioTrack, 128, 32);
const myPlayer = new Player(myAudio);

myPlayer.setButtonEvents();

audioTrack.onended = () => {
  myPlayer.end();
}

// const gaugeEqualizer = new GaugeList('gaugeGrid');
// gaugeEqualizer.createList(myAudio.getData());

// const dialBoard = new ZingDashboard('newChart', myAudio.getData());
// dialBoard.activate();

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
      values: myAudio.getData(),
      "background-color":"#6666FF #FF0066",
    }],
  }
});

function draw() {
  requestAnimationFrame(draw);

  const audioData = myAudio.updateData();

  // gaugeEqualizer.updateList(audioData);
  // dialBoard.updateConfig(audioData);

  zingchart.exec('chart', 'setseriesdata', {
    data: [{
      values: audioData,
      "background-color":"#4a7a8c #FF0066 #fc0",
    }]
  });

  console.log('Status: ', audioTrack.duration, audioTrack.currentTime);
}

window.onload = () => {
  draw();
}
