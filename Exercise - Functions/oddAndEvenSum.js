function oddAndEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;

  let numberToString = number.toString();
  for (let i = 0; i < numberToString.length; i++) {
    let currNumber = Number(numberToString[i]);

    if (currNumber % 2 !== 0) {
      oddSum += currNumber;
    } else {
      evenSum += currNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
