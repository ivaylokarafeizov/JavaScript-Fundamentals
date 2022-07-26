function shoppingList(array) {
  let initialList = array.shift().split("!");
  for (let line of array) {
    let [command, item, nextItem] = line.split(" ");
    if (command == "Go" && item == "Shopping!") {
      break;
    }
    if (command == "Urgent") {
      if (!initialList.includes(item)) {
        initialList.unshift(item);
      }
    } else if (command == "Unnecessary") {
      if (initialList.includes(item)) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
      }
    } else if (command == "Correct") {
      if (initialList.includes(item)) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1, nextItem);
      }
    } else if (command == "Rearrange") {
      if (initialList.includes(item)) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
        initialList.push(item);
      }
    }
  }
  console.log(initialList.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
