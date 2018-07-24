import PageManager from './page/PageManager';
import Player from './Player';

require('../sass/primary.scss');

const audioCtx = new (window.AudioContext || window.webkitAudioContext);
const myPlayer = new Player(audioCtx);

window.onload = () => {
  myPlayer.init();
  PageManager.init();
}
