import React from "react";

function Navbar() {
  return (
    <div id="nav-menu">
      Navbar
      <a className="nav-link home" href="#home">
        Home
      </a>
      <a className="nav-link about" href="#about">
        About
      </a>
      <a className="nav-link skills" href="#skills">
        Skills
      </a>
      <a className="nav-link projects" href="#projects">
        Projects
      </a>
      <a className="nav-link contact" href="#contact">
        Contacts
      </a>
      <a className="nav-link resume" href="#resume">
        Resume
      </a>
    </div>
  );
}

export default Navbar;
