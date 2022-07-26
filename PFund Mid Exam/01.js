function solve(input) {
  let biscuitsPerDay = Number(input.shift());
  let workersCount = Number(input.shift());
  let otherFactory = Number(input.shift());
  let totalBiscuits = 0;
  let dailyProduction = biscuitsPerDay * workersCount;
  let day = 0;
  while (day < 30) {
    if (day % 3 == 0) {
      totalBiscuits += Math.floor(dailyProduction * 0.75);
    } else {
      totalBiscuits += dailyProduction;
    }
    day++;
  }
  if (totalBiscuits > otherFactory && totalBiscuits !== otherFactory) {
    let diff = totalBiscuits - otherFactory;
    let percentage = (diff / otherFactory) * 100;
    console.log(
      `You have produced ${totalBiscuits} biscuits for the past month.`
    );
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else if (totalBiscuits < otherFactory && totalBiscuits !== otherFactory) {
    let diff = otherFactory - totalBiscuits;
    let percentage = (diff / otherFactory) * 100;
    console.log(
      `You have produced ${totalBiscuits} biscuits for the past month.`
    );
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}

solve(["78", "8", "16000"]);
solve(["65", "12", "26000"]);
solve(["163", "16", "67020"]);
