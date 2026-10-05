import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => (
  <div id="logo">
    <img src="assets/logo.png" alt="LOGO IMAGE"></img>
  </div>
);
const Navbar = () => (
  <div className="navbar-container">
    <ul>
      <li>Name</li>
      <li>Contact Us </li>
      <li>About Us</li>
      <li>Cart</li>
    </ul>
  </div>
);
const Header = () => (
  <div id="header">
    <Logo />
    <Navbar />
  </div>
);

const RestCard = () => {
  return (
    <div className="rest-card">
      <img
        className="card-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwblbNNpafqsV3AcmYbiuGkBVnBzP_cpRormOnPfjkQ&s=10"
      />
      <h3>KHUSHBOO</h3>
      <h4>Biryani by khushboo</h4>
      <h4>4.4 star</h4>
      <h4>38 minutes </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        <RestCard />
        <RestCard />
        <RestCard />
        <RestCard />
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div id="layout">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
