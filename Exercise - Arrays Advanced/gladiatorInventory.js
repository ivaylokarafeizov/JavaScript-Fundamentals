function gladiatorInventory(array) {
  let inventory = array.shift().split(" ");
  let commands = array.slice(0, array.length);

  for (let line of commands) {
    let [command, item] = line.split(" ");
    if (command == "Buy") {
      if (!inventory.includes(item)) {
        inventory.push(item);
      }
    } else if (command == "Trash") {
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
      }
    } else if (command == "Repair") {
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        inventory.splice(index, 1);
        inventory.push(item);
      }
    } else if (command == "Upgrade") {
      let upgrade = item.split("-");
      if (inventory.includes(upgrade[0])) {
        let index = inventory.indexOf(upgrade[0]);
        inventory.splice(index + 1, 0, `${upgrade[0]}:${upgrade[1]}`);
      }
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
