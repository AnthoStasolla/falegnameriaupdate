import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { handleClick, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="header" onClick={handleClick}>
        <Link to="/">
          <h1 className="text-nav">FRANCO STASOLLA</h1>
        </Link>
        <ul className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Chi siamo</Link>
          </li>
          <li>
            <Link to="/gallery">Galleria</Link>
          </li>
          <li>
            <Link to="/contatti">Contatti</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {isSidebarOpen ? (
            <FaTimes size={20} style={{ color: "#e47a19" }} />
          ) : (
            <FaBars size={20} style={{ color: "whitesmoke" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
