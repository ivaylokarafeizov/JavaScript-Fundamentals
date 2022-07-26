function evenNumbersSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = Number(numbers[i]);
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  console.log(sum);
}

evenNumbersSum(["1", "2", "3", "4", "5", "6"]);
evenNumbersSum(["3", "5", "7", "9"]);
evenNumbersSum(["2", "4", "6", "8", "10"]);
