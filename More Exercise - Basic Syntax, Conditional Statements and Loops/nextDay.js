function nextDay(year, month, day) {
  let data = new Date(year, (month -= 1), (day += 1));
  let newYear = data.getFullYear();
  let newMonth = data.getMonth();
  let newDay = data.getDate();
  console.log(`${newYear}-${newMonth + 1}-${newDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
