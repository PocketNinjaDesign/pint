import Gauge from './Gauge';

class GaugeList {
  constructor(container) {
    this.gaugeContainer = document.getElementById(container);
    this.list = [];
    this.counter = 0;
  }

  createList(data) {
    for(let i = 0; i < data.length; i += 1) {
      this.addItem(data[i]);
    }
  }

  updateList(data) {
    for(let i = 0; i < data.length; i += 1) {
      const listItem = this.list[i];
      listItem.gauge.update(listItem.id, data[i]);
    }
  }

  addItem(data) {
    const newId = `gauge${this.counter}`;
    let container = document.createElement("div");
    container.setAttribute('id', newId);
    container.setAttribute('class', 'gauge-wrapper');

    this.gaugeContainer.appendChild(container);

    this.list[this.counter] = {
      id: newId,
      gauge: new Gauge(newId, data)
    };

    this.counter += 1;
  }
}

export default GaugeList;