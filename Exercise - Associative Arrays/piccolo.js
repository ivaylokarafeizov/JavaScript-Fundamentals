function piccolo(data) {
  let parkingLot = new Set();

  for (let line of data) {
    let [direction, carNumber] = line.split(", ");
    switch (direction) {
      case "IN":
        parkingLot.add(carNumber);
        break;
      case "OUT":
        parkingLot.delete(carNumber);
        break;
    }
  }

  if (parkingLot.length === 0) {
    return console.log("Parking Lot is Empty");
  }

  let sortedParkingLot = Array.from(parkingLot.values()).sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let carNumber of sortedParkingLot) {
    console.log(carNumber);
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
