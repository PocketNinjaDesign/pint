import Hammer from 'hammerjs';

class StaticRotationDragger {
  constructor(targetBttn, startAngle, angleLength, rotationTarget = undefined) {
    this.bttn = document.getElementById(targetBttn);
    this.rotationTarget = (rotationTarget !== undefined)?
      this.bttn.getElementsByClassName(rotationTarget)[0] : this.bttn;
    this.minAngle = startAngle;
    this.maxAngle = this.minAngle + angleLength;
    this.angleLength = angleLength;
    this.mc = new Hammer(this.bttn);
    this.rotate = 0;
    this.setEvents();
  }

  setEvents() {
    this.mc.on("panup pandown press", (ev) => {
      let velocity = ev.velocityY * 5;
      this.rotate = Math.min(Math.max(this.minAngle, this.rotate + velocity), this.maxAngle);
      this.rotationTarget.style.transform = `rotate(${this.rotate}deg)`;
      this.setValue((this.rotate + this.angleLength / 2) / this.angleLength);
    });
  }

  setValue(value) {
    // returns a float between 0 - 1
    // need to figure this out
  }
}

export default StaticRotationDragger;