function houseParty(array) {
  let result = [];
  for (let element of array) {
    let command = element.split(" ");
    let name = command[0];
    if (command.length === 3) {
      if (result.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        result.push(name);
      }
    } else {
      if (result.includes(name)) {
        result.splice(result.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(result.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
