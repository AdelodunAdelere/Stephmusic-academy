import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Piano Lessons',
    desc: 'From beginner to advanced — classical, jazz, and contemporary techniques with our expert tutors.',
    color: '#3B82F6',
    href: '/courses',
  },
  {
    title: 'Guitar Classes',
    desc: 'Acoustic and electric guitar across all genres — pop, rock, blues, classical, and fingerstyle.',
    color: '#8B5CF6',
    href: '/courses',
  },
  {
    title: 'Drum Training',
    desc: 'Master rhythm, timing, and percussion with hands-on training in our soundproofed studios.',
    color: '#EC4899',
    href: '/courses',
  },
  {
    title: 'Vocal Coaching',
    desc: 'Develop your singing voice, improve pitch, breath control, and stage performance confidence.',
    color: '#10B981',
    href: '/courses',
  },
  {
    title: 'Violin & Strings',
    desc: 'Classical and contemporary string training for all ages and experience levels.',
    color: '#F59E0B',
    href: '/courses',
  },
  {
    title: 'Music Production',
    desc: 'Learn beat-making, mixing, and mastering with industry-standard digital audio workstations.',
    color: '#06B6D4',
    href: '/courses',
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          padding: 100px 24px;
          background: #fff;
          font-family: 'Inter', sans-serif;
        }
        .services-header {
          text-align: center; margin-bottom: 64px;
        }
        .services-header h2 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.15;
          color: #0F172A; margin: 16px 0 18px;
        }
        .services-header p {
          font-size: 1.05rem; color: #64748B;
          max-width: 520px; margin: 0 auto;
          line-height: 1.7;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px; margin: 0 auto;
        }
        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px 28px;
          border: 1px solid rgba(15,23,42,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 20px 56px rgba(0,0,0,0.1);
          border-color: transparent;
        }
        .service-card-glow {
          position: absolute; inset: 0; opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
          pointer-events: none;
        }
        .service-card:hover .service-card-glow { opacity: 1; }

        .service-title {
          font-size: 1.05rem; font-weight: 700;
          color: #0F172A; margin-bottom: 10px;
          line-height: 1.3;
        }
        .service-desc {
          font-size: 0.875rem; color: #64748B;
          line-height: 1.7; flex: 1; margin-bottom: 22px;
        }
        .service-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .service-card:hover .service-link { gap: 9px; }
        .service-bottom-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          border-radius: 0 0 20px 20px;
        }
        .service-card:hover .service-bottom-bar { transform: scaleX(1); }

        .services-footer {
          text-align: center; margin-top: 52px;
        }
        .services-footer p {
          font-size: 0.9rem; color: #94A3B8; margin-bottom: 16px;
        }

        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-section { padding: 72px 16px; }
          .services-grid { grid-template-columns: 1fr; gap: 14px; }
          .services-header { margin-bottom: 44px; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">What We Offer</span>
            <h2>World-Class<br />Music Education</h2>
            <p>Six disciplines taught by passionate experts — whether you're starting from zero or refining your craft.</p>
          </motion.div>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((s) => (
            <motion.div
              className="service-card"
              key={s.title}
              variants={cardVariants}
              whileHover={{ scale: 1 }}
            >
              <div
                className="service-card-glow"
                style={{ boxShadow: `inset 0 0 0 1.5px ${s.color}30, 0 16px 48px ${s.color}18` }}
              />

              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              <Link
                to={s.href}
                className="service-link"
                style={{ color: s.color }}
              >
                Learn More <ArrowIcon />
              </Link>

              <div className="service-bottom-bar" style={{ background: s.color }} />
            </motion.div>
          ))}
        </motion.div>

        <div className="services-footer">
          <p>Not sure which course is right for you?</p>
          <Link to="/courses" className="btn btn-secondary">
            View All Courses →
          </Link>
        </div>
      </section>
    </>
  );
}
