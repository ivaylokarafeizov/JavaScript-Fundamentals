function race(input) {
  const participants = input.shift();
  let line = input.shift();
  const partsObj = {};

  while (line !== "end of race") {
    const patternName = /[A-Za-z]/g;
    const name = line.match(patternName).join("");
    const patternDistance = /\d/g;
    const distance = line.match(patternDistance);
    const distanceSum = distance.reduce((a, b) => Number(a) + Number(b));

    if (participants.includes(name)) {
      if (!partsObj.hasOwnProperty(name)) {
        partsObj[name] = distanceSum;
      } else {
        partsObj[name] += distanceSum;
      }
    }
    line = input.shift();
  }

  const partsArr = Array.from(Object.entries(partsObj)).sort(
    (a, b) => b[1] - a[1]
  );

  console.log(
    `1st place: ${partsArr[0][0]}\n2nd place: ${partsArr[1][0]}\n3rd place: ${partsArr[2][0]}`
  );
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]); 