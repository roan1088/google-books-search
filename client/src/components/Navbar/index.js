import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link navBrand">Google Books</Link>
      <Link to="/search" className="nav-link">Search</Link>
      <Link to="/saved" className="nav-link">Saved</Link>
    </nav>
  );
}

export default Navbar;