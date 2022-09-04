// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = prompt("Enter your score:");
if (score > 80 && score < 100) console.log("A");
else if (score > 70 && score < 89) console.log("B");
else if (score > 60 && score < 69) console.log("C");
else if (score > 50 && score < 59) console.log("D");
else console.log("F");
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
user_input = prompt("Enter a season name:").toLowerCase();
if (
    user_input === "september" ||
    user_input === "october" ||
    user_input === "november"
)
    console.log("Autumn");
else if (
    user_input === "december" ||
    user_input === "january" ||
    user_input === "february"
)
    console.log("Winter");
else if (
    user_input === "march" ||
    user_input === "april" ||
    user_input === "may"
)
    console.log("Spring");
else if (
    user_input === "june" ||
    user_input === "july" ||
    user_input === "august"
)
    console.log("Summer");
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let user_input = prompt("What is the day today?").toLowerCase();
if (user_input === "sunday") console.log(`${user_input} is a weekend`);
else if (user_input === "monday") console.log(`${user_input} is a working day`);
else if (user_input === "tuesday")
    console.log(`${user_input} is a working day`);
else if (user_input === "wednesday")
    console.log(`${user_input} is a working day`);
else if (user_input === "thursday")
    console.log(`${user_input} is a working day`);
else if (user_input === "friday") console.log(`${user_input} is a working day`);
else if (user_input === "saturday") console.log(`${user_input} is a weekend`);
