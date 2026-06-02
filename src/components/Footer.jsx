import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const QUICK_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About Us',     href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
  { label: 'Register',     href: '#register' },
];

const SERVICES_LINKS = [
  { label: 'All Courses',       to: '/courses' },
  { label: 'Pricing Plans',     to: '/pricing' },
  { label: 'Meet Our Tutors',   to: '/tutors' },
  { label: 'Piano Lessons',     to: '/courses' },
  { label: 'Guitar Classes',    to: '/courses' },
  { label: 'Music Production',  to: '/courses' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/stephmusicng', icon: '📸' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@ferefolu',      icon: '▶️' },
  { label: 'Facebook',  href: '#',                                        icon: '📘' },
  { label: 'Twitter/X', href: '#',                                        icon: '🐦' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: #030712;
          color: #fff;
          font-family: 'Inter', sans-serif;
          padding: 72px 24px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Brand column */
        .footer-brand {}
        .footer-logo { height: 140px; width: auto; object-fit: contain; margin-bottom: 16px; }
        .footer-tagline {
          font-size: 0.88rem; color: rgba(255,255,255,0.45); line-height: 1.7;
          max-width: 260px; margin-bottom: 24px;
        }
        .footer-social { display: flex; gap: 8px; flex-wrap: wrap; }
        .footer-social-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          font-size: 0.78rem; font-weight: 600;
          text-decoration: none;
          transition: all 0.18s;
          font-family: 'Inter', sans-serif;
        }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }

        /* Link columns */
        .footer-col-title {
          font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 20px;
        }
        .footer-links { display: flex; flex-direction: column; gap: 10px; }
        .footer-link {
          font-size: 0.875rem; color: rgba(255,255,255,0.55);
          text-decoration: none; transition: color 0.18s;
          font-family: 'Inter', sans-serif;
        }
        .footer-link:hover { color: #fff; }

        /* Contact blurbs */
        .footer-contact-item {
          display: flex; align-items: flex-start; gap: 8px; margin-bottom: 12px;
        }
        .footer-contact-icon { font-size: 0.9rem; margin-top: 1px; }
        .footer-contact-text { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.5; }

        /* Bottom bar */
        .footer-bottom {
          padding: 20px 0;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.8rem; color: rgba(255,255,255,0.3);
        }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-link {
          font-size: 0.78rem; color: rgba(255,255,255,0.3);
          text-decoration: none; transition: color 0.18s;
        }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.65); }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 560px) {
          .footer { padding: 56px 16px 0; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/">
                <img src={logo} alt="Stephmusic Academy" className="footer-logo" />
              </Link>
              <p className="footer-tagline">
                Nigeria's premier music academy — where passion meets world-class training.
                Lagos-based, globally inspired.
              </p>
              <div className="footer-social">
                {SOCIAL_LINKS.map(s => (
                  <a key={s.label} href={s.href} className="footer-social-btn" target="_blank" rel="noopener noreferrer">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer-col-title">Quick Links</div>
              <div className="footer-links">
                {QUICK_LINKS.map(l => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-links">
                {SERVICES_LINKS.map(l => (
                  <Link key={l.label} to={l.to} className="footer-link">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-col-title">Get In Touch</div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <div className="footer-contact-text">+234 807 080 3041<br />+234 816 980 3046</div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <div className="footer-contact-text">info@stephmusicacademy.com</div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <div className="footer-contact-text">Lagos, Nigeria</div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">🕐</span>
                <div className="footer-contact-text">Mon – Sat, 9am – 6pm WAT</div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span className="footer-copy">
              © {year} Stephmusic Academy. All rights reserved.
            </span>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
