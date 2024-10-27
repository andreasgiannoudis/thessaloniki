import React, { useState, useEffect } from "react";

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
        <ul class="main-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li class="has-submenu">
            <a href="#">What to do</a>
            <ul class="submenu">
              <li>
                <a href="#">Nightlife</a>
              </li>
              <li>
                <a href="#">Food & Drink</a>
              </li>
              <li>
                <a href="#">View</a>
              </li>
              <li>
                <a href="#">Museums</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
