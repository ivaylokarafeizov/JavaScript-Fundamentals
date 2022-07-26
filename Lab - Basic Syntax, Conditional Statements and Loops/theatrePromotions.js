function theatrePromotions(day, age) {
  if (age >= 0 && age <= 122) {
    if (age <= 18 && day == "Weekday") {
      console.log("12$");
    } else if (age <= 64 && day == "Weekday") {
      console.log("18$");
    } else if (age <= 122 && day == "Weekday") {
      console.log("12$");
    } else if (age <= 18 && day == "Weekend") {
      console.log("15$");
    } else if (age <= 64 && day == "Weekend") {
      console.log("20$");
    } else if (age <= 122 && day == "Weekend") {
      console.log("15$");
    } else if (age <= 18 && day == "Holiday") {
      console.log("5$");
    } else if (age <= 64 && day == "Holiday") {
      console.log("12$");
    } else if (age <= 122 && day == "Holiday") {
      console.log("10$");
    }
  } else {
    console.log("Error!");
  }
}

theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
