function emojiDetector(input) { 
  let smileyRegEx = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
  let digitRegEx = /\d/g;
  let digits = input[0].match(digitRegEx);
  let coolThreshold = digits.reduce((a, b) => a * b);
  let emojis = [];

  console.log(`Cool threshold: ${coolThreshold}`);

  let validMatch;
  while ((validMatch = smileyRegEx.exec(input[0]))) {
    emojis.push(validMatch);
  } 
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

  for (let emojiMatch of emojis) {  
    let coolness = 0;
    for (let letter of emojiMatch[2]) {
      coolness += letter.charCodeAt();
    }
    if (coolness > coolThreshold) {
      console.log(emojiMatch[0]);
    }
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
