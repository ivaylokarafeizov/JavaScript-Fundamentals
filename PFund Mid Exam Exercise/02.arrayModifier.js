function arrayModifier(array) {
  let numbers = array.shift().split(" ").map(Number);
  while (array[0] !== "end") {
    let [command, fIndex, sIndex] = array.shift().split(" ");
    if (command === "swap") {
      [numbers[fIndex], numbers[sIndex]] = [numbers[sIndex], numbers[fIndex]];
    } else if (command === "multiply") {
      numbers[fIndex] *= numbers[sIndex];
    } else {
      numbers = numbers.map((x) => x - 1);
    }
  }
  console.log(numbers.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
