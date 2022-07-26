function substring(str, start, end) {
  let res = str.substring(start, end + start);
  console.log(res);
}

substring("ASentence", 1, 8);
substring("SkipWord", 4, 7);
