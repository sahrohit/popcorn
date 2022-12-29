import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div className="navbar">
        <div
          className={`navbar-container ${theme === "light" ? "active" : ""}`}
        >
          <div className="logo-container">
            <h1 className="logo">popcorn</h1>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-list-item">
                <Link to="/">Home</Link>
              </li>

              <li className="menu-list-item">
                <Link to="/movie">Movies</Link>
              </li>
              <li className="menu-list-item">Watch List</li>
            </ul>
          </div>
          <div className="profile-container">
            <img
              className="profile-picture"
              src="https://randomuser.me/api/portraits/men/53.jpg"
            />
            <div className="profile-text-container">
              <span className="profile-text">Profile</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div
              className={`toggle ${theme === "light" ? "active" : ""}`}
              onClick={() =>
                setTheme((theme) => {
                  return theme === "light" ? "dark" : "light";
                })
              }
            >
              <i className="fas fa-moon toggle-icon"></i>
              <i className="fas fa-sun toggle-icon"></i>
              <div
                className={`toggle-ball ${theme === "light" ? "active" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sidebar">
        <i className="left-menu-icon fas fa-search"></i>
        <i className="left-menu-icon fas fa-home"></i>
        <i className="left-menu-icon fas fa-hourglass-half"></i>
        <i className="left-menu-icon fas fa-tv"></i>
        <i className="left-menu-icon fas fa-ticket-alt"></i>
        <i className="left-menu-icon fas fa-bookmark"></i>
        <i className="left-menu-icon fas fa-arrow-down"></i>
      </div> */}
    </>
  );
};

export default Navbar;
