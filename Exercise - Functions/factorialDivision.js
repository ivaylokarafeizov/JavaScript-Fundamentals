function factorialDivision(fNum, sNum) {
  function factorialCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }

  let finalDivision = factorialCalculator(fNum) / factorialCalculator(sNum);
  console.log(finalDivision.toFixed(2));
}

factorialDivision(5, 2);
