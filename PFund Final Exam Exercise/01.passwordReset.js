function passwordReset(input) {
  //if-else solution
  let password = input.shift();
  input.pop();

  for (let command of input) {
    command = command.split(" ");
    if (command[0] === "TakeOdd") {
      let oddOnly = "";
      for (let i = 0; i < password.length; i++) {
        if (i % 2 !== 0) {
          oddOnly += password[i];
        }
      }
      password = oddOnly;
      console.log(password);
    } else if (command[0] === "Cut") {
      let toCut = password.substring(
        Number(command[1]),
        Number(command[2]) + Number(command[1])
      );
      password = password.replace(toCut, "");
      console.log(password);
    } else if (command[0] === "Substitute") {
      if (password.includes(command[1])) {
        password = password.split(command[1]).join(command[2]);
        console.log(password);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
  console.log(`Your password is: ${password}`);

  //if-else and functions solution
  //   let password = input.shift();
  //   input.pop();

  //   for (let command of input) {
  //     command = command.split(" ");
  //     if (command[0] === "TakeOdd") {
  //       takeOdd();
  //     } else if (command[0] === "Cut") {
  //       cut(Number(command[1]), Number(command[2]));
  //     } else if (command[0] === "Substitute") {
  //       substitute(command[1], command[2]);
  //     }
  //   }
  //   console.log(`Your password is: ${password}`);

  //   function takeOdd() {
  //     let oddOnly = "";
  //     for (let i = 0; i < password.length; i++) {
  //       if (i % 2 !== 0) {
  //         oddOnly += password[i];
  //       }
  //     }
  //     password = oddOnly;
  //     console.log(password);
  //   }

  //   function cut(start, end) {
  //     let toCut = password.substring(start, end + start);
  //     password = password.replace(toCut, "");
  //     console.log(password);
  //   }

  //   function substitute(oldChar, newChar) {
  //     if (password.includes(oldChar)) {
  //       password = password.split(oldChar).join(newChar);
  //       console.log(password);
  //     } else {
  //       console.log(`Nothing to replace!`);
  //     }
  //   }
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
