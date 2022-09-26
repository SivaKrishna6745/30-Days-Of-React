import React, { useState } from "react";
import "./App.css";

function App() {
    const [background, setBackground] = useState(false);
    const changeBackground = () => {
        setBackground((prev) => !prev);
    };
    const style = background ? "#243546" : "#d4e5f6";
    return (
        <div className="App" style={{ backgroundColor: style }}>
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
