function arrayManipulator(array, commands) {
  for (let line of commands) {
    let [command, index, ...elements] = line.split(" ");
    index = Number(index);
    elements = elements.map(Number);

    if (command == "add" || command == "addMany") {
      array.splice(index, 0, ...elements);
    } else if (command == "contains") {
      let element = index;
      console.log(array.indexOf(element));
    } else if (command == "remove") {
      array.splice(index, 1);
    } else if (command == "shift") {
      let rotation = index % array.length;
      let splicedPart = array.splice(0, rotation);
      array.push(...splicedPart);
    } else if (command == "sumPairs") {
      for (let i = 0; i < array.length; i++) {
        let secondElement = array[i + 1] ? array[i + 1] : 0;
        array[i] += secondElement;
        array.splice(i + 1, 1);
      }
    } else if (command == "print") {
      console.log(`[ ${array.join(", ")} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
