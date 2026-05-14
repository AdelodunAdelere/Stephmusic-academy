// ============================================================
// COMPONENT: Footer.jsx
// COPY THIS FILE → src/components/Footer.jsx
// ============================================================

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #2196f3 100%);
          color: #fff;
          padding: 56px 40px 24px;
          font-family: 'Poppins', sans-serif;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto 40px;
          justify-items: center;
          
        }

        .footer-col h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin: 0 0 16px;
          color: rgba(255,255,255,0.95);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.78rem;
        }
        .footer-col p, .footer-col a {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .footer-col a:hover { color: #fff; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 20px;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 768px) {
          .footer { padding: 48px 20px 20px; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-gird { padding-left: 40px; }
        }
        @media (max-width: 480px) {
          .footer { padding: 36px 16px 16px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          
        }
      `}</style>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Our Social Media</h4>
            <a href="https://www.instagram.com/stephmusicng">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter / X</a>
            <a href="https://www.youtube.com/@ferefolu">YouTube</a>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#register">Register</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyrights Reserved {new Date().getFullYear()} — Stephmusic Academy</p>
        </div>
      </footer>
    </>
  );
}
