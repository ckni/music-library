class Playlist {

  // constructor function - requires name
  constructor(name) {

    // generate random ID
    this.id = Math.round(Math.random() * 1000000);

    // name of this playlist
    this.name = name;

    // array of tracks. optional
    this.tracks = [];
  }

  // add a new track to this playlist
  addTrack(track) {
    this.tracks.push(track);
  }

  // delete a track from this playlist
  deleteTrack(track) {
    const id = this.tracks.indexOf(track);
    this.tracks.splice(id, 1);
  }

  // calculate average rating of all tracks
  overallRating() {
    let totalRating = 0;
    this.tracks.forEach(track => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }

  // calculate total duration of all tracks
  totalDuration() {
    let totalDuration = 0;
    this.tracks.forEach(track => {
      totalDuration += track.length;
    });
    return totalDuration;
  }

  // nuke playlist
  nuke() {
    this.name = null;
    this.tracks = [];
  }
}

// export
module.exports = Playlist;
