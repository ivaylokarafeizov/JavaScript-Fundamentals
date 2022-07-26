function loadingBar(number) {
  let loading = `${"%".repeat(number / 10)}${".".repeat((100 - number) / 10)}`;
  let res;

  if (number === 100) {
    res = `${number}% Complete!\n[${loading}]`;
  } else {
    res = `${number}% [${loading}]\nStill loading...`;
  }

  console.log(res);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
