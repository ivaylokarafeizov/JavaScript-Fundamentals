function destinationMapper(str) {
  const pattern = /([=/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
  const places = [];

  while ((validMatch = pattern.exec(str)) !== null) { 
    places.push(validMatch.groups["destination"])
  }

  let travelPoints = 0;
  for (const place of places) {
    travelPoints += place.length; 
  }
  console.log(`Destinations: ${places.join(", ")}\nTravel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");