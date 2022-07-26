function convertToObject(jsonStr) {
  let parsedToObject = JSON.parse(jsonString);
  let person = parsedToObject;

  //   for (let key in person) {
  //     console.log(`${key}: ${person[key]}`);
  //   }

  //   let personArray = Array.from(Object.entries(person));
  //   for (let [key, value] of personArray) {
  //     console.log(`${key}: ${value}`);
  //   }

  let keyValuePerson = Object.entries(person);

  for (let [key, value] of keyValuePerson) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
