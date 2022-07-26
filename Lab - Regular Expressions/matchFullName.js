function matchFullName(input) {
    let pattern = /\b[A-Z]{1}[a-z]{1,} {1}[A-Z]{1}[a-z]{1,}\b/g;
    let validNames = [];
    
    let validName;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
); 