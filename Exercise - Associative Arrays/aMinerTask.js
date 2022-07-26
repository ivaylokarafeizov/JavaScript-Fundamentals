function aMinerTask(data) {
  let inputArray = [];
  for (let currLine of data) {
    inputArray.push(currLine);
  }

  let resourceAndQuantity = new Map();

  for (let i = 0; i < inputArray.length; i += 2) {
    let resource = inputArray[i];
    if (resource.toLowerCase() == "stop") {
      break;
    }
    let quantity = Number(inputArray[i + 1]);

    if (resource in resourceAndQuantity) {
      resourceAndQuantity[resource] += quantity;
    } else {
      resourceAndQuantity[resource] = quantity;
    }
  }

  for (let key in resourceAndQuantity) {
    if (resourceAndQuantity.hasOwnProperty(key)) {
      console.log(`${key} -> ${resourceAndQuantity[key]}`);
    }
  }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
