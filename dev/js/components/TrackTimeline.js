
class TrackTimeline {
  constructor(targetId, startAngle, endAngle) {
    this.targetId = targetId;
    this.targetContainer;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.angleLength = this.endAngle - this.startAngle
  }

  init() {
    this.targetContainer = document.getElementById(this.targetId);
  }

  setNewPosition(currentTime, duration) {
    const percentage = currentTime / duration;
    this.targetContainer.style.transform = `rotate(${this.startAngle + (this.angleLength * percentage)}deg)`;
  }
}

export default TrackTimeline;