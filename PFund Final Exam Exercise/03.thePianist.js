function thePianist(array) {
  const n = Number(array.shift());
  array.pop();
  let songs = {};

  for (let i = 0; i < n; i++) {
    const [name, composer, key] = array.shift().split("|");
    songs[name] = {
      composer,
      key,
    };
  }

  for (const line of array) {
    const [comm, name, ...other] = line.split("|");

    if (comm == "Add") {
      if (songs[name] !== undefined) {
        console.log(`${name} is already in the collection!`);
      } else {
        let composer = other[0];
        let key = other[1];
        songs[name] = {
          composer,
          key,
        };
        console.log(
          `${name} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (comm == "Remove") {
      if (songs[name] == undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        delete songs[name];
        console.log(`Successfully removed ${name}!`);
      }
    } else if (comm == "ChangeKey") {
      if (songs[name] == undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        let key = other[0];
        songs[name].key = key;
        console.log(`Changed the key of ${name} to ${key}!`);
      }
    }
  }

  Array.from(Object.keys(songs)).forEach((name) => {
    console.log(
      `${name} -> Composer: ${songs[name].composer}, Key: ${songs[name].key}`
    );
  });
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log(`========================`);
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
