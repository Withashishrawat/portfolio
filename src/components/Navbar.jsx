import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key closes
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <span className="logo-bracket">&lt;</span>
            Ashish<span className="logo-accent">Rawat</span>
            <span className="logo-bracket">/&gt;</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="nav-links desktop-links">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={link.path === "/"}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Drawer */}
      <aside className={`mobile-drawer ${isOpen ? "active" : ""}`}>
        <div className="drawer-header">
          <span className="logo">
            <span className="logo-bracket">&lt;</span>
            Ashish<span className="logo-accent">Rawat</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="drawer-links">
          {links.map((link, i) => (
            <li
              key={link.path}
              style={{
                transitionDelay: isOpen ? `${i * 60 + 100}ms` : "0ms",
              }}
            >
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={link.path === "/"}
              >
                <span className="link-index"></span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <NavLink
            to="/contact"
            className="btn btn-primary drawer-cta"
            onClick={closeMenu}
          >
            Hire Me
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
