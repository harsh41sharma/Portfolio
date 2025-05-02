import { useState, useEffect } from "react";
import { navLinks } from "../constant";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`} style={{ backgroundColor: "#FFFFFF" }}>
      <div className="inner">
        <a href="#hero" className="logo" style={{ color: "#000000" }}>
          Harsh Sharma
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} style={{ color: "#000000" }}>
                  <span>{name}</span>
                  <span className="underline" style={{ backgroundColor: "#000000" }} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group" style={{ border: "1px solid #000000" }}>
          <div className="inner">
            <span style={{ color: "#000000" }}>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
