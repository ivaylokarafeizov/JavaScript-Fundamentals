function solve(input) {
  let n = Number(input.shift());
  const pattern = /(\|)(?<boss>[A-Z]{4,})\1(:#)(?<title>[A-Za-z]+ [A-Za-z]+)#/;

  for (let i = 0; i < n; i++) {
    let match = pattern.exec(input.shift());

    if (match == null) {
      console.log("Access denied!");
    } else {
      let name = match.groups["boss"];
      let title = match.groups["title"];
      console.log(
        `${name}, The ${title}\n>> Strength: ${name.length}\n>> Armor: ${title.length}`
      );
    }
  }
}

solve([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
