import React, { useState } from "react";
import "./App.css";

function App() {
    const [background, setBackground] = useState(false);
    const changeBackground = () => {
        setBackground((prev) => !prev);
    };
    const bgStyle = background ? "#243546" : "#d4e5f6";
    const fontStyle = background ? "#d4e5f6" : "#243546";
    return (
        <div
            className="App"
            style={{ backgroundColor: bgStyle, color: fontStyle }}
        >
            <h1>Welcome to 30 Days of React</h1>
            <button onClick={changeBackground}>dark-mode</button>
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
