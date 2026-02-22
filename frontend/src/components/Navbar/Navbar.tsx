import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__logo">
          AP
        </div>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Adinath-S-Pawar"
              target="_blank"
              rel="noreferrer"
              className="navbar__cta"
            >
              GitHub
            </a>
          </li>
        </ul>
        <button className="navbar__hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;