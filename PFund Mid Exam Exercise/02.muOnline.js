function muOnline(input) {
  let rooms = input.split("|");
  let bitcoins = 0;
  let health = 100;
  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");
    let command = room[0];
    let number = Number(room[1]);
    if (command == "potion") {
      if (health + number > 100) {
        number = 100 - health;
        health = 100;
      } else {
        health += number;
      }
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == "chest") {
      bitcoins += number;
      console.log(`You found ${number} bitcoins.`);
    } else {
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.\nBest room: ${i + 1}`);
        return;
      }
    }
  }
  console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
