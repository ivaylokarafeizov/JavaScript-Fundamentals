function sumFirstAndLast(array) {
  let firstIndex = Number(array.shift());
  let lastIndex = Number(array.pop());
  let sum = firstIndex + lastIndex;

  console.log(sum);
}

sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);
