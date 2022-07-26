function reverseString(input) {
  let reversed = input.split("").reverse().join("");
  console.log(reversed);
}

reverseString(`Hello`);
reverseString(`SoftUni`);
reverseString(`1234`);
