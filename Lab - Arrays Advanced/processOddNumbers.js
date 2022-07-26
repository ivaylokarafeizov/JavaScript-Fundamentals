function processOddNumbers(array) {
  let result = array
    .filter((el, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

  console.log(result);
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
