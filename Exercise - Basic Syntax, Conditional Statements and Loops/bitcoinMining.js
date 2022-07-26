function bitcoinMining(array) {
  let totalMoney = 0;
  let bitcoins = 0;
  let day = 0;
  let currentDay = 0;

  for (let i = 0; i < array.length; i++) {
    let goldGrams = array[i];
    day++;
    if (day % 3 === 0) {
      goldGrams *= 0.7;
    }

    totalMoney += goldGrams * 67.51;
    if (totalMoney >= 11949.16) {
      if (currentDay === 0) {
        currentDay = day;
      }
    }

    bitcoins += parseInt(totalMoney / 11949.16);
    totalMoney -= parseInt(totalMoney / 11949.16) * 11949.16;
  }

  if (bitcoins >= 1) {
    console.log(`Bought bitcoins: ${bitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${currentDay}`);
  } else {
    console.log(`Bought bitcoins: ${bitcoins}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
