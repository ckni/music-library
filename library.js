class Library {

  // constructor function - requires name and optionally tracks and playlists
  constructor(name, tracks, playlists) {

    // name of this library
    this.name = name;

    // time of creation
    this.created_at = new Date();

    // array of playlists. optional
    this.playlists = playlists || [];

    // array of tracks not in a playlist. optional
    this.tracks = tracks || [];
  }

  // add a new track to this library
  addTrack(track) {
    this.tracks.push(track);
  }

  // add a new playlist to this library
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

  // delete a track from this library
  deleteTrack(track) {
    const id = this.tracks.indexOf(track);
    this.tracks.splice(id, 1);
  }

  // delete a playlist from this library
  deletePlaylist(playlist) {
    const id = this.playlists.indexOf(playlist);
    this.playlists.splice(id, 1);
  }

  // list all tracks in this library
  listTracks() {
    return this.tracks;
  }

  // list all playlists in this library
  listPlaylists() {
    return this.playlists;
  }
}

// test driver - new library
const tracks = ["Stan", "Exhibit C", "A Milli", "Hey Ya", "In Da Club", "Ether"];
const playlists = ["Workout", "00s Rap", "RNB", "RNB 2", "80s Pop"];
const testLibrary = new Library("Test Library", tracks, playlists);
console.log(testLibrary);

// test driver - functions
testLibrary.addTrack("Lose Control");
testLibrary.deleteTrack("A Milli");
console.log(testLibrary.listTracks());
testLibrary.addPlaylist("Shower");
testLibrary.deletePlaylist("00s Rap");
console.log(testLibrary.listPlaylists());
