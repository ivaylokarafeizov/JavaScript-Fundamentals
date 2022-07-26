function firstAndLastKNumbers(array) {
  let k = array.shift();
  let firstK = array.slice(0, k);
  let lastK = array.slice(-k);

  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
