function charactersInRange(firstChar, lastChar) {
  let start = Math.min(firstChar.charCodeAt(0), lastChar.charCodeAt(0));
  let end = Math.max(firstChar.charCodeAt(0), lastChar.charCodeAt(0));

  result = [];

  for (let i = start + 1; i < end; i++) {
    result.push(String.fromCharCode(i));
  }

  console.log(result.join(" "));
}

charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
