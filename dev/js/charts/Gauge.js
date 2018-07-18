class Gauge {
  constructor(id, value) {
    zingchart.render({
      id: id,
      data: {
        type: 'gauge',
        height: '150',
        width: '150',
        'scale-r': {
          aperture: 150,
          values: '0:300:300',
          ring: {
            size: 10,
          }
        },
        scale: {
          'size-factor': '80%'
        },
        series: [{
          values: [value]
        }],
      }
    });
  }

  update(id, value) {
    // console.log(id, value);
    zingchart.exec(id, 'setseriesdata', {
      data: [{
        values: [value]
      }]
    });
  }
}

export default Gauge;