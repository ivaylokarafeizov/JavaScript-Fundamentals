function sumDigits(number) {
  let digitsToString = String(number);
  let sum = 0;

  for (let i = 0; i < digitsToString.length; i++) {
    let currentDigit = Number(digitsToString[i]);
    sum += currentDigit;
  }

  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
