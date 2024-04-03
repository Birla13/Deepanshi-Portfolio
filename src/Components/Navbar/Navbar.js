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
                <a href="./Header">About</a>
            </li>
            <li>
                <a href="./Services">Services</a>
            </li>
            <li>
                <a href="/Works">Projects</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
