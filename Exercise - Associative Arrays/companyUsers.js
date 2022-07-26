function companyUsers(data) {
    let companies = {};

    for (let line of data) {
        let [company, id] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(id);     
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let element of sorted) {
        console.log(element[0]);
        for (let number of element[1]) {
            console.log(`-- ${number}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );