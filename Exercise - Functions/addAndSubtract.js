function addAndSubtract(firstNum, secondNum, thirdNum) {
  let sum = (firstNum, secondNum) => {
    return firstNum + secondNum;
  };

  let subtract = (sumFirstAndSecond, thirdNum) => {
    return sumFirstAndSecond - thirdNum;
  };

  let sumFirstAndSecond = sum(firstNum, secondNum);
  let finalResult = subtract(sumFirstAndSecond, thirdNum);

  console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
