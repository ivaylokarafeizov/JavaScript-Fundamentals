function arrayManipulations(commands) {
  let array = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insert(firstNum, secondNum);
        break;
    }
  }

  function add(element) {
    array.push(element);
  }

  function remove(num) {
    array = array.filter((element) => element !== num);
  }

  function removeAt(index) {
    array.splice(index, 1);
  }

  function insert(num, index) {
    array.splice(index, 0, num);
  }

  console.log(array.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
