function solve(input) {
  let routes = input.shift().split("||");
  let startFuel = Number(input.shift());
  let startAmmo = Number(input.shift());

  for (let line of routes) {
    let [command, integer] = line.split(" ");
    integer = Number(integer);
    if (command === "Travel") {
      if (startFuel >= integer) {
        startFuel -= integer;
        console.log(`The spaceship travelled ${integer} light-years.`);
      } else if (startFuel < integer) {
        console.log(`Mission failed.`);
        break;
      }
    } else if (command === "Enemy") {
      if (startAmmo >= integer) {
        startAmmo -= integer;
        console.log(`An enemy with ${integer} armour is defeated.`);
      } else if (startAmmo < integer) {
        startFuel -= integer * 2;
        if (startFuel <= 0) {
          console.log(`Mission failed.`);
          break;
        }
        console.log(`An enemy with ${integer} armour is outmaneuvered.`);
      }
    } else if (command === "Repair") {
      let addedAmmo = integer * 2;
      console.log(`Ammunitions added: ${addedAmmo}.`);
      let addedFuel = integer;
      console.log(`Fuel added: ${addedFuel}.`);
      startFuel += addedFuel;
    } else if (command === "Titan") {
      console.log(`You have reached Titan, all passengers are safe.`);
      break;
    }
  }
}

solve([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
