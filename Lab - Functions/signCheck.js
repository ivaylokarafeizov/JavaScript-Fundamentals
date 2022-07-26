function signCheck(numOne, numTwo, numThree) {
  let res = numOne * numTwo * numThree;
  if (res >= 0) {
    console.log(`Positive`);
  } else {
    console.log(`Negative`);
  }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
