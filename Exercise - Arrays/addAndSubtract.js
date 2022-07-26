function addAndSubtract(numbers) {
  let inputL = numbers.length;
  let originalSum = 0;
  let newSum = 0;
  let newArray = [];
  for (let i = 0; i < inputL; i++) {
    let currentNum = numbers[i];
    originalSum += currentNum;
    if (currentNum % 2 === 0) {
      currentNum += i;
    } else {
      currentNum -= i;
    }
    newSum += currentNum;
    newArray.push(currentNum);
  }
  console.log(newArray);
  console.log(originalSum);
  console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
