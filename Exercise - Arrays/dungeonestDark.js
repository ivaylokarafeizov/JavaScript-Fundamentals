function dungeonestDark(array) {
  let rooms = array[0].split("|");
  let health = 100;
  let coins = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");
    if (room[0] === "potion") {
      let currentHeal = Number(room[1]);

      if (health + currentHeal > 100) {
        currentHeal = 100 - health;
        health = 100;
      } else {
        health += currentHeal;
      }
      console.log(`You healed for ${currentHeal} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] === "chest") {
      let currentCoins = Number(room[1]);
      console.log(`You found ${currentCoins} coins.`);
      coins += currentCoins;
    } else {
      let currentMonster = room[0];
      let monsterAttack = Number(room[1]);
      health -= monsterAttack;
      if (health > 0) {
        console.log(`You slayed ${currentMonster}.`);
      } else if (health <= 0) {
        console.log(`You died! Killed by ${currentMonster}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
