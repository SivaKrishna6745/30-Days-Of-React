import React from "react";
import "./App.css";

function App() {
    const today = new Date();
    const hours = today.getHours();
    let style = {
        backgroundColor: "",
        color: "",
    };
    if (hours >= 0 && hours < 12)
        style = {
            backgroundColor: "#e5e5e5",
            color: "#151617",
        };
    else if (hours >= 12 && hours < 16)
        style = {
            backgroundColor: "#d4c3b2",
            color: "#292929",
        };
    else if (hours >= 16 && hours < 20)
        style = {
            backgroundColor: "#292929",
            color: "#d4c3b2",
        };
    else
        style = {
            backgroundColor: "#151617",
            color: "#e5e5e5",
        };
    return (
        <div
            className="App"
            style={{
                backgroundColor: style.backgroundColor,
                color: style.color,
            }}
        >
            <h1>Welcome to 30 Days of React</h1>
            <p>
                React is a javascript library which is useful to create
                responsive, reusable interfaces
            </p>
            <ul>
                Pre-Requisites
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </div>
    );
}

export default App;
