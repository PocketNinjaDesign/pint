import AudioService from '../services/Audio.service';
import Player from '../Player';
import TrackDetails from '../musicTracks/TrackDetails';
import TrackListService from '../musicTracks/TrackList.service';

class PreviousButton {
  constructor() {
    this.bttn;
  }

  init() {
    this.bttn = document.getElementById('NextTrack');

    this.bttn.addEventListener('click', () => {
      const data = TrackListService.getNextTrack();
      TrackDetails.changeDetails(data);
      AudioService.getTrack().pause();
      AudioService.setTrack();

      if (Player.playState) {
        AudioService.getTrack().play();
      }
    });
  }
}

export default new PreviousButton();