function treasureHunt(array) {
  let initialLoot = array.shift().split("|");

  while (array[0] !== "Yohoho!") {
    let [command, ...currentCommandArray] = array.shift().split(" ");
    if (command == "Loot") {
      for (let el of currentCommandArray) {
        if (!initialLoot.includes(el)) {
          initialLoot.unshift(el);
        }
      }
    } else if (command == "Drop") {
      let index = Number(currentCommandArray[0]);
      if (index >= 0 && index < initialLoot.length) {
        initialLoot.push(initialLoot.splice(index, 1));
      }
    } else if (command == "Steal") {
      let index = Number(currentCommandArray);
      let stolenTreasure = initialLoot.slice(-index);
      initialLoot.splice(-index);
      console.log(stolenTreasure.join(", "));
    }
  }
  initialLoot.length
    ? console.log(
        `Average treasure gain: ${(
          initialLoot.reduce((sum, initialTresure) => {
            return sum + initialTresure.length;
          }, 0) / initialLoot.length
        ).toFixed(2)} pirate credits.`
      )
    : console.log(`Failed treasure hunt.`);
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
