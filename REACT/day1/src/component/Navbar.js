import { useState } from "react";

const Navbar = () => {
  let [btnName, setButtonName] = useState("LOGIN");
  let [search, setSearch] = useState("");
  return (
    <div className="navbar-container">
      <ul>
        <li>Name</li>
        <li>Contact Us </li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
      <button
        className="Loginbtn"
        onClick={() => {
          btnName === "LOGIN"
            ? setButtonName("Logout")
            : setButtonName("LOGIN");
        }}
      >
        {btnName}
      </button>
    </div>
  );
};
export default Navbar;
