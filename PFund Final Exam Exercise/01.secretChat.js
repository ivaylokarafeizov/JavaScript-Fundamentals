function secretChat(input) {
  //solution with if-else
  let message = input.shift();
  input.pop();

  for (let command of input) {
    command = command.split(":|:");
    if (command[0] == "InsertSpace") {
      let before = message.slice(0, command[1]);
      let after = message.slice(command[1]);
      message = before + " " + after;
      console.log(message);
    } else if (command[0] == "Reverse") {
      if (message.includes(command[1])) {
        message = message.replace(command[1], "");
        let reversed = command[1].split("").reverse().join("");
        message += reversed;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command[0] == "ChangeAll") {
      let splitted = message.split(command[1]);
      message = splitted.join(command[2]);
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);

  //solution with switch case and functions
  // let message = input.shift();
  // input.pop();

  // for (let command of input) {
  //   command = command.split(":|:");
  //   switch (command[0]) {
  //     case "InsertSpace":
  //       insertSpace(Number(command[1]));
  //       break;
  //     case "Reverse":
  //       reverse(command[1]);
  //       break;
  //     case "ChangeAll":
  //       changeAll(command[1], command[2]);
  //       break;
  //   }
  // }
  // console.log(`You have a new text message: ${message}`);

  // function insertSpace(index) {
  //   let before = message.slice(0, index);
  //   let after = message.slice(index);
  //   message = before + " " + after;
  //   console.log(message);
  // }

  // function reverse(str) {
  //   if (message.includes(str)) {
  //     message = message.replace(str, "");
  //     let reversed = str.split("").reverse().join("");
  //     message += reversed;
  //     console.log(message);
  //   } else {
  //     console.log("error");
  //   }
  // }

  // function changeAll(oldChar, newChar) {
  //   message = message.split(oldChar).join(newChar);
  //   console.log(message);
  // }
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
