import AudioService from '../services/Audio.service';
import Player from '../Player';
import TrackDetails from '../musicTracks/TrackDetails';
import TrackListService from '../musicTracks/TrackList.service';

class PreviousButton {
  constructor() {
    this.bttn;
  }

  init() {
    this.bttn = document.getElementById('RewindTrack');

    this.bttn.addEventListener('click', () => {
      if (AudioService.getTrack().getAudioCurrentTime() < 3) {
        const data = TrackListService.getPreviousTrack();
        TrackDetails.changeDetails(data);
        AudioService.getTrack().pause();
        AudioService.setTrack();

        if (Player.playState) {
          AudioService.getTrack().play();
        }
      }
      else {
        AudioService.getTrack().setAudioCurrentTime(0);
      }
    });
  }
}

export default new PreviousButton();