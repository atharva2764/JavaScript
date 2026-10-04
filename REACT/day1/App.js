// import React from "react";
// import ReactDOM from "react-dom/client";

// const block = React.createElement("h1", {}, "H1 Tag ");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(block);

import React from "react";
import ReactDOM from "react-dom/client";

// const block = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "c1" }, [
//     React.createElement("h1", { key: "hh1" }, "HELLO CHILD1 I AM A H1"),
//     React.createElement(
//       "h2",
//       { key: "hh2" },
//       "HELLO CHILD1 I AM A H2 OOOOOKKKKK",
//     ),
//   ]),
//   React.createElement("div", { id: "child2", key: "c2" }, [
//     React.createElement("h1", { key: "hh1" }, "HELLO CHILD2 I AM A H1 "),
//     React.createElement(
//       "h2",
//       { key: "hh2" },
//       "HELLO CHILD2 I AM A H2 OOOOOKKKKK",
//     ),
//   ]),
// ]);

const helper = ReactDOM.createRoot(document.getElementById("root"));

// helper.render(block);

const jsxheading = <h1>HELLO JS WITH JSX</h1>
helper.render(jsxheading);