function sortNumbers(first, second, third) {
  let array = [first, second, third];
  array.sort((a, b) => b - a);
  console.log(`${array[0]}\n${array[1]}\n${array[2]}`);
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
