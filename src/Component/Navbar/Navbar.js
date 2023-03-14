import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaCrown } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import Home from '../../routes/Home/Home';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaCrown className="navbar-icon" />
              MacaNacki
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <BiMenuAltRight />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/security"
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Security
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/safety"
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Safety
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/guildlines"
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Guildlines
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
