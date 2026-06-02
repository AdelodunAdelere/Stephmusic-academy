import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const SERVICES_MENU = [
  { icon: '🎓', label: 'Courses',  desc: 'Explore all our music programs', href: '/courses' },
  { icon: '💰', label: 'Pricing',  desc: 'Transparent, flexible plans',    href: '/pricing' },
  { icon: '👨‍🏫', label: 'Tutors',   desc: 'Meet our expert instructors',   href: '/tutors'  },
];

const ChevronIcon = ({ open }) => (
  <svg
    width="13" height="13" viewBox="0 0 13 13" fill="none"
    style={{ transition: 'transform 0.22s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <path d="M2 4.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [servicesOpen,  setServicesOpen]  = useState(false);
  const [mobileServices,setMobileServices]= useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOut = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOut);
    return () => document.removeEventListener('mousedown', onClickOut);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const linkColor = scrolled ? '#0F172A' : '#fff';
  const hoverBg   = scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)';

  return (
    <>
      <style>{`
        .sma-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .sma-nav.scrolled {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 28px rgba(0,0,0,0.05);
        }
        .sma-nav.top { background: transparent; }

        .sma-nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 70px;
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
        }
        .sma-logo img {
          height: 190px; width: auto; object-fit: contain;
          display: block;
        }
        .sma-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none;
        }
        .sma-link {
          padding: 8px 14px; border-radius: 8px;
          font-size: 0.9rem; font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-decoration: none; color: ${linkColor};
          transition: background 0.18s, color 0.18s;
          cursor: pointer; background: none; border: none;
          display: flex; align-items: center; gap: 5px;
          white-space: nowrap;
        }
        .sma-link:hover { background: ${hoverBg}; }

        /* Services dropdown */
        .sma-drop-wrap { position: relative; }
        .sma-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 18px;
          padding: 8px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.05);
          min-width: 270px; z-index: 200;
        }
        .sma-drop-item {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 15px; border-radius: 12px;
          text-decoration: none; color: #0F172A;
          transition: background 0.16s;
        }
        .sma-drop-item:hover { background: #F1F5F9; }
        .sma-drop-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .sma-drop-title { font-size: 0.88rem; font-weight: 600; color: #0F172A; }
        .sma-drop-desc  { font-size: 0.74rem; color: #64748B; margin-top: 1px; }

        /* CTA button */
        .sma-cta {
          margin-left: 8px;
          background: #2563EB; color: #fff;
          padding: 10px 22px; border-radius: 10px;
          font-size: 0.88rem; font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-decoration: none; cursor: pointer; border: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .sma-cta:hover {
          background: #1D4ED8;
          box-shadow: 0 6px 18px rgba(37,99,235,0.38);
          transform: translateY(-1px);
        }

        /* Hamburger */
        .sma-ham {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .sma-ham span {
          display: block; width: 22px; height: 2px;
          background: ${linkColor}; border-radius: 2px; transition: all 0.28s;
        }

        /* Mobile menu */
        .sma-mobile {
          display: none; position: fixed;
          top: 70px; left: 0; right: 0;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          padding: 12px 20px 24px;
          flex-direction: column; gap: 2px;
          z-index: 999;
        }
        .sma-mobile.open { display: flex; }
        .sma-mob-link {
          display: block; padding: 12px 14px; border-radius: 10px;
          color: #0F172A; font-size: 0.95rem; font-weight: 500;
          font-family: 'Inter', sans-serif; text-decoration: none;
          transition: background 0.16s;
        }
        .sma-mob-link:hover { background: #F1F5F9; }
        .sma-mob-divider { height: 1px; background: #F1F5F9; margin: 6px 0; }
        .sma-mob-sub-label {
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: #94A3B8; padding: 6px 14px 2px;
        }
        .sma-mob-toggle {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 14px; border-radius: 10px;
          color: #0F172A; font-size: 0.95rem; font-weight: 500;
          background: none; border: none; width: 100%; cursor: pointer;
          font-family: 'Inter', sans-serif; transition: background 0.16s;
        }
        .sma-mob-toggle:hover { background: #F1F5F9; }
        .sma-mob-sub-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px 10px 28px; border-radius: 10px;
          color: #334155; font-size: 0.9rem; font-weight: 500;
          font-family: 'Inter', sans-serif; text-decoration: none;
          transition: background 0.16s;
        }
        .sma-mob-sub-item:hover { background: #F1F5F9; }
        .sma-mob-cta {
          margin-top: 8px; background: #2563EB; color: #fff;
          padding: 13px; border-radius: 12px; text-align: center;
          font-size: 0.92rem; font-weight: 700;
          font-family: 'Inter', sans-serif; text-decoration: none;
          display: block; transition: background 0.2s;
        }
        .sma-mob-cta:hover { background: #1D4ED8; }

        @media (max-width: 820px) {
          .sma-links, .sma-cta { display: none; }
          .sma-ham { display: flex; }
          .sma-logo img { height: 155px; }
        }
      `}</style>

      <nav className={`sma-nav ${scrolled ? 'scrolled' : 'top'}`} role="navigation" aria-label="Main navigation">
        <div className="sma-nav-inner">
          {/* Logo */}
          <Link to="/" className="sma-logo" aria-label="Stephmusic Academy home">
            <img src={logo} alt="Stephmusic Academy" />
          </Link>

          {/* Desktop links */}
          <ul className="sma-links">
            <li><a href={isHome ? '#home' : '/'} className="sma-link">Home</a></li>
            <li><a href={isHome ? '#about' : '/#about'} className="sma-link">About</a></li>

            {/* Services with dropdown */}
            <li className="sma-drop-wrap" ref={dropdownRef}>
              <button
                className="sma-link"
                onClick={() => setServicesOpen(o => !o)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services <ChevronIcon open={servicesOpen} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="sma-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    role="menu"
                  >
                    {SERVICES_MENU.map(item => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="sma-drop-item"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="sma-drop-icon">{item.icon}</div>
                        <div>
                          <div className="sma-drop-title">{item.label}</div>
                          <div className="sma-drop-desc">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li><a href={isHome ? '#contact' : '/#contact'} className="sma-link">Contact</a></li>
          </ul>

          <a href="#register" className="sma-cta">Register Now</a>

          {/* Mobile hamburger */}
          <button
            className="sma-ham"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sma-mobile open"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <a href={isHome ? '#home' : '/'} className="sma-mob-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href={isHome ? '#about' : '/#about'} className="sma-mob-link" onClick={() => setMenuOpen(false)}>About</a>

            <button className="sma-mob-toggle" onClick={() => setMobileServices(o => !o)}>
              <span>Services</span>
              <ChevronIcon open={mobileServices} />
            </button>

            <AnimatePresence>
              {mobileServices && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  {SERVICES_MENU.map(item => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="sma-mob-sub-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.icon}</span> {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <a href={isHome ? '#contact' : '/#contact'} className="sma-mob-link" onClick={() => setMenuOpen(false)}>Contact</a>
            <div className="sma-mob-divider" />
            <a href="#register" className="sma-mob-cta" onClick={() => setMenuOpen(false)}>Register Now →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
