import React from "react";
import ReactDom from "react-dom";

const fName = "Rahul";
const lName = "Shewale";
ReactDom.render(
  <div>
    <h1>Hello {fName + " " + lName} !</h1>
    <p>Your Lucky Number Is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
