function furniture(input) {
  const text = input.join(" ");
  const pattern = />>(?<name>\w+)<<(?<price>[\d.]+)!(?<qty>\d+)/g;
  const furnitureArray = [];
  let total = 0;

  let validMatch;
  while ((validMatch = pattern.exec(text)) !== null) {
    const name = validMatch.groups["name"];
    const price = Number(validMatch.groups["price"]);
    const qty = Number(validMatch.groups["qty"]);

    furnitureArray.push(name);
    total += price * qty;
  }

  console.log("Bought furniture:");

  furnitureArray.forEach((name) => console.log(name));

  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
