class Track {

  // constructor function - requires title, rating (out of 5), and length (in seconds)
  constructor(title, rating, length) {

    // generate random ID
    this.id = Math.round(Math.random() * 1000000);

    // title of this track
    this.title = title;

    // rating of this track
    this.rating = rating;

    // length of this track
    this.length = length;
  }

  // nuke this song
  nuke() {
    this.name = null;
    this.artists = [];
    this.genre = null;
  }
}

// export
module.exports = Track;
