function numbers(input) {
  let mappedArray = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let avg = mappedArray.reduce((a, b) => a + b) / mappedArray.length;
  let greaterThanAvg = mappedArray.filter((x) => x > avg).splice(0, 5);
  return greaterThanAvg.length < 1 ? "No" : greaterThanAvg.join(" ");
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
