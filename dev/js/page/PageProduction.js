import PagePlayer from './PagePlayer';

class PageProduction {
  constructor() {
    this.MusicProduction = document.getElementById('ProductionView');
  }

  init() {
  }

  show() {
    this.MusicProduction.style.display = 'block';
  }

  hide() {
    return new Promise((resolve) => {
      this.MusicProduction.style.display = 'none';
      resolve();
    });
  }
}

export default new PageProduction();
