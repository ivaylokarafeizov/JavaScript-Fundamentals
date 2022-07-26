function condenseArrayToNumber(numbers) {
  let result = [];
  for (let el of numbers) {
    result.push(el);
  }
  while (result.length > 1) {
    let tempArray = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArray[i] = result[i] + result[i + 1];
    }
    result = tempArray;
  }
  console.log(result[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
