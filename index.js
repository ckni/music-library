const Library = require("./src/library");
const Playlist = require("./src/playlist");
const Track = require("./src/track");

const newLibrary = new Library("Test Library", "Test Creator");
const newPlaylist1 = new Playlist("Test Playlist 1");
const newPlaylist2 = new Playlist("Test Playlist 2");
const newTrack1 = new Track("Test Track 1", 4, 203);
const newTrack2 = new Track("Test Track 2", 5, 189);
const newTrack3 = new Track("Test Track 3", 4, 277);

newPlaylist1.addTrack(newTrack1);
newPlaylist1.addTrack(newTrack2);
newPlaylist1.addTrack(newTrack3);
newPlaylist1.deleteTrack(newTrack2);

newLibrary.addPlaylist(newPlaylist1);
newLibrary.addPlaylist(newPlaylist2);
newLibrary.deletePlaylist(newPlaylist2);

console.log("Entire Library:", newLibrary);
console.log("Test Playlist 1 Tracks:", newPlaylist1.tracks);
console.log("Test Playlist 1 Overall Rating:", newPlaylist1.overallRating());
console.log("Test Playlist 1 Total Duration:", newPlaylist1.totalDuration());
