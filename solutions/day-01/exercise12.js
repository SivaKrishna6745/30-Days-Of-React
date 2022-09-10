// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    let chars = [
        "A",
        "a",
        "B",
        "b",
        "C",
        "c",
        "D",
        "d",
        "E",
        "e",
        "F",
        "f",
        "G",
        "g",
        "H",
        "h",
        "I",
        "i",
        "J",
        "j",
        "K",
        "k",
        "L",
        "l",
        "M",
        "m",
        "N",
        "n",
        "O",
        "o",
        "P",
        "p",
        "Q",
        "q",
        "R",
        "r",
        "S",
        "s",
        "T",
        "t",
        "U",
        "u",
        "V",
        "v",
        "W",
        "w",
        "X",
        "x",
        "Y",
        "y",
        "Z",
        "z",
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
    ];
    let numberOfCharacters = prompt("enter number of characters");
    let numberOfIds = prompt("enter number of ids to be generated");
    let id = "";
    for (let i = 0; i < Number(numberOfCharacters) + Number(numberOfIds); i++) {
        id +=
            chars[
                (Math.floor(Math.random() * chars.length) + chars.length) %
                    chars.length
            ];
    }
    console.log(id);
}
userIdGeneratedByUser();
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, numOfColors) {
    let chars = [
        "A",
        "a",
        "B",
        "b",
        "C",
        "c",
        "D",
        "d",
        "E",
        "e",
        "F",
        "f",
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
    ];
    let hexColors = [];
    let rgbColors = [];
    if (type === "hexa") {
        for (let i = 0; i < numOfColors; i++) {
            hexColors.push(hexColor(chars));
        }
        return hexColors;
    } else if (type === "rgb") {
        for (let i = 0; i < numOfColors; i++) {
            rgbColors.push(rgbColor());
        }
        return rgbColors;
    }
}
function hexColor(chars) {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex +=
            chars[
                (Math.floor(Math.random() * chars.length) + chars.length) %
                    chars.length
            ];
    }
    return hex;
}
function rgbColor() {
    let rgb = "rgb(";
    for (let i = 0; i < 3; i++) {
        rgb += Math.floor(Math.random() * 255) + ",";
    }
    rgb = rgb.substring(0, rgb.length - 1);
    rgb += ")";
    return rgb;
}
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(10));
// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
    if (param === "") return "empty";
    else return "not empty";
}
console.log(isEmpty(" "));
// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
    let sum = array.reduce((acc, rep) => acc + rep, 0);
    return sum / array.length;
}
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
