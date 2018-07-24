
class TrackDetails {
  constructor() {
    this.trackDetails = document.getElementById('TrackDetails');
    this.title = this.trackDetails.getElementsByClassName('track-name')[0];
    this.artist = this.trackDetails.getElementsByClassName('track-artist')[0];
  }

  changeDetails(data) {
    this.title.innerText = data.title;
    this.artist.innerText = data.artist;
  }
}

export default new TrackDetails();