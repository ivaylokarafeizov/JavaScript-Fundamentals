function commonElements(fArray, sArray) {
  for (let i = 0; i < fArray.length; i++) {
    if (sArray.includes(fArray[i])) {
      console.log(fArray[i]);
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
