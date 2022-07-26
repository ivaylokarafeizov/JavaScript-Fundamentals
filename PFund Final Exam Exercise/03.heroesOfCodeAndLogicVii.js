function heroesOfCodeAndLogicVii(array) {
  let n = Number(array.shift());
  let heroes = {}; 
  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = array.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[name] = {
      hp,
      mp,
    };
  } 
  while (array[0] !== "End") {
    let [comm, name, p1, p2] = array.shift().split(" - ");
    p1 = Number(p1); 
    if (comm == "CastSpell") {
      if (heroes[name].mp >= p1) {
        heroes[name].mp -= p1;
        console.log(
          `${name} has successfully cast ${p2} and now has ${heroes[name].mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${p2}!`);
      }
    } else if (comm == "TakeDamage") {
      heroes[name].hp -= p1;
      if (heroes[name].hp > 0) {
        console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${heroes[name].hp} HP left!`);
      } else {
        delete heroes[name];
        console.log(`${name} has been killed by ${p2}!`);
      }
    } else if (comm == "Recharge") {
      let mp = Math.min(200 - heroes[name].mp, p1);
      heroes[name].mp += mp;
      console.log(`${name} recharged for ${mp} MP!`);
    } else if (comm == "Heal") {
        let hp = Math.min(100 - heroes[name].hp, p1);
        heroes[name].hp += hp;
        console.log(`${name} healed for ${hp} HP!`);
    }
  } 
  for (let heroData of Object.entries(heroes)) {   
    console.log(heroData[0]); 
    console.log(` HP: ${heroData[1].hp}`); 
    console.log(` MP: ${heroData[1].mp}`);  
  }
}

heroesOfCodeAndLogicVii([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log(`=============================`);
heroesOfCodeAndLogicVii([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
