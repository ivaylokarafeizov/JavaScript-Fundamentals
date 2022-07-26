function bonusScoringSystem(array) {
  let students = Number(array.shift());
  let lectures = Number(array.shift());
  let additionalBonus = Number(array.shift());
  let maxBonus = 0;
  let maxAttendance = 0;

  for (let i = 0; i < students; i++) {
    let attendances = array[i];
    let bonus = (attendances / lectures) * (5 + additionalBonus);

    if (bonus >= maxBonus) {
      maxBonus = bonus;
      maxAttendance = attendances;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
