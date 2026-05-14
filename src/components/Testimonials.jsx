// ============================================================
// COMPONENT: Testimonials.jsx
// COPY THIS FILE → src/components/Testimonials.jsx
// ============================================================

const testimonials = [
  {
    name: "Williams Jade",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    stars: 5,
    initials: "WJ",
  },
  {
    name: "Bunmi Akintola",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    stars: 5,
    initials: "BA",
  },
  {
    name: "Shonibare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    stars: 5,
    initials: "SH",
  },
  {
    name: "Bukola Kushimo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    stars: 5,
    initials: "BK",
  },
];

export default function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 80px 40px;
          background: #f8f9fc;
          font-family: 'Poppins', sans-serif;
        }
        .testimonials-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 8px;
        }
        .testimonials-subtitle {
          text-align: center;
          color: #555;
          font-size: 0.9rem;
          margin: 0 0 48px;
        }
        .testimonials-subtitle a {
          color: #2196f3;
          text-decoration: none;
          font-weight: 600;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
        }
        .testimonial-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 24px;
          border: 2px solid #e3f2fd;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .testimonial-card:hover {
          border-color: #2196f3;
          box-shadow: 0 8px 28px rgba(33,150,243,0.14);
          transform: translateY(-4px);
        }
        .testimonial-card:nth-child(2) { border-color: #2196f3; }
        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .t-avatar {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, #2196f3, #1565c0);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 0.85rem; font-weight: 700;
          flex-shrink: 0;
        }
        .t-name {
          font-weight: 700;
          color: #1a1a2e;
          font-size: 0.95rem;
        }
        .t-stars { color: #f4c542; font-size: 0.8rem; }
        .testimonial-text {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.7;
          font-style: italic;
        }
        .testimonial-text::before { content: '"'; font-size: 1.2rem; color: #2196f3; }
        .testimonial-text::after { content: '"'; font-size: 1.2rem; color: #2196f3; }

        @media (max-width: 640px) {
          .testimonials-section { padding: 60px 16px; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .t-stars { margin-top: 4px; }
        }
      `}</style>

      <section id="testimonials" className="testimonials-section">
        <h2>Testimonials</h2>
        <p className="testimonials-subtitle">
          This is what our students have to say <a href="#about">about us</a>
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-header">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-stars">{"★".repeat(t.stars)}</div>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
