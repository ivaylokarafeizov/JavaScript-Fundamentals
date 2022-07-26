function adAstra(array) {
  const pattern =
    /([#]|[\|])(?<name>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
  let totalCal = 0;
  const items = [];

  while ((validMatch = pattern.exec(array[0])) !== null) {
    items.push({
      name: validMatch[2],
      expDate: validMatch[3],
      cal: validMatch[4],
    });
    totalCal += Number(validMatch[4]);
  }

  console.log(
    `You have food to last you for: ${Math.floor(totalCal / 2000)} days!`
  );

  for (let i = 0; i < items.length; i++) {
    console.log(
      `Item: ${items[i].name}, Best before: ${items[i].expDate}, Nutrition: ${items[i].cal}`
    );
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
