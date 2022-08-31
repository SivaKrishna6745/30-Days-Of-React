// Declare an empty array
let arr = [];

// Declare an array with more than 5 number of elements
const elements = [1, 2, 3, 4, 5];

// Find the length of your array
const elements_len = elements.length;

// Get the first item, the middle item and the last item of the array
console.log(
    "first element: " + elements[0],
    "middle element: " + elements[Math.floor(elements_len - elements_len / 2)],
    "last element: " + elements[elements_len - 1]
);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    1,
    3.14,
    "5+6i",
    "Siva",
    { country: "India", city: "Rajahmundry" },
    { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
const mixedDataTypes_len = mixedDataTypes.length;
console.log(mixedDataTypes_len);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
let itCompanies_len = itCompanies.length;

// Print the first company, middle and last company
console.log(
    "first company: " + itCompanies[0],
    "middle company: " +
        itCompanies[Math.ceil(itCompanies_len - itCompanies_len / 2)],
    "last company: " + itCompanies[itCompanies_len - 1]
);

// Print out each company
itCompanies.forEach((company) => {
    console.log(company);
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
    console.log(company.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companies = "";
for (i = 0; i < itCompanies_len - 1; i++) {
    if (i !== itCompanies_len - 1) {
        companies += itCompanies[i] + ", ";
    } else {
        companies += "and";
    }
}
companies += itCompanies[itCompanies_len - 1] + " are big IT companies";
console.log(companies);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyName = "Facebook";
if (itCompanies.includes(companyName)) {
    console.log(companyName);
} else {
    console.log("not found");
}

// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach((company) => {
    let count = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i] === "o") count = count + 1;
    }
    if (count > 1) {
        console.log(company);
    }
});

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.reverse().slice(0, 3));

// Slice out the middle IT company or companies from the array
sliced_len = Math.floor(itCompanies_len / 2);
console.log(itCompanies.slice(sliced_len, sliced_len + 1));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(sliced_len, 1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
const val = itCompanies.length;
for (let i = 0; i < val; i++) {
    itCompanies.pop();
}
console.log(itCompanies);
