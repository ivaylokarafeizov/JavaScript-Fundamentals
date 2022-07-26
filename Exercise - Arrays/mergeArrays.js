function mergeArrays(fArray, sArray) {
  let newArray = [];
  let result;

  for (let i = 0; i < fArray.length; i++) {
    let currentIndex = i;
    if (currentIndex % 2 === 0) {
      result = Number(fArray[i]) + Number(sArray[i]);
    } else {
      result = fArray[i] + sArray[i];
    }
    newArray.push(result);
  }
  console.log(newArray.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
