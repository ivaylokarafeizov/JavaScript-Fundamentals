function primeNumberChecker(number) {
  if (number % 2 === 0 || number % 3 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
