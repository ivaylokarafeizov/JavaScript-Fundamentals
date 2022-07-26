function softUniReception(input) {
  let firstEmployee = Number(input.shift());
  let secondEmployee = Number(input.shift());
  let thirdEmployee = Number(input.shift());
  let studentsCount = Number(input.shift());
  let totalEfficiency = firstEmployee + secondEmployee + thirdEmployee;
  let hours = 0;

  while (studentsCount > 0) {
    studentsCount -= totalEfficiency;
    hours++;

    if (hours % 4 === 0) {
      hours++;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

softUniReception(["5", "6", "4", "20"]);
