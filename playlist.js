class Playlist {

  // constructor function - requires name, creator username, and optionally genre and tracks
  constructor(name, username, genre, tracks) {

    // generate random ID
    this.id = Math.round(Math.random() * 1000000);

    // name of this playlist
    this.name = name;

    // time of creation and name of creator
    this.created_at = new Date();
    this.created_by = username;

    // genre. optional
    this.genre = genre || null;

    // array of tracks. optional
    this.tracks = tracks || [];
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

  // list all tracks in this playlist
  listTracks() {
    return this.tracks;
  }
}

// test driver - new playlist
const testPlaylist = new Playlist("Test Playlist", "kaichesterni", "90s Hip Hop", ["California Love", "Nuthin' But A G Thang", "Gin & Juice", "It Was A Good Day"]);
console.log(testPlaylist);

// test driver - playlist functions
console.log(testPlaylist.listTracks());
testPlaylist.addTrack("Gangsta's Paradise");
console.log(testPlaylist.listTracks());
testPlaylist.deleteTrack("Gin & Juice");
console.log(testPlaylist.listTracks());

module.exports = Playlist;
