function meetings(data) {
  let meetingDays = {};

  for (let line of data) {
    let [weekday, name] = line.split(" ");
    if (meetingDays.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetingDays[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (let key in meetingDays) {
    console.log(key, "->", meetingDays[key]);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
