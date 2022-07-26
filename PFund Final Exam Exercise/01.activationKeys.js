function activationKeys(array) {
  //simple solution
  let key = array.shift();
  array.pop();

  for (let command of array) {
    command = command.split(">>>");
    if (command[0] === "Slice") {
      let before = key.slice(0, command[1]);
      let after = key.slice(command[2]);
      key = before + after;
      console.log(key);
    } else if (command[0] === "Flip") {
      let before = key.slice(0, command[2]);
      let after = key.slice(command[3]);
      let flipped = key.slice(command[2], command[3]);
      if (command[1] === "Upper") {
        flipped = flipped.toUpperCase();
      } else if (command[1] === "Lower") {
        flipped = flipped.toLowerCase();
      }
      key = before + flipped + after;
      console.log(key);
    } else if (command[0] === "Contains") {
      if (key.includes(command[1])) {
        console.log(`${key} contains ${command[1]}`);
      } else {
        console.log(`Substring not found!`);
      }
    }
  }
  console.log(`Your activation key is: ${key}`);
  
  //solution with separate functions
  //   let key = array.shift();
  //   array.pop();

  //   for (let command of array) {
  //     command = command.split(">>>");
  //     if (command[0] === "Slice") {
  //       slice(command[1], command[2]);
  //     } else if (command[0] === "Flip") {
  //       flip(command[1], command[2], command[3]);
  //     } else if (command[0] === "Contains") {
  //       contains(command[1]);
  //     }
  //   }
  //   console.log(`Your activation key is: ${key}`);

  //   function slice(fIndex, sIndex) {
  //     let before = key.slice(0, fIndex);
  //     let after = key.slice(sIndex);
  //     key = before + after;
  //     console.log(key);
  //   }

  //   function flip(command, fIndex, sIndex) {
  //     let before = key.slice(0, fIndex);
  //     let after = key.slice(sIndex);
  //     let flipped = key.slice(fIndex, sIndex);
  //     if (command === "Upper") {
  //       flipped = flipped.toUpperCase();
  //     } else if (command === "Lower") {
  //       flipped = flipped.toLowerCase();
  //     }
  //     key = before + flipped + after;
  //     console.log(key);
  //   }

  //   function contains(target) {
  //     if (key.includes(target)) {
  //       console.log(`${key} contains ${target}`);
  //     } else {
  //       console.log(`Substring not found!`);
  //     }
  //   }
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
