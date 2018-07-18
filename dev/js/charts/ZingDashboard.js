class ZingDashboard {
  constructor(chartId, data) {
    this.chartId = chartId;
    this.myConfig = {
      layout: '3x6',
      graphset: this.generateConfig(data),
    }
  }

  generateConfig(data) {
    let graphset = [];
    console.log(data.length);

    for(let i = 0; i < data.length; i += 1) {
      graphset.push(this.generateGraphItem(data[i]));
    }

    return graphset;
  }

  generateGraphItem(value) {
    return {
      type:"gauge",
      series:[  
        { values: [value, 300]}
      ]
    }
  }

  updateConfig(newData) {
    // this.myConfig = {
    //   layout: '4x9',
    //   graphset: this.generateConfig(newData),
    // }
    // this.activate();
    for(let i = 0; i < newData.length; i += 1) {
      console.log(newData[i]);
      zingchart.exec(this.chartId, 'setseriesvalues', {
        'graphid': i,
        'values': newData[i]
      });
    }
  }

  activate() {
    zingchart.render({
      id: this.chartId,
      data: this.myConfig,
      height: 800,
      width: '100%',
    });
  }
}

export default ZingDashboard;