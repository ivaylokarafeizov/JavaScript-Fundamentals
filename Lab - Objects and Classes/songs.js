function solve(array) {
  let songsArray = [];
  let songsCount = Number(array.shift());
  let typeList = array.pop();

  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < songsCount; i++) {
    let [type, name, time] = array[i].split("_");
    songsArray.push(new Song(type, name, time));
  }

  if (typeList == "all") {
    songsArray.forEach((song) => console.log(song.name));
  } else {
    let filteredSongs = songsArray.filter((song) => song.type === typeList);
    filteredSongs.forEach((song) => console.log(song.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
