function orders(product, count) {
  let price = 0;
  switch (product) {
    case "coffee":
      price = 1.5 * count;
      break;
    case "water":
      price = 1.0 * count;
      break;
    case "coke":
      price = 1.4 * count;
      break;
    case "snacks":
      price = 2.0 * count;
      break;
  }
  console.log(price.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
