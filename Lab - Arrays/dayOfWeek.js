function dayOfWeek(number) {
  let res;

  if (number < 1 || number > 7) {
    res = "Invalid day!";
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    res = days[number - 1];
  }

  console.log(res);
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
