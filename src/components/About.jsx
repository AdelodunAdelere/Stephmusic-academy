import { motion } from 'framer-motion';
import aboutImg from '../assets/about.JPG';

const HIGHLIGHTS = [
  { text: 'Founded in Lagos with a mission to shape Nigeria\'s next generation of musicians.' },
  { text: '6 disciplines taught by world-class instructors — from piano to music production.' },
  { text: 'Students from across Nigeria and the diaspora call Stephmusic home.' },
  { text: 'Personalised curriculums — every student gets a path designed for them.' },
];

const MILESTONES = [
  { year: '2018', event: 'Academy Founded' },
  { year: '2020', event: 'Online Programs Launched' },
  { year: '2023', event: '500+ Students Milestone' },
  { year: '2025', event: 'New Campus Studio' },
];

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 24px;
          background: #F8FAFC;
          font-family: 'Inter', sans-serif;
        }
        .about-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }

        /* Text side */
        .about-text h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.15;
          color: #0F172A; margin: 16px 0 22px;
        }
        .about-text h2 em { font-style: normal; color: #2563EB; }
        .about-text p {
          font-size: 1rem; color: #64748B; line-height: 1.78;
          margin-bottom: 32px;
        }
        .about-highlights {
          display: flex; flex-direction: column; gap: 14px;
          margin-bottom: 36px;
        }
        .highlight-row {
          display: flex; align-items: flex-start; gap: 12px;
        }
        .highlight-text {
          font-size: 0.88rem; color: #475569; line-height: 1.6;
        }
        .highlight-text::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px; border-radius: 50%;
          background: #2563EB;
          margin-right: 10px;
          vertical-align: middle;
        }
        .about-cta-row {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }

        /* Visual side */
        .about-visual { position: relative; }
        .about-img-wrap {
          position: relative; border-radius: 24px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14), 0 32px 80px rgba(0,0,0,0.1);
          aspect-ratio: 4/5;
        }
        .about-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .about-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(3,10,24,0.5) 0%, transparent 60%);
        }

        /* Floating founder card */
        .founder-card {
          position: absolute; bottom: 28px; left: -32px;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
          display: flex; align-items: center; gap: 12px;
          min-width: 220px;
        }
        .founder-avatar {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, #2563EB, #818CF8);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 800; font-size: 1rem;
          flex-shrink: 0;
        }
        .founder-name { font-weight: 700; font-size: 0.88rem; color: #0F172A; }
        .founder-role { font-size: 0.74rem; color: #64748B; margin-top: 1px; }

        /* Stats badge floating top-right */
        .about-badge {
          position: absolute; top: -20px; right: -20px;
          background: #2563EB;
          border-radius: 16px;
          padding: 18px 20px;
          color: #fff;
          box-shadow: 0 8px 32px rgba(37,99,235,0.45);
          text-align: center;
        }
        .about-badge-num {
          font-size: 1.8rem; font-weight: 800; line-height: 1; display: block;
        }
        .about-badge-text {
          font-size: 0.72rem; font-weight: 600; opacity: 0.8;
          display: block; margin-top: 2px; white-space: nowrap;
        }

        /* Timeline */
        .about-timeline {
          margin-top: 40px; padding: 24px;
          background: #fff; border-radius: 16px;
          border: 1px solid rgba(15,23,42,0.06);
        }
        .timeline-title {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #94A3B8; margin-bottom: 16px;
        }
        .timeline-rows {
          display: flex; flex-direction: column; gap: 12px;
        }
        .timeline-row {
          display: flex; align-items: center; gap: 12px;
        }
        .timeline-year {
          font-size: 0.78rem; font-weight: 700; color: #2563EB;
          width: 36px; flex-shrink: 0;
        }
        .timeline-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #2563EB; flex-shrink: 0;
        }
        .timeline-event {
          font-size: 0.82rem; color: #475569; font-weight: 500;
        }

        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr; gap: 48px; }
          .about-visual { order: -1; }
          .founder-card { left: 16px; bottom: 20px; }
          .about-badge { top: 16px; right: 16px; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 72px 16px; }
          .founder-card { left: 12px; min-width: unset; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-inner">
          {/* Text column */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Our Story</span>
            <h2>Built on <em>passion</em>,<br />driven by music.</h2>
            <p>
              Steph Music Academy was founded by Stephen Aramawo with one dream — to make world-class
              music education accessible to every passionate soul in Nigeria and beyond. What began as
              private lessons in a small Lagos studio has grown into a thriving community of musicians,
              performers, and creators united by one language: music.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  className="highlight-row"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                >
                  <p className="highlight-text">{h.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#register" className="btn btn-secondary">Join the Academy</a>
            </div>

            {/* Mini timeline */}
            <div className="about-timeline" style={{ marginTop: 36 }}>
              <div className="timeline-title">Our Journey</div>
              <div className="timeline-rows">
                {MILESTONES.map((m, i) => (
                  <div className="timeline-row" key={i}>
                    <span className="timeline-year">{m.year}</span>
                    <div className="timeline-dot" />
                    <span className="timeline-event">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-img-wrap">
              <img src={aboutImg} alt="Stephmusic Academy studio" />
              <div className="about-img-overlay" />
            </div>

            {/* Floating founder card */}
            <div className="founder-card">
              <div className="founder-avatar">SA</div>
              <div>
                <div className="founder-name">Stephen Aramawo</div>
                <div className="founder-role">Founder & Lead Instructor</div>
              </div>
            </div>

            {/* Stats badge */}
            <div className="about-badge">
              <span className="about-badge-num">500+</span>
              <span className="about-badge-text">Students</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
