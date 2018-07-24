import PageManager from './PageManager';

class PageLanding {
  constructor() {
    this.enterButton;
  }

  init() {
    this.enterButton = document.getElementById('WelcomeButton');
    this.enterButton.addEventListener('click', () => {
      this.leaveLanding();
    });
  }

  leaveLanding() {
    // this is where all animations for leaving the landing page happen.
    // set promise
    this.enterButton.style.display = 'none';
    // then activate Player page
    PageManager.pageActivate('player');
  }
}

export default new PageLanding();