function worldTour(input) {
  //solution with if-else
  let myString = input.shift();
  input.pop();

  for (let line of input) {
    let [command, ...rest] = line.split(":");
    if (command === "Add Stop") {
      let before = myString.slice(0, rest[0]);
      let after = myString.slice(rest[0]);
      myString = before + rest[1] + after;
      console.log(myString);
    } else if (command === "Remove Stop") {
      if (rest[1] < myString.length) {
        let toRemove = myString.substring(Number(rest[0]), Number(rest[1]) + 1);
        myString = myString.replace(toRemove, "");
      }
      console.log(myString);
    } else if (command === "Switch") {
      myString = myString.split(rest[0]).join(rest[1]);
      console.log(myString);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${myString}`);

  //solution with switch case and functions
  // let myString = input.shift();
  // input.pop();

  // for (let line of input) {
  //   let [command, ...rest] = line.split(":");
  //   switch (command) {
  //     case "Add Stop": addStop(Number(rest[0]), rest[1]); break;
  //     case "Remove Stop": removeStop(Number(rest[0]), Number(rest[1])); break;
  //     case "Switch": switchCountry(rest[0], rest[1]); break;
  //   }
  // }
  // console.log(`Ready for world tour! Planned stops: ${myString}`);

  // function addStop(index, str) {
  //   let before = myString.slice(0, index);
  //   let after = myString.slice(index);
  //   myString = before + str + after;
  //   console.log(myString);
  // }

  // function removeStop(start, end) {
  //   if (end < myString.length) {
  //     let toRemove = myString.substring(start, end + 1);
  //     myString = myString.replace(toRemove, "");
  //   }
  //   console.log(myString);
  // }

  // function switchCountry(oldCountry, newCountry) {
  //   myString = myString.split(oldCountry).join(newCountry);
  //   console.log(myString);
  // }
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
