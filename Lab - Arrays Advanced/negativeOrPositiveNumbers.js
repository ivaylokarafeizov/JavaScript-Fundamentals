function negativeOrPositiveNumbers(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let number = Number(array[i]);

    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }

  console.log(result.join("\n"));
}

negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
