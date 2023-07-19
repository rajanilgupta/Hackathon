import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [role, setRole] = useState("");
  if (role === "")
    return (
      <nav className="navbar">
        <div>
          <a href="/adminHome" className="logo">
            PortalX
          </a>
        </div>
        <br></br>
        <div className="navbar-buttons">
          <button className="create-hackathon-button">Genzeon Hackathon</button>
          <button className="show-teams-button">Guidelines</button>
          <button>
            <Link className="link">Support</Link>
          </button>
          <button>
            <Link to="/login" className="link">
              Login
            </Link>
          </button>
          <button>
            <Link to="/register" className="link">
              Register
            </Link>
          </button>
        </div>
      </nav>
    );
  else if (role === "admin")
    return (
      <nav className="navbar">
        <div>
          <a href="/adminHome" className="logo">
            PortalX
          </a>
        </div>
        <div className="navbar-buttons">
          <button className="create-hackathon-button">Create Hackathon</button>
          <button className="show-teams-button">Show Teams</button>
          <button className="logout-button">Logout</button>
        </div>
      </nav>
    );
  else if (role === "team")
    return (
      <nav className="navbar">
        <div>
          <a href="/teamHome" className="logo">
            PortalX
          </a>
        </div>
        <div className="navbar-buttons">
          <button>
            <Link to="/teamMembers" className="link">
              Show Team Members
            </Link>
          </button>
          <button>User Stories</button>
          <button>Logout</button>
        </div>
      </nav>
    );
};

export default Navbar;
