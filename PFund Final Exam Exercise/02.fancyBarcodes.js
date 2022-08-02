function solve(input) {
  const n = input.shift();
  const barcodePattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

  for (let i = 0; i < n; i++) {
    if (barcodePattern.test(input[i])) {
      const productGroup = (input[i].match(/\d/g) || ["0", "0"]).join("");
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
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
