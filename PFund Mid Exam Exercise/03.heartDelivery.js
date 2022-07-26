function heartDelivery(array) {
  let neighborhood = array.shift().split("@");
  let commands = array.shift();
  let total = 0;
  while (commands !== "Love!") {
    let jump = commands.split(" ");
    total += Number(jump[1]);
    if (total > neighborhood.length - 1) {
      total = 0;
    }
    if (neighborhood[total] === 0) {
      console.log(`Place ${total} already had Valentine's day.`);
    } else {
      neighborhood[total] = neighborhood[total] - 2;
      if (neighborhood[total] === 0) {
        console.log(`Place ${total} has Valentine's day.`);
      }
    }
    commands = array.shift();
  }
  console.log(`Cupid's last position was ${total}.`);
  let resArray = [];
  let resFlag = true;
  neighborhood.forEach((element) => {
    if (element !== 0) {
      resFlag = false;
      resArray.push(element);
    }
  });
  if (resFlag) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${resArray.length} places.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
