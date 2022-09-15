import React from "react";
import ReactDOM from "react-dom";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import reactLogo from "./images/react_logo.png";

const techStack = (
    <div>
        <img src={htmlLogo} style={{ height: "10rem" }} alt="" />
        <img src={cssLogo} style={{ height: "10rem" }} alt="" />
        <img src={reactLogo} style={{ height: "10rem" }} alt="" />
    </div>
);

const app = <div>{techStack}</div>;

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
