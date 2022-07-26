function inventory(array) {
  let bag = array.shift().split(", ");
  let commands = array.toString().split(",");
  while (commands[0] !== "Craft!") {
    let [command, item] = commands.shift().split(" - ");
    let index = bag.indexOf(item);
    if (command == "Collect" && !bag.includes(item)) {
      bag.push(item);
    } else if (command == "Drop" && bag.includes(item)) {
      bag.splice(index, 1);
    } else if (command == "Renew" && bag.includes(item)) {
      bag.splice(index, 1);
      bag.push(item);
    } else if (command == "Combine Items") {
      let items = item.split(":");
      if (bag.includes(items[0])) {
        let index = bag.indexOf(items[0]);
        bag.splice(index + 1, 0, `${items[1]}`);
      }
    }
  }
  console.log(bag.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
