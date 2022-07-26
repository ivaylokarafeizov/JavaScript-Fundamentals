function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapacity = +array.shift();

  for (let i = 0; i < array.length; i++) {
    let commands = array[i].split(" ");
    if (commands[0] === "Add") {
      wagons.push(Number(commands[1]));
    } else {
      for (let j = 0; j < wagons.length; j++) {
        if (Number(commands[0]) + wagons[j] <= maxCapacity) {
          wagons[j] += Number(commands[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
