function theLift(array) {
  let people = Number(array.shift());
  let wagons = array.toString().split(" ").map(Number);
  let isNotFull = false;

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      if (people >= 4 - wagons[i]) {
        people -= 4 - wagons[i];
        wagons[i] = 4;
      } else {
        wagons[i] += people;
        people = 0;
      }
    }
    if (wagons[i] < 4) {
      isNotFull = true;
    }
  }

  if (!isNotFull && people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
  } else if (isNotFull && people == 0) {
    console.log("The lift has empty spots!");
  }
  console.log(wagons.join(" "));
}

theLift(["15", "0 0 0 0 0"]);
