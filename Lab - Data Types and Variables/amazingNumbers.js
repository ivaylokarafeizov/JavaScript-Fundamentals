function amazingNumbers(number) {
  let numberToString = number.toString();
  let sum = 0;
  for (let i = 0; i < numberToString.length; i++) {
    sum += Number(numberToString[i]);
  }
  if (sum.toString().includes("9")) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}

amazingNumbers(1233);
amazingNumbers(999);
