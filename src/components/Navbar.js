import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="header" id="header">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/KORUS-logo-2.png" alt="" className="nav-logo" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              {/* nav links start here */}
              <ul class="nav-links" id="nav-links">
                <li className="nav-link scroll-link">
                  <Link to="/" style={{ color: 'white' }}>
                    Home
                  </Link>
                </li>
                <li className="nav-link scroll-link">
                  <Link to="/service" style={{ color: 'white' }}>
                    Service
                  </Link>
                </li>
                <li className="nav-link scroll-link">
                  <Link to="/approach" style={{ color: 'white' }}>
                    Approach
                  </Link>
                </li>
                <li className="nav-link scroll-link">
                  <Link to="/team" style={{ color: 'white' }}>
                    Team
                  </Link>
                </li>
                <li className="nav-link scroll-link">
                  <Link to="/connect" style={{ color: 'white' }}>
                    Connect
                  </Link>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
