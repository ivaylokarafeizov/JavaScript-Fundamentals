function cutAndReverse(string) {
  let index = string.length / 2;
  let firstHalf = string.substring(0, index).split("").reverse().join("");
  let secondHalf = string.substring(index).split("").reverse().join("");
  console.log(`${firstHalf}\n${secondHalf}`);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
