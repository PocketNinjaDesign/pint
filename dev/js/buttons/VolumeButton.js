import AudioService from '../services/Audio.service';
import StaticRotationDragger from '../buttons/effectors/StaticRotationDragger';

class VolumeButton extends StaticRotationDragger {
  constructor() {
    super('PrimaryVolume', -90, 180, 'dot');
    this.staticDragger;
  }

  setValue(value) {
    AudioService.getTrack().setVolume(value);
  }
}

export default VolumeButton;