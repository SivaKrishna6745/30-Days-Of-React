// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let min_age = Math.min(...ages);
let max_age = Math.max(...ages);
console.log("min age is: " + min_age);
console.log("max age is: " + max_age);
let median_age;
if (ages.length % 2 === 0)
    median_age = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
else median_age = ages[ages.length / 2 - 1] / 2;
console.log("median ages is: " + median_age);
let range_of_ages = max_age - min_age;
console.log("range of ages: " + range_of_ages);
let sum = ages.reduce((acc, rep) => {
    return acc + rep;
});
console.log(sum);
// 1.Slice the first ten countries from the countries array
import countries from "./countries.mjs";
console.log(countries.slice(0, 1));
// Find the middle country(ies) in the countries array
console.log(countries.length % 2);
if (countries.length % 2 === 0)
    console.log(
        countries[countries.length / 2 - 1],
        countries[countries.length / 2]
    );
else console.log(countries[(countries.length - 1) / 2]);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let even_countries = [];
let odd_countries = [];
for (let i = 0; i < countries.length; i++) {
    if (i % 2 === 0) even_countries.push(countries[i]);
    else odd_countries.push(countries[i]);
}
console.log(even_countries);
console.log(odd_countries);
