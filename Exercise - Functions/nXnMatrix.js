function nXnMatrix(n) {
  let res = "";

  for (let i = 1; i <= n; i++) {
    res += n + " ";
  }

  for (let j = 1; j <= n; j++) {
    console.log(`${res}`);
  }
}

nXnMatrix(7);
