// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const showFullName = () => {
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
    let fullName = `${firstName} ${lastName}`;
    return fullName;
};
console.log(showFullName());
// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addSum = () => {
    let firstNumber = prompt("what is the first number?");
    let secondNumber = prompt("what is the second number?");
    let sum = `${Number(firstNumber) + Number(secondNumber)}`;
    return sum;
};
console.log(addSum());
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const PI = 3.14;
const areaOfCircle = () => {
    let radius = prompt("what is the radius of the circle?");
    let area = PI * Math.pow(radius, 2);
    return area;
};
console.log(areaOfCircle());
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = () => {
    let degreeC = prompt("what is the temperature in celcius?");
    let degreeF = (Number(degreeC) * 9) / 5 + 32;
    return degreeF;
};
console.log(convertCelciusToFahrenheit());
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
const calculateBMI = () => {
    let weight = prompt("what is your weight in kg?");
    let height = prompt("what is your height in m?");
    let bmi = weight / Math.pow(height, 2);
    return bmi;
};
let result = calculateBMI();
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
if (result < 18.5) console.log("underweight");
else if (result >= 18.5 && result < 24.9) console.log("normal weight");
else if (result >= 24.9 && result < 29.9) console.log("over weight");
else console.log("obese");
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = () => {
    let month = prompt("what is the month number?");
    if (month === 9 || month === 10 || month === 11) console.log("Autumn");
    else if (month === 12 || month === 1 || month === 2) console.log("Winter");
    else if (month === 3 || month === 4 || month === 5) console.log("Spring");
    else console.log("Summer");
};
checkSeason();
