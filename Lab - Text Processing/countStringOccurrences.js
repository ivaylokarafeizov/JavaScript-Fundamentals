function countStringOccurrences(text, searchedWord) {
  let count = text.split(" ").filter((word) => word == searchedWord);
  console.log(count.length);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
