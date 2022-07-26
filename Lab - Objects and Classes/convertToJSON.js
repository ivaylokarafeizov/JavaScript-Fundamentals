function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };
  let convertToJSON = JSON.stringify(person);

  console.log(convertToJSON);
}

convertToJSON("George", "Jones", "Brown");
