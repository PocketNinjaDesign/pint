import AudioService from './services/Audio.service';
import PageManager from './page/PageManager';
import Player from './Player';
import Test from './Test';

require('../sass/primary.scss');

PageManager.init();

Test.add(100);
Test.add(56);

window.onload = () => {
  AudioService.init();
  Player.init();
}
