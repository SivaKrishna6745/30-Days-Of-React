// What is the difference between a regular function and an arrow function?
// Both kinds of function declarations works similar but the declaration syntax will be different, binding of this keyword happens in regular function but not in arrow function, etc..

// What is a React Component?
// A React component is a type of function which returns the HTML.

// How do you make a React functional component?
// A React functional component is similar to declaring a JS function which expects props as arguments(or no arguments) and returns the HTML of the component.

// What is the difference between a pure JavaScript function and a functional component?
// A pure JS function returns some value where as functional component returns JSX

// How small is a React component?
// A component which returns single HTML as JSX is the smalest React component

// Can we make a button or input field component?
// Yes

// Make a reusable Button component.
const Button = <button>Hi Mom!!</button>;

// Make a reusable InputField component.
const InputField = <input type="text" />;

// Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
const AlertBox = (
    <div>
        <p>Warning!!</p>
    </div>
);
