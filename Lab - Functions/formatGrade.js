function formatGrade(grade) {
  let desc;
  grade = grade.toFixed(2);

  if (grade < 3.0) {
    desc = "Fail";
    grade = 2;
  } else if (grade < 3.5) {
    desc = "Poor";
  } else if (grade < 4.5) {
    desc = "Good";
  } else if (grade < 5.5) {
    desc = "Very good";
  } else if (grade >= 5.5) {
    desc = "Excellent";
  }
  console.log(`${desc} (${grade})`);
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
