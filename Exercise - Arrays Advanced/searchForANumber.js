function searchForANumber(array, input) {
  let numbersToTake = input.shift();
  let numbersToRemove = input.shift();
  let searchedNumber = input.shift();
  let newArray = array.splice(0, numbersToTake).splice(numbersToRemove);
  let count = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === searchedNumber) {
      count++;
    }
  }
  console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
