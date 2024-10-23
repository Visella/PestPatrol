import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/" onClick={() => setMenuActive(false)}>
            <img src="../assets/logo.png" alt="Pest Patrol" id="logo" />
          </Link>
        </h1>
      </div>
      <nav>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <Link to="/" onClick={() => setMenuActive(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/detect" onClick={() => setMenuActive(false)}>
              Detect
            </Link>
          </li>
          <li>
            <Link to="/price" onClick={() => setMenuActive(false)}>
              Price
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuActive(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setMenuActive(false)}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
