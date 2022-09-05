// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
let months_with_31_days = [
    "JANUARY",
    "MARCH",
    "MAY",
    "JULY",
    "AUGUST",
    "OCTOBER",
    "DECEMBER",
];
let months_with_30_days = ["APRIL", "JUNE", "SEPTEMBER", "NOVEMBER"];
let user_input = prompt("Enter a month:");
// Write a program which tells the number of days in a month, now consider leap year.
if (months_with_31_days.includes(user_input.toUpperCase()))
    console.log(`${user_input} has 31 days`);
else if (months_with_30_days.includes(user_input.toUpperCase()))
    console.log(`${user_input} has 30 days`);
let year_input = prompt("Enter a year:");
if (
    (year_input % 400 === 0 ||
        (year_input % 4 === 0 && year_input % 100 !== 0)) &&
    user_input.toUpperCase() === "FEBRUARY"
)
    console.log(`${user_input} has 29 days`);
else console.log(`${user_input} has 28 days`);
