function sorting(array) {
  let result = [];
  let sortedArray = array.sort((a, b) => b - a);
  while (sortedArray.length > 0) {
    let biggestNumber = array.shift();
    result.push(biggestNumber);
    let smallestNumber = array.pop();
    result.push(smallestNumber);
  }
  console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
