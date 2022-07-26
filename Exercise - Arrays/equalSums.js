function equalSums(array) {
  let foundIndex = "no";
  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += array[j];
    }
    for (let k = i + 1; k < array.length; k++) {
      rightSum += array[k];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}

equalSums([1, 2, 3, 3]);
