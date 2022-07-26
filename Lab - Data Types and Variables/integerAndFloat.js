function integerAndFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;
  if (sum % 2 == 1) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
