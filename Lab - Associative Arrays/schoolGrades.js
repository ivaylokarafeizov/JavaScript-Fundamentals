function schoolGrades(data) {
  let result = new Map();

  for (let string of data) {
    let tokens = string.split(" ");
    let name = tokens.shift();
    let setOfGrade = tokens;
    if (!result.has(name)) {
      result.set(name, setOfGrade);
    } else {
      let oldSet = result.get(name);
      for (let grade of setOfGrade) {
        oldSet.push(grade);
      }
      result.set(name, oldSet);
    }
  }

  let sortEntries = Array.from(result.entries()).sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });

  for (let [key, value] of sortEntries) {
    sumGrade = 0;
    for (grade of value) {
      sumGrade += Number(grade);
    }
    let avg = sumGrade / value.length;
    console.log(`${key}: ${avg.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
