// Exercises: What is React?
// What is React?
// React is a javascript library which is used to develop responsive and reusable interfaces
// What is a library?
// A library is a pre-written code which can be used for easier development of applications
// What is a single page application?
// A single page application is an application in which routing will happen on the same page without reloading
// What is a component ?
// A component is a piece of code which can be re-used as needed
// What is the latest version of React?
// React 18 is the latest version
// What is DOM?
// A DOM is something which contains the elements and structure of the html document
// What is React Virtual DOM?
// A virtual DOM is a exact replica of a real DOM
// What does a web application or a website(composed of) have?
// A web application is composed of HTML, CSS, javascript

// Exercises: Why React?
// Why did you chose to use react?
// React is a javascript library with lots of community support. It is also easy to learn, readable language, flexible
// What measures do you use to know popularity ?
// stackoverflow, github
// What is more popular, React or Vue ?
// React

// Exercises: JSX
// What is an HTML element?
// An HTML element is a tag representing the type of element
// How to write a self closing HTML element?
// by adding '/' before right angle bracket
// What is an HTML attribute? Write some of them
// HTML attributes are the attributes which define the properties of the element. some of them are type for input, htmlFor for label, action for form
// What is JSX?
// JSX is writing html inside of javascript
// What is babel?
// babel is a javascript code transpiler
// What is a transpiler?
// A transpiler is something which is used to transpile the library code into plain javascript

// Exercises: JSX Elements
// What is a JSX element?
// A JSX element is a HTML element which is written inside javascript
// Write your name in a JSX element and store it in a name variable
const name = <h1>Siva Krishna</h1>;
// Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const user = (
    <>
        <h1>Siva Krishna</h1>
        <p>India</p>
        <p>Web Developer</p>
        <p>Male</p>
        <p>abc@gamil.com</p>
        <p>1234567890</p>
    </>
);
// Write a footer JSX element
const footer = (
    <>
        <h1>footer</h1>
    </>
);

// Exercises: Inline Style
// Create a style object for the main JSX
const mainStyle = {
    border: "2px solid orange",
    color: "black",
    fontSize: "18px",
};
// Create a style object for the footer and app JSX
const footerStyle = {
    border: "2px solid orange",
    color: "black",
    fontSize: "18px",
};
const appStyle = {
    border: "2px solid orange",
    color: "black",
    fontSize: "18px",
};
// Add more styles to the JSX elements
const moreStyles = {
    border: "2px solid orange",
    color: "black",
    fontSize: "18px",
};

// Exercises: Internal Styles
// Apply different styles to your JSX elements
<header
    style={{ border: "2px solid orange", color: "black", fontSize: "18px" }}
></header>;

// Exercise: Inject data to JSX
// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
<p>{1 + 2}</p>;
