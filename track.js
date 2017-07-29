class Track {

  // constructor function - requires name, artists, release date and optionally genre
  constructor(name, artists, release_date, genre) {

    // name of this track
    this.name = name;

    // generate random ID
    this.id = Math.round(Math.random() * 1000000);

    // name of artist(s) and release date
    this.artists = artists;
    this.release_date = release_date || new Date();

    // genre. optional
    this.genre = genre || null;
  }

  // show all details formatted nicely
  showDetails() {
    if (this.nuked_at) {
      console.log("This song was nuked at", this.nuked_at);
    } else {
      console.log(`"${this.name}" by ${this.artists.join(", ")}`);
      console.log("Release Date:", this.release_date);
      console.log("Genre:", this.genre || "N/A");
    }
    console.log("ID:", this.id);
  }

  // NUKE THIS SONG!
  NUKE() {
    this.nuked_at = new Date();
    this.name = null;
    this.artists = [];
    this.genre = null;
  }
}

// test driver
const testTrack = new Track("Scenario", ["A Tribe Called Quest"], "March 24, 1992", "90s Hip Hop");
testTrack.showDetails();

// test driver - NUKE!
testTrack.NUKE();
testTrack.showDetails();

// export
module.exports = Track;
