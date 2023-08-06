import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import TocIcon from "@mui/icons-material/Toc";
import "../styles/Navbar.css";

function Navbar() {
  const [openLink, setOpenLink] = useState(false);
  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLink ? "open" : "close"}>
        <img src={Logo} alt="pizza logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <TocIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
