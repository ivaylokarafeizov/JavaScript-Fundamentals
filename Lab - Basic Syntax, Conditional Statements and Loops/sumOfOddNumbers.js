function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;
  for (let i = 1; i <= 100; i += 2) {
    counter++;
    console.log(i);
    sum += i;
    if (counter === n) {
      console.log(`Sum: ${sum}`);
      break;
    }
  }
}

sumOfOddNumbers(3);
