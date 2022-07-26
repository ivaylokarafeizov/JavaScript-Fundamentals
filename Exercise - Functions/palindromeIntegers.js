function palindromeIntegers(numbers) {
  for (let element of numbers) {
    let current = String(element);
    let reversed = current.split("").reverse().join("");
    if (current === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
