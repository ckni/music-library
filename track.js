class Track {

  // constructor function - requires name, artists, release date and optionally genre
  constructor(name, artists, release_date, genre) {

    // name of this track
    this.name = name;

    // name of artist(s) and release date
    this.artists = artists;
    this.release_date = release_date || new Date();

    // genre. optional
    this.genre = genre || null;
  }

  showDetails() {
    console.log(`"${this.name}" by ${this.artists.join(", ")}`);
    console.log("Release Date:", this.release_date);
    console.log("Genre:", this.genre || "N/A");
  }
}

// test driver
const testTrack = new Track("Scenario", ["A Tribe Called Quest"], "March 24, 1992", "90s Hip Hop");
testTrack.showDetails();
