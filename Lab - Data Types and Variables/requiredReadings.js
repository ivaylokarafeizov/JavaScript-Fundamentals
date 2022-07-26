function requiredReadings(allPages, pagesPerHour, days) {
  let totalReadingTime = allPages / pagesPerHour;
  let requiredHours = totalReadingTime / days;
  console.log(requiredHours);
}

requiredReadings(212, 20, 2);
requiredReadings(432, 15, 4);
