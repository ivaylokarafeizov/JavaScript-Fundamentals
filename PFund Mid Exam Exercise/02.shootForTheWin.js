function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let shots = input.map(Number);
  let shotsCount = 0;
  for (let i = 0; i < shots.length; i++) {
    let currShot = shots[i];
    let currTarget = targets[currShot];
    if (currTarget > -1) {
      targets[currShot] = -1;
      shotsCount++;
      for (let j = 0; j < targets.length; j++) {
        if (targets[j] > -1) {
          if (targets[j] > currTarget) {
            targets[j] -= currTarget;
          } else {
            targets[j] += currTarget;
          }
        }
      }
    }
  }
  console.log(`Shot targets: ${shotsCount} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
