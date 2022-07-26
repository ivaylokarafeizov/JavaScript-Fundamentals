function storeProvision(fArray, sArray) {
  let storeProducts = {};

  for (let i = 0; i < fArray.length; i += 2) {
    let product = fArray[i];
    storeProducts[product] = Number(fArray[i + 1]);
  }

  for (let i = 0; i < sArray.length; i += 2) {
    let product = sArray[i];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    }
    storeProducts[product] += Number(sArray[i + 1]);
  }

  for (let product in storeProducts) {
    console.log(`${product} -> ${storeProducts[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
