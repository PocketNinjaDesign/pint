
// Some links
// https://stackoverflow.com/questions/7862304/web-audio-api-how-can-i-re-start-the-playback-of-a-sound
// https://developers.google.com/web/updates/2012/01/Web-Audio-FAQ
// https://www.html5rocks.com/en/tutorials/webaudio/intro/#toc-play
// https://ericbidelman.tumblr.com/post/13471195250/web-audio-api-how-to-playing-audio-based-on-user


class WebAudio {
  constructor(audioTrackSrc, fftSize, barsTotal) {

    this.audioCtx = new (window.AudioContext || window.webkitAudioContext);
    this.audioSource;
    this.audioTrackSrc = audioTrackSrc;

    this.soundBuffer;
    this.currentTime = 0;

    this.fftSize = fftSize;
    this.barsTotal = barsTotal;
    // this.audioTrack = audioTrack;
    // this.audioSrc = this.audioCtx.createMediaElementSource(this.audioTrack);

    this.analyser = this.audioCtx.createAnalyser();
    this.gainNode = this.audioCtx.createGain();
    this.dataArray = [];
  }

  loadAudioTrack() {
    return window.fetch(this.audioTrackSrc)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer)
        .then(audioBuffer => {
          this.soundBuffer = audioBuffer;

          let status = document.getElementById('status');
          status.innerText = 'LOADED';
        })
      );
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
    // this.audioTrack.pause();
    // console.log('STOP: ', this.audioCtx.currentTime);
    this.audioSource.stop();
    this.currentTime = this.audioCtx.currentTime;
  }

  play() {
    // this.audioTrack.play();
    // play music
    this.audioSource = this.audioCtx.createBufferSource();
    this.audioSource.buffer = this.soundBuffer;
    this.audioSource.connect(this.audioCtx.destination);
    
    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.analyser.fftSize = this.fftSize;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
    this.analyser.getByteFrequencyData(this.dataArray);

    // AudioBufferSourceNode.start([when][, offset][, duration]);
    this.audioSource.start(0, this.currentTime);
  }
}

export default WebAudio;