function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let result = 0;
    let numToString = i.toString();
    for (let j = 0; j < numToString.length; j++) {
      result += Number(numToString[j]);
    }
    let special = false;
    if (result == 5 || result == 7 || result == 11) {
      special = true;
    }
    if (special) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
