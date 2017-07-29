class Playlist {

  // constructor function - requires name, creator username, and optionally genre and tracks
  constructor(name, username, genre, tracks) {

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
  addtrack(track) {
    this.tracks.push(track);
  }

  // delete a track from this playlist
  deletetrack(track) {
    const id = this.tracks.indexOf(track);
    this.tracks.splice(id, 1);
  }

  // list all tracks in this playlist
  listtracks() {
    return this.tracks;
  }
}

// test driver
const testPlaylist = new Playlist("Test Playlist", "kaichesterni", "90s Hip Hop", ["California Love", "Nuthin' But A G Thang", "Gin & Juice", "It Was A Good Day"]);
console.log(testPlaylist);
