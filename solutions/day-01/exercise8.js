// Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};
let mostSkilledPerson = Object.keys(users)[0];
let skillsLength = 0;
Object.keys(users).map((user, index) => {
    if (users[user].skills.length > skillsLength) {
        skillsLength = users[user].skills.length;
        mostSkilledPerson = Object.keys(users)[index];
    }
});
console.log(mostSkilledPerson);
// Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInCount = 0;
let moreThan50Count = 0;
Object.keys(users).map((user) => {
    if (users[user].isLoggedIn) loggedInCount++;
    if (users[user].points >= 50) moreThan50Count++;
});
console.log(loggedInCount);
console.log(moreThan50Count);
// Find people who are MERN stack developer from the users object
Object.keys(users).map((user, index) => {
    if (
        users[user].skills.includes("MongoDB" && "Express" && "React" && "Node")
    )
        console.log(Object.keys(users)[index]);
});
// Set your name in the users object without modifying the original users object
users.Siva = {};
console.log(users);
// Get all keys or properties of users object
console.log(Object.keys(users));
// Get all the values of users object
console.log(Object.values(users));
// Use the countries object to print a country name, capital, populations and languages.
