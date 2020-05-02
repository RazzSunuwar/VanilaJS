const companies = [
    {name: "Company 0ne", category: "Finance", start: 1981, end: 2002},
    {name: "Company Two", category: "Retail", start: 1982, end: 2003},
    {name: "Company Four", category: "Auto", start: 1983, end: 2002},
    {name: "Company Five", category: "Technology", start: 1980, end: 2005},
    {name: "Company Six", category: "Finance", start: 1984, end: 2000},
    {name: "Company Seven", category: "Retail", start: 1986, end: 2003},
    {name: "Company Eight", category: "Auto", start: 1981, end: 2002},
    {name: "Company Nine", category: "Technology", start: 1979, end: 2002}
];

const ages = [22, 11, 50, 5, 12, 14, 32, 44, 77, 3, 40, 100, 60, 26, 27];

// Standard for loop
// for( let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// Check Company name
// forEach()
// companies.forEach(function(company) {
//     console.log(company.name)
// })

// Check age greater or eaual to 21
// filter()
// Standard for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });console.log(canDrink);


// With Arrow function
// const canDrink = ages.filter(age => age >= 21 );
// console.log(canDrink);


// Filter retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
// console.log(retailCompanies);

// Get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= 
//     1980 && company.start < 1990));
//     console.log(eightiesCompanies);

//     // Get companies that lasted 10 years or more
//     const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
//     console.log(lastedTenYears);

// map()
// Create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);

console.log(ageMap);

// sort()
// reduce()