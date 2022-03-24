// musicMan v0.1
// by Jonathan Scheiber
// github.com/scheiber

// Description:
// musicMan is a way to discover and receive information about recommended albums.
// Simply enter a genre or the word "random" to recieve an album.

// Changelog:
// v0.1:
// - initial version 🎂
// - created initial database of albums (10 to start)
// - return random album working
// - return album by known genre working

// TODO:
// - use valiadation to check if genre isn't present in array
// - if not present, return 'No albums match entered genre. Try a different genre or enter "random" for a random album.';

// for kay, my star in a different sky

const albums = require("./albums");

function musicMan(albums) {
  if (!albums.length) {
    throw "No albums available.";
  }
  const task = process.argv[2];
  if (!task) {
    return console.log(
      '🎵 Welcome to musicMan! 🎶\n Please enter a genre or "random" to receive a recommended album.'
    );
  } else if (task === "random") {
    i = Math.floor(Math.random() * albums.length);
    return console.log(
      `This is an album that I bet you'll like:\n${albums[i].title} by ${albums[i].artist}.\nIt was released in ${albums[i].year} and is considered ${albums[i].genre}.`
    );
  }
  const filteredAlbums = albums.filter((album) => album.genre.includes(task));
  i = Math.floor(Math.random() * filteredAlbums.length);
  return console.log(
    `This is an album that I bet you'll like:\n${filteredAlbums[i].title} by ${filteredAlbums[i].artist}.\nIt was released in ${filteredAlbums[i].year} and is considered ${filteredAlbums[i].genre}.`
  );
}

musicMan(albums);
