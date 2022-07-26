function counterStrike(array) {
  let initialEnergy = Number(array.shift());
  let wins = 0;

  for (let step = 0; step < array.length; step++) {
    let currentDistance = array[step];

    if (currentDistance === "End of battle") {
      console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`);
      break;
    }

    let energy = Number(currentDistance);

    if (initialEnergy - energy < 0) {
      console.log(
        `Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`
      );
      break;
    }

    initialEnergy -= energy;
    wins++;

    if (wins % 3 === 0) {
      initialEnergy += wins;
    }
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
