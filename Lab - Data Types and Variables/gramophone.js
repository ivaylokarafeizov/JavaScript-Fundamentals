function gramophone(band, album, track) {
  let trackDurationInSecs = (band.length * album.length * track.length) / 2;
  let rotations = trackDurationInSecs / 2.5;
  console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
