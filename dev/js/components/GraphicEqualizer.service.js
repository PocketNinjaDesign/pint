import GraphicEqualizer from './GraphicEqualizer';

class GraphicEqualizerService {
  constructor() {
    this.list = [];
  }

  initAll() {
    for(let i = 0; i < this.list.length; i += 1) {
      this.list[i].equalizer.init();
    }
  }

  addNewEqualizer(targetId, totalBars, height, width, measurement) {
    this.list = [...this.list, {
      name: targetId,
      equalizer: new GraphicEqualizer(targetId, totalBars, height, width, measurement),
    }];
  }

  UpdatePositions(data) {
    for(let i = 0; i < this.list.length; i += 1) {
      this.list[i].equalizer.plotNewPositions(data);
    }
  }
}

export default new GraphicEqualizerService();