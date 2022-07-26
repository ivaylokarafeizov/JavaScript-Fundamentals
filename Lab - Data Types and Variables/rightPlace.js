function rightPlace(firstString, char, secondString) {
  let res = "";
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] == "_") {
      res += char;
    } else {
      res += firstString[i];
    }
  }
  if (res === secondString) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
