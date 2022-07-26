function travelTime(data) {
  let destinations = {};

  for (let i = 0; i < data.length; i++) {
    let [country, town, price] = data[i].split(" > ");
    price = Number(price); 
    if (!destinations.hasOwnProperty(country)) {
      destinations[country] = {};
    }
    if (!destinations[country].hasOwnProperty(town)) {
      destinations[country][town] = price;
    }
    let prevPrice = destinations[country][town];
    if (prevPrice > price) {
      destinations[country][town] = price;
    }
  }

  let orderedCountries = [...Object.keys(destinations)].sort((a, b) =>
    a.localeCompare(b)
  );
  let result = "";

  for (let country of orderedCountries) {
    result += country + " -> ";
    let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) =>
      travelCost(a, b, destinations, country)
    );
    for (let town of sortedPrices) {
      result += `${town} -> ${destinations[country][town]} `;
    }
    result += "\n";
  }
  console.log(result);

  function travelCost(fTown, sTown, destination, country) {
    let fPrice = destination[country][fTown];
    let sPrice = destination[country][sTown];
    return fPrice - sPrice;
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
