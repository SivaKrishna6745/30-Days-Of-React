// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.
const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "D3.js",
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// function regular way
function getPersonInfoNormal(obj) {
    let skillsDesc = "";
    for (let i = 0; i < obj.skills.length; i++) {
        if (i === obj.skills.length - 1) skillsDesc += " and " + obj.skills[i];
        else if (i === obj.skills.length - 2) skillsDesc += " " + obj.skills[i];
        else skillsDesc += obj.skills[i] + ", ";
    }
    let languagesDesc = "";
    for (let i = 0; i < obj.languages.length; i++) {
        if (i === obj.languages.length - 1) {
            if (obj.languages[i].includes("("))
                languagesDesc += " and a little bit of " + obj.languages[i];
            else languagesDesc += " and " + obj.languages[i];
        } else if (i === obj.languages.length - 2)
            languagesDesc += obj.languages[i];
        else languagesDesc += obj.languages[i] + ", ";
    }
    return `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${skillsDesc}. He speaks ${languagesDesc} `;
}
console.log(getPersonInfoNormal(person));
// function destructuring way
function getPersonInfoDestructuring(obj) {
    const { firstName, lastName, country, age, job, skills, languages } = obj;
    let skillsDesc = "";
    for (let i = 0; i < obj.skills.length; i++) {
        if (i === obj.skills.length - 1) skillsDesc += " and " + obj.skills[i];
        else if (i === obj.skills.length - 2) skillsDesc += obj.skills[i];
        else skillsDesc += obj.skills[i] + ", ";
    }
    let languagesDesc = "";
    for (let i = 0; i < obj.languages.length; i++) {
        if (i === obj.languages.length - 1) {
            if (obj.languages[i].includes("("))
                languagesDesc += " and a little bit of " + obj.languages[i];
            else languagesDesc += " and " + obj.languages[i];
        } else if (i === obj.languages.length - 2)
            languagesDesc += obj.languages[i];
        else languagesDesc += obj.languages[i] + ", ";
    }
    return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skillsDesc}. He speaks ${languagesDesc} `;
}
console.log(getPersonInfoDestructuring(person));
/*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */
