import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>TITLE HEADING </h1>;

const Heading = () => (
  <div id="container">
    <Title />
    <h1 className="heading">HEADING H1 TAG</h1>
  </div>
);

//! Class Based Component       OLD

//! functional Based Component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
