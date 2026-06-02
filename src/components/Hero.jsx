import { motion } from 'framer-motion';

const STATS = [
  { value: '500+',  label: 'Students Trained' },
  { value: '6',     label: 'Instruments' },
  { value: '10+',   label: 'Expert Tutors' },
  { value: '5★',    label: 'Avg. Rating' },
];

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          background: #030A18;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 130px 24px 80px;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* Gradient blobs */
        .hero-orb-1 {
          position: absolute; width: 700px; height: 700px;
          top: -200px; left: -180px;
          background: radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-orb-2 {
          position: absolute; width: 600px; height: 600px;
          bottom: -150px; right: -150px;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-orb-3 {
          position: absolute; width: 400px; height: 400px;
          top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%);
          pointer-events: none;
          animation: float 8s ease-in-out infinite;
        }

        /* Noise grain overlay */
        .hero-grain {
          position: absolute; inset: 0; z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .hero-content { position: relative; z-index: 2; max-width: 860px; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; border-radius: 100px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 0.78rem; font-weight: 600;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.02em;
          margin-bottom: 32px;
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ADE80;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-h1 {
          font-size: clamp(2.8rem, 7vw, 5.6rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #fff;
          margin-bottom: 24px;
        }
        .hero-h1 .gradient-span {
          background: linear-gradient(135deg, #60A5FA 0%, #818CF8 60%, #A78BFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 540px;
          margin: 0 auto 40px;
        }

        .hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
          margin-bottom: 64px;
        }

        /* Stats pill row */
        .hero-stats {
          display: flex; align-items: center; justify-content: center;
          gap: 0; flex-wrap: wrap;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 20px 32px;
          max-width: 660px;
          margin: 0 auto;
        }
        .hero-stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 0 28px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-value {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .hero-stat-label {
          font-size: 0.74rem;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          white-space: nowrap;
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
          gap: 6px; z-index: 2;
        }
        .scroll-dot {
          width: 1.5px; height: 36px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          border-radius: 1px;
          animation: scroll-fade 2s ease-in-out infinite;
        }
        @keyframes scroll-fade {
          0%,100% { opacity: 0.3; transform: scaleY(0.8); }
          50%      { opacity: 0.8; transform: scaleY(1); }
        }

        @media (max-width: 600px) {
          .hero { padding: 110px 20px 72px; }
          .hero-stats { padding: 16px 20px; gap: 0; }
          .hero-stat { padding: 0 16px; }
          .hero-stat-value { font-size: 1.4rem; }
        }
        @media (max-width: 440px) {
          .hero-stats { flex-direction: column; gap: 16px; }
          .hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; width: 100%; }
          .hero-stat:last-child { border-bottom: none; padding-bottom: 0; }
        }
      `}</style>

      <section id="home" className="hero">
        {/* Background orbs */}
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />
        <div className="hero-grain" />

        <div className="hero-content">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now Enrolling — 2025 / 2026 Session
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero-h1" {...fadeUp(0.22)}>
            Where <span className="gradient-span">Passion</span>
            <br />Meets Sound
          </motion.h1>

          {/* Sub */}
          <motion.p className="hero-sub" {...fadeUp(0.34)}>
            Unlock your musical potential with world-class training at Stephmusic Academy —
            Nigeria's premier destination for music education in Lagos.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-btns" {...fadeUp(0.44)}>
            <a href="#register" className="btn btn-primary btn-lg">
              Start Your Journey →
            </a>
            <a href="#services" className="btn btn-ghost-white btn-lg">
              Explore Courses
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-stats">
              {STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>
    </>
  );
}
