function addressBook(data) {
  let addressBooks = {};

  for (let line of data) {
    let [name, address] = line.split(":");
    addressBooks[name] = address;
  }

  let entries = Object.entries(addressBooks);
  let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let key of sortedEntries) {
    console.log(key[0], "->", key[1]);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
