import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login pengguna
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  console.log("Current Path:", location.pathname);
  const getLinkClass = (path: string) => {
    console.log(`Path: ${path}, Active: ${location.pathname === path}`);
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/" onClick={() => setMenuActive(false)}>
            <img src="../assets/logoo.png" alt="Pest Patrol" id="logo" />
          </Link>
        </h1>
      </div>
      <nav>
        <ul className={menuActive ? "active" : ""}>
          <li>
            <Link
              to="/"
              className={getLinkClass("/")}
              onClick={() => setMenuActive(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/detect"
              className={getLinkClass("/detect")}
              onClick={() => setMenuActive(false)}
            >
              Detect
            </Link>
          </li>
          <li>
            <Link
              to="/price"
              className={getLinkClass("/price")}
              onClick={() => setMenuActive(false)}
            >
              Price
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={getLinkClass("/about")}
              onClick={() => setMenuActive(false)}
            >
              About
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="profile-link"
                onClick={() => setMenuActive(false)}
              >
                <img
                  src="../assets/profile.png"
                  alt="Profile"
                  className="profile-icon"
                />
              </Link>
            ) : (
              <Link
                to="/login"
                className={getLinkClass("/login")}
                onClick={() => setMenuActive(false)}
              >
                Login
              </Link>
            )}
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
