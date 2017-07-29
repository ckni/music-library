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

  showDetails() {
    console.log(`"${this.name}" by ${this.artists.join(", ")}`);
    console.log("ID:", this.id);
    console.log("Release Date:", this.release_date);
    console.log("Genre:", this.genre || "N/A");
  }
}

// test driver
const testTrack = new Track("Scenario", ["A Tribe Called Quest"], "March 24, 1992", "90s Hip Hop");
testTrack.showDetails();

module.exports = Track;
