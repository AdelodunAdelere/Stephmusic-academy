import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { number: 500,  suffix: '+', label: 'Students Trained',   color: '#3B82F6' },
  { number: 6,    suffix: '',  label: 'Instruments Taught', color: '#8B5CF6' },
  { number: 10,   suffix: '+', label: 'Expert Instructors', color: '#06B6D4' },
  { number: 98,   suffix: '%', label: 'Student Satisfaction',color: '#F59E0B' },
];

function Counter({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target]);

  return <>{val}{suffix}</>;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Stats() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-section {
          background: #F8FAFC;
          padding: 80px 24px;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(15,23,42,0.06);
          border-bottom: 1px solid rgba(15,23,42,0.06);
        }
        .stats-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(15,23,42,0.06);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07);
        }
        .stat-card {
          background: #fff;
          padding: 36px 28px;
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 12px; position: relative; overflow: hidden;
          transition: background 0.25s;
        }
        .stat-card:hover { background: #FAFCFF; }
        .stat-value {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em;
          color: #0F172A;
        }
        .stat-label {
          font-size: 0.82rem; font-weight: 500;
          color: #64748B; line-height: 1.4;
        }
        .stat-accent {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease 0.1s;
        }
        .stat-card:hover .stat-accent { transform: scaleX(1); }

        @media (max-width: 900px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .stats-section { padding: 60px 16px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-card { padding: 24px 20px; }
        }
      `}</style>

      <section className="stats-section" ref={sectionRef} aria-label="Academy statistics">
        <motion.div
          className="stats-inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STATS.map((s) => (
            <motion.div className="stat-card" key={s.label} variants={itemVariants}>
              <div className="stat-value" style={{ color: s.color }}>
                <Counter target={s.number} suffix={s.suffix} active={active} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-accent" style={{ background: s.color }} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
