function garage(data) {
  //solution with object
  //   let garages = [];
  //   for (let line of data) {
  //     let [garageNumber, carInfo] = line.split(" - ");
  //     let found = garages.find((g) => g.garageNumber === garageNumber);
  //     if (!found) {
  //       garages.push({
  //         garageNumber: garageNumber,
  //         carInfo: [],
  //       });
  //       found = garages.find((g) => g.garageNumber === garageNumber);
  //     }
  //     found.carInfo.push(carInfo);
  //   }
  //   let output = "";
  //   garages.forEach((garage) => {
  //     output += `Garage № ${garage.garageNumber}\n`;
  //     for (let currChar of garage.carInfo) {
  //       currChar = currChar.replace(/: /g, " - ");
  //       output += `--- ${currChar}\n`;
  //     }
  //   });
  //   console.log(output);

  //solution with Map() constructor
  let garagesMap = new Map();

  for (let row of data) {
    let [garage, carKeyValues] = row.split(" - ");
    let availableCars = [];
    if (!garagesMap.has(garage)) {
      availableCars.push(carKeyValues);
      garagesMap.set(garage, availableCars);
    } else {
      availableCars = garagesMap.get(garage);
      availableCars.push(carKeyValues);
      garagesMap.set(garage, availableCars);
    }
  }

  let sortedGarages = [...garagesMap.entries()];
  let output = "";

  for (let [currGarage, currCarKeyValue] of sortedGarages) {
    output += `Garage № ${currGarage}\n`;
    for (let currCarProperties of currCarKeyValue) {
      for (let everySymbol of currCarProperties) {
        currCarProperties = currCarProperties.replace(": ", " - ");
      }
      output += `--- ${currCarProperties}\n`;
    }
  }
  console.log(output);
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
