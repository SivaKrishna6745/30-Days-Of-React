// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a = 0, b = 0, c = 0) {
    if (a === 0 && b === 0 && c === 0) return 0;
    else {
        let result1 = ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
        let result2 = ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
        if (result1 === result2) {
            let result = result1;
            return { result };
        } else return { result1, result2 };
    }
}
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let array = [1, 2, 3, 4, 5];
function printArray(parameter) {
    parameter.map((param) => console.log(param));
}
printArray(array);
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let now = new Date();
    console.log(
        now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear(),
        now.getHours() + ":" + now.getMinutes()
    );
}
showDateTime();
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y);
}
swapValues(3, 4);
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    return array.map((elem) => elem.toUpperCase());
}
console.log(capitalizeArray(["a", "b", "c"]));
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, item) {
    array.push(item);
    return array;
}
console.log(addItem(["a", "b", "c"], "d"));
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
function removeItem(array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeItem(["a", "b", "c"], 1));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(integer) {
    let integerToString = integer.toString();
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < integerToString.length; i++) {
        if (integerToString[i] % 2 === 0) evenCount++;
        else oddCount++;
    }
    console.log(
        `The number of odds are: ${oddCount} \nThe number of evens are: ${evenCount}`
    );
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments
let total = 0;
function sum(...arguments) {
    let total = arguments.reduce((arg, acc) => arg + acc, 0);
    console.log(total);
}
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log();
    let id = "";
    for (let i = 0; i < 4; i++) {
        id += letters[Math.floor(Math.random() * letters.length)];
    }
    for (let i = 0; i < 3; i++) {
        id += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return id;
}
console.log(userIdGenerator());
// 41XTDbE
