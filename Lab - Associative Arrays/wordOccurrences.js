function wordOccurrences(words) {
  let map = new Map();

  for (let word of words) {
    if (!map.has(word)) {
      map.set(word, 0);
    }
    map.set(word, map.get(word) + 1);
  }

  let sortedArray = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [word, words] of sortedArray) {
    console.log(`${word} -> ${words} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
