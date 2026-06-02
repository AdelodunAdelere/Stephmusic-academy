import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import hero1  from '../assets/hero1.JPG';
import hero2  from '../assets/hero2.JPG';
import hero3  from '../assets/hero3.jpg';
import hero4  from '../assets/hero4.jpg';
import hero5  from '../assets/hero5.jpg';
import hero6  from '../assets/hero6.JPG';
import hero7  from '../assets/hero7.JPG';
import hero8  from '../assets/hero8.jpg';
import hero9  from '../assets/hero9.JPG';
import hero10 from '../assets/hero10.JPG';
import hero11 from '../assets/hero11.JPG';
import hero12 from '../assets/hero12.JPG';
import hero13 from '../assets/hero13.JPG';
import hero14 from '../assets/hero14.JPG';
import hero15 from '../assets/hero15.jpg';
import hero16 from '../assets/hero16.jpg';
import hero17 from '../assets/hero17.jpg';
import hero18 from '../assets/hero18.jpg';

const ALL_IMAGES = [
  hero1, hero2, hero3, hero4, hero5, hero6,
  hero7, hero8, hero9, hero10, hero11, hero12,
  hero13, hero14, hero15, hero16, hero17, hero18,
];

/* Duplicate for seamless marquee loop */
const STRIP = [...ALL_IMAGES, ...ALL_IMAGES];
const ROW_1 = STRIP.slice(0, 12);
const ROW_2 = STRIP.slice(8, 20);

function MarqueeRow({ images, reverse = false, speed = 40 }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
          animation: `marquee-row ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: '240px',
              height: '170px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <img
              src={src}
              alt={`Studio photo ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <style>{`
        .gallery-section {
          padding: 100px 0 0;
          background: #030A18;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        .gallery-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 56px;
        }
        .gallery-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.15;
          color: #fff; margin: 16px 0 16px;
        }
        .gallery-header p {
          font-size: 1rem; color: rgba(255,255,255,0.45);
          max-width: 460px; margin: 0 auto; line-height: 1.7;
        }
        .gallery-strips {
          display: flex; flex-direction: column; gap: 14px;
          padding-bottom: 100px;
        }
        .gallery-fade-bottom {
          height: 120px;
          background: linear-gradient(to bottom, transparent, #030A18);
          margin-top: -120px;
          position: relative;
          pointer-events: none;
        }

        @keyframes marquee-row {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 600px) {
          .gallery-section { padding-top: 72px; }
          .gallery-header  { margin-bottom: 40px; }
        }
      `}</style>

      <section className="gallery-section" aria-label="Studio gallery">
        <div className="gallery-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge badge-dark badge-dot">Our Studio</span>
            <h2>Life at Stephmusic<br />Academy</h2>
            <p>Step inside our world-class facility — where every lesson is an experience.</p>
          </motion.div>
        </div>

        <div className="gallery-strips">
          <MarqueeRow images={ROW_1} speed={50} />
          <MarqueeRow images={ROW_2} speed={38} reverse />
        </div>
        <div className="gallery-fade-bottom" />
      </section>
    </>
  );
}
