function thePyramidOfKingDjoser(base, increment) {
  let totalStone = 0;
  let totalMarble = 0;
  let totalLapis = 0;
  let row = 0;

  while (base > 2) {
    let marble = base * 4 - 4;
    let stone = base * base - marble;
    totalStone += stone;
    row++;
    if (row % 5 === 0) {
      totalLapis += marble;
    } else {
      totalMarble += marble;
    }
    base -= 2;
  }
  row++;

  console.log(`Stone required: ${Math.ceil(totalStone * increment)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis * increment)}`);
  console.log(`Gold required: ${Math.ceil(base * base * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(row * increment)}`);
}

thePyramidOfKingDjoser(11, 1);
