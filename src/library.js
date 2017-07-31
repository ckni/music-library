class Library {

  // constructor function - requires name and creator name
  constructor(name, creator) {

    // generate random ID
    this.id = Math.round(Math.random() * 1000000);

    // name of this library
    this.name = name;

    // creator of this library
    this.creator = creator;

    // array of playlists
    this.playlists = [];
  }

  // add a new playlist to this library
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

  // delete a playlist from this library
  deletePlaylist(playlist) {
    const id = this.playlists.indexOf(playlist);
    this.playlists.splice(id, 1);
  }

  // nuke library
  nuke() {
    this.name = null;
    this.creator = null;
    this.playlists = [];
  }
}

// export
module.exports = Library;
