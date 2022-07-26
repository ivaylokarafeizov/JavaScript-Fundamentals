function maxNumber(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    let isBigger = true;
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum <= secondNum) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArray.push(firstNum);
    }
  }
  console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 2]);
