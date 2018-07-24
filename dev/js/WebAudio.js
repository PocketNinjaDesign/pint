class WebAudio {
  constructor(audioCtx, audioTrack, fftSize, barsTotal) {
    this.audioCtx = audioCtx;
    this.audioTrack = audioTrack;
    this.barsTotal = barsTotal;
    this.audioSrc = this.audioCtx.createMediaElementSource(this.audioTrack);

    this.analyser = this.audioCtx.createAnalyser();
    this.gainNode = this.audioCtx.createGain();

    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.analyser.fftSize = fftSize;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
    this.analyser.getByteFrequencyData(this.dataArray);
    this.setVolume(0.5);
  }

  getData() {
    return Array.from(this.dataArray).slice(0, this.barsTotal);
  }

  updateData() {
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.getData();
  }

  setVolume(newValue) {
    this.gainNode.gain.value = newValue;
  }

  getVolume() {
    return this.gainNode.gain.value;
  }

  pause() {
    this.audioTrack.pause();
  }

  play() {
    this.audioTrack.play();
  }
}

export default WebAudio;