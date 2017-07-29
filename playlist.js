class Playlist {

  // constructor function - requires name, creator username, and optionally genre and songs
  constructor(name, username, genre, songs) {

    // name of this playlist
    this.name = name;

    // time of creation and name of creator
    this.created_at = new Date();
    this.created_by = username;

    // genre. optional
    this.genre = genre || null;

    // array of songs. optional
    this.songs = songs || [];
  }

  // add a new song to this playlist
  addSong(song) {
    this.songs.push(song);
  }

  // delete a song from this playlist
  deleteSong(song) {
    const id = this.songs.indexOf(song);
    this.songs.splice(id, 1);
  }

  // list all songs in this playlist
  listSongs() {
    return this.songs;
  }
}

// test driver
const testPlaylist = new Playlist("Test Playlist", "kaichesterni", "90s Hip Hop", ["California Love", "Nuthin' But A G Thang", "Gin & Juice", "It Was A Good Day"]);
console.log(testPlaylist);
