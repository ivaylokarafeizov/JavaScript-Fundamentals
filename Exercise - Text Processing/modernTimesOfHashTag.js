function modernTimesOfHashTag(string) {
  let arrayForCheck = [];

  for (let word of string.split(" ")) {
    if (word.startsWith("#") && word.length > 1) {
      arrayForCheck.push(word.substring(1));
    }
  }

  let finalRes = [];

  for (let word of arrayForCheck) {
    let array = word.split('');
    let isLetters = true;
    for (let i = 0; i < array.length; i++) { 
      let ch = array[i].charCodeAt(0);
      if ((ch < 97 || ch > 122) && (ch < 65 || ch > 90)) {
        isLetters = false;
      }
    }
    if (isLetters) {
      finalRes.push(word);
    }
  }

  finalRes.forEach((el) => console.log(el));
}

modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia and ##someone"
);
