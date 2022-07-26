function pirates(array) {
  array.pop();
  let sailIndex = array.indexOf("Sail");
  let townsArray = array.slice(0, sailIndex);
  let actionArray = array.slice(sailIndex + 1);
  let towns = {};

  for (let townLine of townsArray) {
    townLine = townLine.split("||");
    let townName = townLine[0];
    let townPopulation = Number(townLine[1]);
    let townGold = Number(townLine[2]);
    if (!towns[townName]) {
      towns[townName] = {
        population: 0,
        gold: 0,
      };
    }
    towns[townName].population += townPopulation;
    towns[townName].gold += townGold;
  }

  for (let actionLine of actionArray) {
    actionLine = actionLine.split("=>");
    let currAction = actionLine[0];
    let currTown = actionLine[1];
    if (currAction === "Plunder") {
      let people = Number(actionLine[2]);
      let money = Number(actionLine[3]);
      towns[currTown].population -= people;
      towns[currTown].gold -= money;
      console.log(
        `${currTown} plundered! ${money} gold stolen, ${people} citizens killed.`
      );
      if (towns[currTown].population <= 0 || towns[currTown].gold <= 0) {
        delete towns[currTown];
        console.log(`${currTown} has been wiped off the map!`);
      }
    } else if (currAction === "Prosper") {
      let money = Number(actionLine[2]);
      if (money < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        towns[currTown].gold += money;
        console.log(
          `${money} gold added to the city treasury. ${currTown} now has ${towns[currTown].gold} gold.`
        );
      }
    }
  }

  towns = Object.entries(towns);
  if (towns.length == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
     
    for (let currTown of towns) {
      let currTownName = currTown[0];
      let currTownProperties = currTown[1];
      console.log(
        `${currTownName} -> Population: ${currTownProperties.population} citizens, Gold: ${currTownProperties.gold} kg`
      );
    }
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
