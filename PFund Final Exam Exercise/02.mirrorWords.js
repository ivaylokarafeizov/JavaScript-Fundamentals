function mirrorWords(str) {
  const pattern = /([@#])(?<fPair>[A-Za-z]{3,})\1\1(?<sPair>[A-Za-z]{3,})\1/g;
  const words = [];
  const mirrorWords = [];
  
  while ((validMatch = pattern.exec(str[0])) !== null) {
    words.push(validMatch.groups["fPair"]);
    words.push(validMatch.groups["sPair"]);
  }

  let count = 0;
  if (words.length == 0) {
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`);
  } else {
    for (let i = 0; i < words.length; i += 2) {
      let reversed = words[i + 1].split("").reverse().join("");
      count++;
      if (words[i] === reversed) {
        mirrorWords.push(`${words[i]} <=> ${words[i + 1]}`);
      }
    }
  }

  if (words.length) {
    console.log(`${count} word pairs found!`);
    if (mirrorWords.length) {
      console.log(`The mirror words are:`);
      console.log(mirrorWords.join(", "));
    } else {
      console.log(`No mirror words!`);
    }
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log(`===============`);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
console.log(`===============`);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
