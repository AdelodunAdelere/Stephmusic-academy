// ============================================================
// COMPONENT: Navbar.jsx
// COPY THIS FILE → src/components/Navbar.jsx
// ============================================================
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 0 40px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Poppins', sans-serif;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          color: #1a1a2e;
        }
        .navbar-brand img {
          height: 250px;
          object-fit: contain;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .navbar-links a {
          text-decoration: none;
          color: #444;
          font-size: 0.92rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          transition: all 0.2s;
        }
        .navbar-links a.active,
        .navbar-links a:hover {
          background: #2196f3;
          color: #fff;
        }
        .navbar-register {
          background: #2196f3;
          color: #fff !important;
          padding: 8px 22px !important;
          border-radius: 24px !important;
          font-weight: 600 !important;
          transition: background 0.2s !important;
        }
        .navbar-register:hover {
          background: #1565c0 !important;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px; height: 2px;
          background: #2196f3;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: #fff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          padding: 16px 24px 24px;
          z-index: 999;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          text-decoration: none;
          color: #444;
          font-size: 1rem;
          font-weight: 500;
          padding: 10px 16px;
          border-radius: 10px;
          transition: background 0.2s;
          font-family: 'Poppins', sans-serif;
        }
        .mobile-menu a:hover { background: #e3f2fd; color: #2196f3; }
        .mobile-menu .mob-register {
          background: #2196f3;
          color: #fff !important;
          text-align: center;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px 0 0px; }
          .navbar-brand img { height: 200px;}
          .navbar-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <nav className="navbar">
        <a href="#home" className="navbar-brand">
          <img src={logo} alt="Stephmusic Academy" />
        </a>

        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className={link.label === "Home" ? "active" : ""}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#register" className="navbar-register">Register</a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="#register" className="mob-register" onClick={() => setMenuOpen(false)}>Register</a>
      </div>
    </>
  );
}
