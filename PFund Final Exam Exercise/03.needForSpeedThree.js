function needForSpeedThree(array) {
  let n = Number(array.shift());
  let fuelObj = {};
  let mileageObj = {};

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = array.shift().split("|");
    fuelObj[car] = Number(fuel);
    mileageObj[car] = Number(mileage);
  }

  for (let line of array) {
    let [comm, car, distance, fuel] = line.split(" : ");
    distance = Number(distance);
    fuel = Number(fuel);
    if (comm === "Drive") {
      if (fuelObj[car] < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        mileageObj[car] += distance;
        fuelObj[car] -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (mileageObj[car] >= 100000) {
          delete fuelObj[car];
          delete mileageObj[car];
          console.log(`Time to sell the ${car}!`);
        }
      }
    } else if (comm === "Refuel") {
      fuel = distance;
      let refuel = fuelObj[car] + fuel > 75 ? 75 - fuelObj[car] : fuel;
      fuelObj[car] += refuel;
      console.log(`${car} refueled with ${refuel} liters`);
    } else if (comm === "Revert") {
      mileageObj[car] -= distance;
      if (mileageObj[car] < 10000) {
        mileageObj[car] = 10000;
      } else {
        console.log(`${car} mileage decreased by ${distance} kilometers`);
      }
    }
  }
  Object.keys(fuelObj).forEach((car) =>
    console.log(
      `${car} -> Mileage: ${mileageObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`
    )
  );
}

needForSpeedThree([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
