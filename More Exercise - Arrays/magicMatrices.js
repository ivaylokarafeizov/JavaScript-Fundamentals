function magicMatrices(matrix) {
  let totalRows = matrix[0].reduce((a, b) => a + b);
  let totalColumns = 0;

  matrix.forEach((row) => {
    totalColumns += row[0];
  });

  let result = true;

  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i].reduce(
      (firstItem, nextItem) => firstItem + nextItem
    );
    let currentColumn = 0;
    for (let j = 0; j < matrix.length; j++) {
      let number = matrix[j][i];
      currentColumn += number;
    }
    if (currentRow !== totalRows || currentColumn !== totalColumns) {
      result = false;
      break;
    }
  }
  console.log(result);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
