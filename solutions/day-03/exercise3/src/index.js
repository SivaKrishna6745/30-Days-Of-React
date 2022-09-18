import React from "react";
import ReactDOM from "react-dom";
import asabeneh from "./images/asabeneh.jpg";
let style = {
    "background-color": "#0dbac1",
    "border-radius": "0.4rem",
    border: "none",
    padding: "0.3rem 0.6rem",
    color: "white",
    "margin-right": "0.5rem",
};
const techDetails = (
    <div>
        <img
            src={asabeneh}
            style={{ height: "10rem", "border-radius": "10rem" }}
            alt=""
        />
        <h4>ASABENEH YETAYEH</h4>
        <br />
        <p style={{ "font-size": "13px" }}>Senior Developer, Finland</p>
        <br />
        <h4>Skills</h4>
        <br />
        <button style={style}>HTML</button>
        <button style={style}>CSS</button>
        <button style={style}>Sass</button>
        <button style={style}>JS</button>
        <button style={style}>React</button>
        <button style={style}>Redux</button>
        <br /> <br />
        <p style={{ "font-size": "13px" }}>Joined on Jan 1, 2020</p>
    </div>
);

const app = <div style={{ margin: "1rem" }}>{techDetails}</div>;

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
