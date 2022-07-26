function plantDiscovery(array) {
  let n = Number(array.shift());
  let catalogue = {};
  let actions = {
    "Rate": rate,
    "Update": update,
    "Reset": reset 
  };
  
  for (let i = 0; i < n; i++) {
    let [name, rarity] = array.shift().split("<->");
    catalogue[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0 
    };
  } 
  while (array[0] !== "Exhibition") {
    let [comm, params] = array.shift().split(": ");
    let action = actions[comm];
    action(params);
  }
  
  console.log(`Plants for the exhibition:`);
  Object.entries(catalogue).forEach(el => {
    console.log(`- ${el[0]}; Rarity: ${el[1].rarity}; Rating: ${el[1].avgRating.toFixed(2)}`);
  })

  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalogue[name] != undefined) {
      let plant = catalogue[name];
      plant.ratings.push(Number(rating));
      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }
      plant.avgRating = total / plant.ratings.length;
    } else {
      console.log("error");
    }
  }

  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalogue[name] != undefined) {
      let plant = catalogue[name];
      plant.rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }

  function reset(name) {
    if (catalogue[name] != undefined) {
        let plant = catalogue[name];
        plant.ratings.length = 0;
        plant.avgRating = 0;
    } else {
      console.log("error");
    }
  } 
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
console.log(`======================`);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
