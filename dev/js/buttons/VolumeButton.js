import StaticRotationDragger from '../buttons/effectors/StaticRotationDragger';

class VolumeButton extends StaticRotationDragger {
  constructor(target) {
    super('PrimaryVolume', -90, 180, 'dot');
    this.target = target;
    this.staticDragger;
  }

  updateConnection(target) {
    this.target = target;
  }

  setValue(value) {
    this.target.setVolume(value);
  }
}

export default VolumeButton;