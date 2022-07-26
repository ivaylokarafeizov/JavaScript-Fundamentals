function city(object) {
  for (let key in object) {
    console.log(`${key} -> ${object[key]}`);
  }

  //   let cityArray = Array.from(Object.entries(city));
  //   for (let [key, value] of cityArray) {
  //     console.log(key, "->", value);
  //   }

  // let keys = Object.keys(city);
  // for (let key of keys) {
  //   console.log(key, "->", city[key]);
  // }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
