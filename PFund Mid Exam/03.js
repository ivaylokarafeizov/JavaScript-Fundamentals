function solve(input) {
  let chat = [];
  for (let line of input) {
    let [command, fItem, sItem, ...nItem] = line.split(" ");
    if (command == "Chat") {
      chat.push(fItem);
    } else if (command == "Edit") {
      if (chat.includes(fItem)) {
        let index = chat.indexOf(fItem);
        chat.splice(index, 1, sItem);
      }
    } else if (command == "Delete") {
      if (chat.includes(fItem)) {
        let index = chat.indexOf(fItem);
        chat.splice(index, 1);
      }
    } else if (command == "Pin") {
      if (chat.includes(fItem)) {
        let index = chat.indexOf(fItem);
        chat.splice(index, 1);
        chat.push(fItem);
      }
    } else if (command == "Spam") {
      chat.push(fItem, sItem, ...nItem);
    }
  }
  console.log(chat.join("\n"));
}

solve([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);
console.log(`-----------------`);
solve(["Chat Hello", "Delete John", "Pin Hi", "end"]);
console.log(`-----------------`);
solve([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
