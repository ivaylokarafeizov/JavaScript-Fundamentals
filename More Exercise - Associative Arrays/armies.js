function armies(data) {
    let armies = {};
    let armyLeaders = [];

    for (let input of data) {
        if(input.includes('arrives')) {
            let indexArrivals = input.indexOf('arrives');
            let leader = input.slice(0, indexArrivals).trim();
            if(!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {}, 
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);
        } else if (input.includes("defeated")) {
            let indexDefeated = input.indexOf("defeated");
            let leader = input.slice(0, indexDefeated).trim();
            let indexLeader = armyLeaders.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armyLeaders.splice(indexLeader, 1);
            }
        } else if (input.includes(":")) {
            let [leader, army] = input.split(": ");
            let [armyName, armyCount] = army.split(", ");
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {}
            }
        }
    }
}

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
