function sortByCriteria(array) {
  let sortedArray = array.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  console.log(sortedArray.join("\n"));
}

sortByCriteria(["alpha", "beta", "gamma"]);
sortByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
