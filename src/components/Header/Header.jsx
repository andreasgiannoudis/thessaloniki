import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navActive, setNavActive] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingUp(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const handleNavToggle = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${isScrollingUp ? "header visible" : "header hidden"} ${
        navActive ? "nav-active" : ""
      }`}
    >
      <nav>
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="has-submenu">
            <Link to="/what-to-do">What to do</Link>
            <ul className="submenu">
              <li>
                <Link to="/nightlife">Nightlife</Link>
              </li>
              <li>
                <Link to="/food-drink">Food & Drink</Link>
              </li>
              <li>
                <Link to="/view">View</Link>
              </li>
              <li>
                <Link to="/museums">Museums</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        className={`hamburger ${navActive ? "active" : ""}`}
        onClick={handleNavToggle}
      >
        <div />
        <div />
        <div />
      </button>
    </header>
  );
}

export default Header;
