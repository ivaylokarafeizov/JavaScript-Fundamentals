function reverseInPlace(array) {
  let res = "";

  for (let i = array.length - 1; i >= 0; i--) {
    res += array[i] + " ";
  }

  console.log(res);
}

reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
