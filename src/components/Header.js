import React from "react";
import "../components/utility/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="#hero">Hansraj</a>
      </h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
