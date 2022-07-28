function solve(input) {
  const n = Number(input.shift());
  input.pop();
  const songs = {};

  for (let i = 0; i < n; i++) {
    const [name, composer, key] = input.shift().split("|");
    songs[name] = {
      composer,
      key,
    };
  }

  for (const line of input) {
    const [comm, name, ...other] = line.split("|"); 

    if (comm == "Add") {
      const composer = other[0];
      const key = other[1];
      if (!songs[name]) {
        songs[name] = {
          composer,
          key,
        };
        console.log(
          `${name} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${name} is already in the collection!`);
      }
    } else if (comm == "Remove") {
      if (songs[name]) {
        delete songs[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (comm == "ChangeKey") {
      const key = other[0];
      if (songs[name]) {
        console.log(`Changed the key of ${name} to ${key}!`);
        songs[name].key = key;
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
  } 
  Array.from(Object.keys(songs)).forEach(name => {
    console.log(`${name} -> Composer: ${songs[name].composer}, Key: ${songs[name].key}`);
  })
}

solve([
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
