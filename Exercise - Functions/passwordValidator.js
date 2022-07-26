function passwordValidator(password) {
  function isLengthEnough(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function isOnlyLettersAndDigits(password) {
    for (let index of password) {
      let currentChar = index.charCodeAt(0);
      if (
        !(currentChar >= 48 && currentChar <= 57) &&
        !(currentChar >= 65 && currentChar <= 90) &&
        !(currentChar >= 97 && currentChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHavingAtleastTwoDigits(password) {
    let count = 0;
    for (let index of password) {
      let currentChar = index.charCodeAt(0);
      if (currentChar >= 48 && currentChar <= 57) {
        count++;
      }
    }
    return count >= 2;
  }

  let isLengthValid = isLengthEnough(password);
  let isLettersAndDigits = isOnlyLettersAndDigits(password);
  let isAtleastTwoDigits = isHavingAtleastTwoDigits(password);

  if (isLengthValid && isLettersAndDigits && isAtleastTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isAtleastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
