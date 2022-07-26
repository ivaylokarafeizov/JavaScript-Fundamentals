function sumFirstAndLastArrayElements(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let sum = firstElement + lastElement;

  console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
