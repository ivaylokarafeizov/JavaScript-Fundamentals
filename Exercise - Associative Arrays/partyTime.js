function partyTime(data) {
  let vip = [];
  let regular = [];
  let isParty = false;

  for (let line of data) {
    if (line === "PARTY") {
      isParty = true;
      continue;
    }
    if (!isParty) {
      let firstCh = line[0];
      if (isNaN(firstCh)) {
        regular.push(line);
      } else {
        vip.push(line);
      }
    } else {
      let firstCh = line[0];
      if (isNaN(firstCh)) {
        let index = regular.indexOf(line);
        regular.splice(index, 1);
      } else {
        let index = vip.indexOf(line);
        vip.splice(index, 1);
      }
    }
  }

  let size = regular.length + vip.length;
  console.log(size);

  for (let code of vip) {
    console.log(code);
  }

  for (let code of regular) {
    console.log(code);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
