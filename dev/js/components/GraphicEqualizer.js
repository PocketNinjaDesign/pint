
class GraphicEqualizer {
  constructor(targetId, totalBars, height, width, measurement = 'px') {
    this.targetId = targetId;
    this.targetContainer;
    this.totalBars = totalBars;
    this.width = width;
    this.visualizerHeight = height;
    this.barList = [];
    this.measurement = measurement;
  }

  init() {
    this.targetContainer = document.getElementById(this.targetId);
    this.generateNewEqualizer();
  }

  generateNewEqualizer() {
    for(let i = 0; i < this.totalBars; i += 1) {
      this.barList[i] = document.createElement("div");
      this.barList[i].setAttribute('class', 'bar');
      this.barList[i].style.width = `${this.width / this.totalBars}${this.measurement}`;
      this.barList[i].innerHTML = '<div class="inner"><div class="value"></div></div>'
      this.targetContainer.appendChild(this.barList[i]);
    }
  }

  plotNewPositions(data) {
    // console.log(data[0], this.barList.length);
    for(let i = 0; i < this.barList.length; i += 1) {
      let bar = this.barList[i].getElementsByClassName('value')[0];
      // console.log(`${this.visualizerHeight / 300 * data[i]}px`);
      bar.style.height = `${this.visualizerHeight / 300 * data[i]}px`;
    }
  }
}

export default GraphicEqualizer;