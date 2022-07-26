function computerStore(input) {
  let priceWithoutTaxes = 0;
  let type = input.pop();
  let taxes = 0;
  let totalPrice = 0;

  for (price of input) {
    let currentPrice = Number(price);
    if (price > 0) {
      priceWithoutTaxes += currentPrice;
      taxes += currentPrice * 0.2;
    } else {
      console.log("Invalid price!");
    }
  }

  totalPrice = priceWithoutTaxes + taxes;

  if (type === "special") {
    totalPrice *= 0.9;
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

computerStore(["regular"]);
