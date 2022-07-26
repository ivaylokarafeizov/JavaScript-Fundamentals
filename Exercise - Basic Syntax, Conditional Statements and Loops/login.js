function login(first, second, third) {
  let array = [first, second, third];
  array.sort((a, b) => b - a);
  console.log(`${array[0]}\n${array[1]}\n${array[2]}`);
}

login(2, 1, 3);
