import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#Services">Services</a>
            </li>
            <li>
                <a href="#works">Projects</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
