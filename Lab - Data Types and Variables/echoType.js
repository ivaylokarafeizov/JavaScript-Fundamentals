function echoType(param) {
  if (typeof param === "object") {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  } else {
    console.log(typeof param);
    console.log(param);
  }
}

echoType("Hello, JavaScript!");
echoType(18);
echoType(null);
