function carWash(commands) {
  let cleanValue = 0;

  for (let command of commands) {
    if (command === "soap") {
      cleanValue += 10;
    } else if (command === "water") {
      cleanValue *= 1.2;
    } else if (command === "vacuum cleaner") {
      cleanValue *= 1.25;
    } else if (command === "mud") {
      cleanValue *= 0.9;
    }
  }

  console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
