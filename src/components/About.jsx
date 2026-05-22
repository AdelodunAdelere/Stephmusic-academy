import { useEffect, useRef, useState } from 'react';
import aboutImg from '../assets/about.JPG';

const TYPED_TEXT = [
  "🎵 Founded in Lagos with passion.",
  "🎸 6 instruments, all skill levels.",
  "🎤 Learn from expert instructors.",
  "🏆 Shaping Nigeria's next musicians.",
];

function Typewriter() {
  const [lines, setLines] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || lineIdx >= TYPED_TEXT.length) return;
    const current = TYPED_TEXT[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines(prev => [...prev, current]);
        setLineIdx(i => i + 1);
        setCharIdx(0);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [started, lineIdx, charIdx]);

  const currentTyping = lineIdx < TYPED_TEXT.length
    ? TYPED_TEXT[lineIdx].slice(0, charIdx)
    : null;

  return (
    <div ref={ref} className="typewriter-block">
      {lines.map((line, i) => <p key={i} className="typed-line done">{line}</p>)}
      {currentTyping !== null && (
        <p className="typed-line typing">{currentTyping}<span className="cursor">|</span></p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 80px 40px;
          background: linear-gradient(135deg, #2196f3 0%, #1565c0 100%);
          font-family: 'Poppins', sans-serif;
        }
        .about-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 52px;
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1000px;
          margin: 0 auto;
          align-items: center;
        }
        .about-text h3 {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 20px;
          line-height: 1.3;
        }
        .about-text h3 span {
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.5);
        }
        .about-text p {
          color: rgba(255,255,255,0.85);
          font-size: 0.92rem;
          line-height: 1.75;
          margin: 0 0 32px;
        }
        .about-contact-btn {
          display: inline-block;
          background: #fff;
          color: #2196f3;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 28px;
          font-weight: 700;
          font-size: 0.92rem;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .about-contact-btn:hover {
          background: #e3f2fd;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .about-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.18);
          position: relative;
        }
        .about-card .card-header {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2196f3;
          margin-bottom: 16px;
        }
        .about-card .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        /* Typewriter */
        .typewriter-block {
          margin-bottom: 20px;
          min-height: 88px;
        }
        .typed-line {
          font-size: 0.88rem;
          color: #444;
          line-height: 1.7;
          margin: 0 0 4px;
        }
        .typed-line.done { color: #333; }
        .typed-line.typing { color: #2196f3; }
        .cursor {
          display: inline-block;
          animation: blink 0.7s step-start infinite;
          font-weight: 300;
          color: #2196f3;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .about-card-img {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #bbdefb, #90caf9);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 16px;
        }
        .about-card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #2196f3, #1565c0);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1rem; font-weight: 700;
        }
        .about-card-footer span {
          font-weight: 700;
          color: #1a1a2e;
          font-size: 0.92rem;
        }
        .about-card-footer small {
          color: #888;
          font-size: 0.78rem;
          display: block;
        }
        @media (max-width: 768px) {
          .about-section { padding: 60px 20px; }
          .about-inner { grid-template-columns: 1fr; gap: 36px; }
          .about-text h3 { text-align: center; }
          .about-contact-btn-container { display: flex; justify-content: center; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 48px 16px; }
        }
      `}</style>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <div className="about-inner">
          <div className="about-text">
            <h3>Best in Our <span>Service</span> Delivery</h3>
            <p>
              Steph Music Academy was founded by Stephen Aramawo with a single dream — to make world-class music education accessible to every passionate soul in Nigeria and beyond. What began as private lessons in a small Lagos studio has grown into a thriving community of musicians, performers, and creators who share one language: music. We believe learning music should feel like a journey, not a chore. Our instructors blend traditional technique with modern creativity, giving each student a personalised path. At Steph Music Academy, our mission is simple: unlock the musician in you. We are committed to nurturing talent at every level, celebrating every milestone no matter how small, and building a supportive community where students grow not just as musicians, but as artists with a voice. Your sound matters and we are here to help you share it with the world.
            </p>
            <div className="about-contact-btn-container">
              <a href="#contact" className="about-contact-btn">Contact Us</a>
            </div>
          </div>

          <div className="about-card">
            <div className="card-header">About our Company</div>

            <Typewriter />

            <div className="card-title">Welcome to Our Music School and Online Course</div>
            <div className="about-card-img">
              <img src={aboutImg} alt="About image" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'12px'}} />
            </div>
            <div className="about-card-footer">
              <div className="avatar">SA</div>
              <div>
                <span>Stephen Aramawo</span>
                <small>Founder & Lead Instructor</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}