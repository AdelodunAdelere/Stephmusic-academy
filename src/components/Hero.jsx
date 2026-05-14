// ============================================================
// COMPONENT: Hero.jsx
// COPY THIS FILE → src/components/Hero.jsx
// ============================================================

import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 60px;
          background: #fff;
          font-family: 'Poppins', sans-serif;
        }
        .hero-section h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .hero-section h1 .blue { color: #2196f3; }
        .hero-section h2 {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          font-weight: 600;
          color: #1a1a2e;
          margin: 0 0 16px;
        }
        .hero-section h2 .passion { color: #2196f3; }
        .hero-section h2 .sound { color: #1565c0; }
        .hero-subtitle {
          font-size: 0.95rem;
          color: #666;
          max-width: 440px;
          line-height: 1.7;
          margin: 0 auto 28px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2196f3;
          color: #fff;
          text-decoration: none;
          padding: 13px 32px;
          border-radius: 32px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(33,150,243,0.35);
        }
        .hero-btn:hover {
          background: #1565c0;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(33,150,243,0.45);
        }
        .hero-gallery-wrapper {
          width: 100%;
          max-width: 860px;
          margin: 60px auto 0;
          border: 2px solid #2196f3;
          border-radius: 16px;
          padding: 20px;
          background: linear-gradient(135deg, #e3f2fd 0%, #f8fbff 100%);
        }
        .hero-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .hero-gallery-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 12px;
          background: linear-gradient(135deg, #bbdefb, #90caf9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .hero-gallery-img:hover { transform: scale(1.03); }
        .gallery-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          background: linear-gradient(135deg, #bbdefb, #90caf9);
          transition: transform 0.3s;
          cursor: pointer;
        }
        .gallery-placeholder:hover { transform: scale(1.03); }
        .gallery-caption {
          text-align: center;
          margin-top: 14px;
          font-style: italic;
          color: #555;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-gallery { grid-template-columns: 1fr 1fr; }
          .hero-gallery .gallery-placeholder:last-child { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .hero-gallery { grid-template-columns: 1fr; }
          .hero-gallery .gallery-placeholder:last-child { grid-column: span 1; }
          .hero-section { padding: 60px 16px 40px; }
        }
      `}</style>

      <section id="home" className="hero-section">
        <h1>Welcome to <span className="blue">Stephmusic</span> Academy</h1>
        <h2>Where <span className="passion">Passion</span> Meets <span className="sound">Sound</span></h2>
        <p className="hero-subtitle">
          Unlock Your Musical Potential and Turn Your Passion Into Performance.
        </p>
        <a href="#services" className="hero-btn">
          Learn more →
        </a>

        <div className="hero-gallery-wrapper">
          <div className="hero-gallery">
            <div className="gallery-placeholder"><img src={hero1} alt="Gallery image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} /></div>
            <div className="gallery-placeholder"><img src={hero2} alt="Gallery image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} /></div>
            <div className="gallery-placeholder"><img src={hero3} alt="Gallery image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} /></div>
          </div>
          <p className="gallery-caption">Explore our facility</p>
        </div>
      </section>
    </>
  );
}
