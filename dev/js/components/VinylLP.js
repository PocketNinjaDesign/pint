
class VinylLP {
  constructor() {
    this.vinyl = document.getElementById('VinylLP');
    this.dust = this.vinyl.getElementsByClassName('lp-dust')[0];
    this.visual = this.vinyl.getElementsByClassName('visual')[0];
  }

  play() {
    this.dust.classList.add('anim-spin');
    this.visual.classList.add('anim-spin');
  }

  pause() {
    this.dust.classList.remove('anim-spin');
    this.visual.classList.remove('anim-spin');
  }
}

export default new VinylLP();