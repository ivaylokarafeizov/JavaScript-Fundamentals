function wordTracker(data) {
  //solution with object
  let tracker = {};
  let words = data.shift().split(" ");

  for (let word of words) {
    tracker[word] = 0;
  }

  for (let word of data) {
    if (tracker.hasOwnProperty(word)) {
      let oldValue = tracker[word];
      tracker[word] = oldValue + 1;
    }
  }

  let sortedTracker = Object.entries(tracker).sort(
    ([keyA, valA], [keyB, valB]) => {
      return valB - valA;
    }
  );

  for (let [key, value] of sortedTracker) {
    console.log(`${key} - ${value}`);
  }
  //solution with Map() constructor
  // let tracker = new Map();
  // let words = data.shift().split(" ");

  // for (let word of words) {
  //   tracker.set(word, 0);
  // }

  // for (let word of data) {
  //   if (tracker.has(word)) {
  //     tracker.set(word, tracker.get(word) + 1);
  //   }
  // }

  // let sortedTracker = Array.from(tracker).sort(([keyA, valA], [keyB, valB]) => {
  //   return valB - valA;
  // });

  // for (let [key, value] of sortedTracker) {
  //   console.log(`${key} - ${value}`);
  // }
}

wordTracker([
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
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
