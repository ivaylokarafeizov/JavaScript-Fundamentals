function equalArrays(fArray, sArray) {
  let equal = true;
  let sum = 0;

  for (let i = 0; i < fArray.length; i++) {
    sum += Number(fArray[i]);
    if (fArray[i] !== sArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      equal = false;
      break;
    }
  }

  if (equal) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
