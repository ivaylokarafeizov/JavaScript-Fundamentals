function employees(array) {
  let person = {};

  for (let employee of array) {
    person.employeeName = employee;
    person.personalNum = employee.length;
    console.log(
      `Name: ${person.employeeName} -- Personal Number: ${person.personalNum}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
