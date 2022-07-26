function stringSubstring(target, text) {
  let wordsArray = text.toLowerCase().split(" ");
  return wordsArray.includes(target) ? target : `${target} not found!`;
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
