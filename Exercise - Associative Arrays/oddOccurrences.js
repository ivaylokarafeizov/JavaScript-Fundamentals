function oddOccurrences(data) {
  //solution with Map() constructor
  let wordsArray = data.split(" ");
  let tracker = new Map();

  for (let word of wordsArray) {
    word = word.toLowerCase();
    if (!tracker.has(word)) {
      tracker.set(word, 1);
    } else {
      tracker.set(word, tracker.get(word) + 1);
    }
  }

  let filteredTracker = Array.from(tracker).filter(([key, value]) => {
    return value % 2 !== 0;
  });

  let result = "";
  for (let [key, value] of filteredTracker) {
    result += key + " ";
  }

  console.log(result);

  //solution with object
  //   let wordsArray = data.split(" ");
  //   let tracker = {};

  //   for (let word of wordsArray) {
  //     word = word.toLowerCase();
  //     if (!tracker.hasOwnProperty(word)) {
  //       tracker[word] = 1;
  //     } else {
  //       tracker[word] += 1;
  //     }
  //   }

  //   let sortedTracker = Object.entries(tracker).sort(
  //     ([keyA, valA], [keyB, valB]) => {
  //       return valB - valA;
  //     }
  //   );
  //   let result = [];

  //   for (let [key, value] of sortedTracker) {
  //     if (value % 2 !== 0) {
  //       result.push(key);
  //     }
  //   }
  //   console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
