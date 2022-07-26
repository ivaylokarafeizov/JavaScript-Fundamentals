function theImitationGame(input) {
  //if-else solution
  let message = input.shift();
  input.pop();

  for (let command of input) {
    command = command.split("|");
    if (command[0] === "Move") {
      let toMove = message.substring(0, command[1]);
      let replaced = message.replace(toMove, "");
      message = replaced + toMove;
    } else if (command[0] === "Insert") {
      let before = message.slice(0, command[1]);
      let after = message.slice(command[1]);
      message = before + command[2] + after;
    } else if (command[0] === "ChangeAll") {
      message = message.split(command[1]).join(command[2]);
    }
  }
  console.log(`The decrypted message is: ${message}`);
  
  //switch case and functions solution
  //   let message = input.shift();
  //   input.pop();

  //   for (let command of input) {
  //     command = command.split("|");
  //     switch(command[0]) {
  //         case "Move": move(command[1]); break;
  //         case "Insert": insert(Number(command[1]), command[2]); break;
  //         case "ChangeAll": changeAll(command[1], command[2]); break;
  //     }
  //   }
  //   console.log(`The decrypted message is: ${message}`);

  //   function move(numberOfLetters) {
  //     let toMove = message.substring(0, numberOfLetters);
  //     let replaced = message.replace(toMove, "");
  //     message = replaced + toMove;
  //   }

  //   function insert(index, value) {
  //     let before = message.slice(0, index);
  //     let after = message.slice(index);
  //     message = before + value + after;
  //   }

  //   function changeAll(substring, replacement) {
  //     message = message.split(substring).join(replacement);
  //   }
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
