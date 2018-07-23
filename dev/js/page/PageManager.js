import OptionsMenu from '../components/OptionsMenu';
import PageLanding from './PageLanding';
import PagePlayer from './PagePlayer';
import PageProduction from './PageProduction';

class PageManager {
  constructor() {
  }

  init() {
    OptionsMenu.init(this);
    this.pageActivate('landing');
  }

  pageShow(pageName) {
    switch(pageName) {
      case 'player':
        PageProduction.hide().then(() => {
          // Once animation out has finished, show the page player mode
          PagePlayer.show();
        });
        break;
      case 'production':
        PagePlayer.hide().then(() => {
          // Once animation out has finished, show the page production mode
          PageProduction.show();
        });
        break;
      default:
        break;
    }
  }

  pageActivate(pageName) {
    switch(pageName) {
      case 'landing':
        PageLanding.init();
        break;
      case 'player':
        PagePlayer.init();
        break;
      case 'production':
        PageProduction.init();
        break;
      default:
        break;
    }
  }
}

export default new PageManager();