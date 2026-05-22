// ============================================================
// COMPONENT: Hero.jsx
// COPY THIS FILE → src/components/Hero.jsx
// ============================================================

import { useState } from 'react';
import hero1 from '../assets/hero1.JPG';
import hero2 from '../assets/hero2.JPG';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero6 from '../assets/hero6.JPG';
import hero7 from '../assets/hero7.JPG';
import hero8 from '../assets/hero8.jpg';
import hero9 from '../assets/hero9.JPG';
import hero10 from '../assets/hero10.JPG';
import hero11 from '../assets/hero11.JPG';
import hero12 from '../assets/hero12.JPG';
import hero13 from '../assets/hero13.JPG';
import hero14 from '../assets/hero14.JPG';
import hero15 from '../assets/hero15.jpg';
import hero16 from '../assets/hero16.jpg';
import hero17 from '../assets/hero17.jpg';
import hero18 from '../assets/hero18.jpg';

// 4 images per carousel slot — replace these arrays with your actual imports or URLs
const galleryImages = [
  [
    hero1,
    hero2,
    hero3,
    hero4, 
    hero5, 
  ],
  [
    hero6,
    hero7,
    hero8,
    hero9,
    hero10,
    hero11,
  ],
  [
    hero12,
    hero13,
    hero14,
    hero15,
    hero16,
    hero17,
    hero18,
  ],
];

function MiniCarousel({ images, index }) {
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="mini-carousel">
      <img
        src={images[current]}
        alt={`Gallery ${index + 1} slide ${current + 1}`}
        className="mini-carousel-img"
      />

      <button className="carousel-btn carousel-btn-left" onClick={prev} aria-label="Previous">
        &#8249;
      </button>
      <button className="carousel-btn carousel-btn-right" onClick={next} aria-label="Next">
        &#8250;
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
          />
        ))}
      </div>
    </div>
  );
}

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
        .hero-section h2 .sound  { color: #1565c0; }
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

        /* Gallery wrapper */
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
        .gallery-caption {
          text-align: center;
          margin-top: 14px;
          font-style: italic;
          color: #555;
          font-size: 0.9rem;
        }

        /* Mini carousel */
        .mini-carousel {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, #bbdefb, #90caf9);
        }
        .mini-carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          transition: opacity 0.3s ease;
        }

        /* Arrow buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.85);
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1565c0;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s, background 0.2s;
          z-index: 2;
          line-height: 1;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .mini-carousel:hover .carousel-btn { opacity: 1; }
        .carousel-btn:hover { background: #fff; color: #2196f3; }
        .carousel-btn-left  { left: 6px; }
        .carousel-btn-right { right: 6px; }

        /* Dot indicators */
        .carousel-dots {
          position: absolute;
          bottom: 7px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 5px;
          z-index: 2;
        }
        .carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .carousel-dot.active {
          background: #fff;
          transform: scale(1.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-gallery { grid-template-columns: 1fr 1fr; }
          .hero-gallery .mini-carousel:last-child { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .hero-gallery { grid-template-columns: 1fr; }
          .hero-gallery .mini-carousel:last-child { grid-column: span 1; }
          .hero-section { padding: 60px 16px 40px; }
          .carousel-btn { opacity: 1; }
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
            {galleryImages.map((images, i) => (
              <MiniCarousel key={i} images={images} index={i} />
            ))}
          </div>
          <p className="gallery-caption">Explore our facility</p>
        </div>
      </section>
    </>
  );
}
