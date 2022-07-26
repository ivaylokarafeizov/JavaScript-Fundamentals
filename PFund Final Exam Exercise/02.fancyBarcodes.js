function fancyBarcodes(input) {
  input.shift();
  const pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  const patternDigits = /[0-9]/g;

  input.forEach((barcode) => {
    if (pattern.test(barcode)) {
      const productGroup = (barcode.match(patternDigits) || ["0", "0"]).join("");
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  });
}

fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log(`=========`);
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
