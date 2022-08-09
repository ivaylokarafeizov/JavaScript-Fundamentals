function solve(input) {
  let string = input.shift();

  while (input[0] != "Done") {
    const [comm, ...rest] = input.shift().split(" ");

    switch (comm) {
      case "Change":
        change(rest[0], rest[1]);
        break;
      case "Includes":
        includes(rest[0]);
        break;
      case "End":
        end(rest[0]);
        break;
      case "Uppercase":
        uppercase();
        break;
      case "FindIndex":
        findIndex(rest[0]);
        break;
      case "Cut":
        cut(Number(rest[0]), Number(rest[1]));
        break;
    }
  }

  function change(char, replacement) {
    string = string.split(char).join(replacement);
    console.log(string);
  }

  function includes(substring) {
    if (string.includes(substring)) {
      console.log("True");
    } else {
      console.log("False");
    }
  }

  function end(substring) {
    if (string.endsWith(substring)) {
      console.log("True");
    } else {
      console.log("False");
    }
  }

  function uppercase() {
    string = string.toUpperCase();
    console.log(string);
  }

  function findIndex(char) {
    let index = string.indexOf(char);
    console.log(index);
  }

  function cut(startIndex, count) {
    string = string.substring(startIndex, count + startIndex);
    console.log(string);
  }
}

solve([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
