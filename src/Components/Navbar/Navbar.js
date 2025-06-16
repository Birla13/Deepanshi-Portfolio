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
            <a href="#Case Studies">Skills</a>
          </li>
          {/* <li>
            <a href="#Skills & Tools">Skills & Tools</a>
          </li> */}
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
