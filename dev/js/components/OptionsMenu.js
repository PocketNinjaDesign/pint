
class OptionsMenu {
  constructor() {
    this.playerBttn;
    this.productionBttn;
    this.pageManager;
  }

  init(pageManager) {
    this.playerBttn = document.getElementById('OptionsMenuPlayer');
    this.productionBttn = document.getElementById('OptionsMenuProduction');
    this.pageManager = pageManager;

    this.setEvents();
  }

  setEvents() {
    this.playerBttn.addEventListener('click', () => {
      this.pageManager.pageShow('player');
    });

    this.productionBttn.addEventListener('click', () => {
      this.pageManager.pageShow('production');
    });
  }
}

export default new OptionsMenu();