function calculator(fNum, operator, sNum) {
  let operation = 0;
  switch (operator) {
    case "+":
      operation = fNum + sNum;
      break;
    case "-":
      operation = fNum - sNum;
      break;
    case "*":
      operation = fNum * sNum;
      break;
    case "/":
      operation = fNum / sNum;
      break;
  }
  console.log(operation.toFixed(2));
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
