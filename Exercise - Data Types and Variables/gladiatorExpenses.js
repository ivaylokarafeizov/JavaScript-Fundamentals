function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  for (let i = 1; i <= lostFightsCount; i++) {
    let currentFight = i;
    if (currentFight % 2 == 0) {
      expenses += helmetPrice;
    }
    if (currentFight % 3 == 0) {
      expenses += swordPrice;
    }
    if (currentFight % 6 == 0) {
      expenses += shieldPrice;
    }
    if (currentFight % 12 == 0) {
      expenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
