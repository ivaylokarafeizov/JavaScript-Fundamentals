function solve(data) {
  let result = new Map();
  let searchedWords = data.shift().split(" ");
  console.log(searchedWords);
  for (let word of data) {
    if (!result.has(word)) {
      result.set(word, 0);
    }
    result.set(word, result.get(word) + 1);
  }

  let sortedArray = Array.from(result).sort((a, b) => b[1] - a[1]);

  for (let [word, words] of sortedArray) {
    if (word == searchedWords[0] && word == searchedWords[1]) {
      console.log(`${word} -> ${words} times`);
    }
  }
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
