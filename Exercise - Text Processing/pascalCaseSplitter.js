function pascalCaseSplitter(string) {
  let pattern = /([A-Z][a-z]+)/g;
  let word;
  let array = [];

  while ((word = pattern.exec(string)) !== null) {
    array.push(word[0]);
  }

  console.log(array.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
