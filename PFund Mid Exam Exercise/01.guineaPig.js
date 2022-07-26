function guineaPig(array) {
  let foodGrams = Number(array.shift()) * 1000;
  let hayGrams = Number(array.shift()) * 1000;
  let coverGrams = Number(array.shift()) * 1000;
  let weightGrams = Number(array.shift()) * 1000;
  let days = 1;

  while (days <= 30) {
    foodGrams -= 300;
    if (days % 2 === 0) {
      hayGrams -= (foodGrams * 5) / 100;
    }
    if (days % 3 === 0) {
      coverGrams -= weightGrams / 3;
    }

    days++;
  }

  let foodKG = foodGrams / 1000;
  let hayKG = hayGrams / 1000;
  let coverKG = coverGrams / 1000;

  if (foodKG >= 0 && hayKG >= 0 && coverKG >= 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodKG.toFixed(
        2
      )}, Hay: ${hayKG.toFixed(2)}, Cover: ${coverKG.toFixed(2)}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}

guineaPig(["10", "5", "5.2", "1"]);
