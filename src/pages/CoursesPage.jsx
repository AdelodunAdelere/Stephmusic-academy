import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const COURSES = [
  {
    icon: '🎹', color: '#3B82F6', bg: '#EFF6FF',
    title: 'Piano Lessons',
    tagline: 'Classical · Jazz · Contemporary',
    desc: 'From reading your first notes to performing full concertos, our piano program builds a deep foundation in technique, theory, and musical expression. Suitable for ages 5 and up.',
    features: ['Beginner to advanced tracks', 'Classical & jazz repertoire', 'Music theory integration', 'Exam preparation (ABRSM, Trinity)', 'Regular student recitals'],
    duration: '45 – 60 min/session',
    schedule: 'Weekdays & Weekends',
  },
  {
    icon: '🎸', color: '#8B5CF6', bg: '#F5F3FF',
    title: 'Guitar Classes',
    tagline: 'Acoustic · Electric · Classical',
    desc: 'Master chords, scales, and technique across styles — from fingerpicking folk to shredding leads. We teach acoustic, electric, and classical guitar for all ages.',
    features: ['Acoustic & electric guitar', 'All genres: pop, rock, blues, classical', 'Fingerstyle technique', 'Songwriting & improvisation', 'Band performance skills'],
    duration: '45 – 60 min/session',
    schedule: 'Weekdays & Weekends',
  },
  {
    icon: '🥁', color: '#EC4899', bg: '#FDF2F8',
    title: 'Drum Training',
    tagline: 'Rhythm · Timing · Groove',
    desc: 'Develop explosive rhythm, steady timing, and killer groove in our soundproofed drum studios. Great for beginners through touring professionals.',
    features: ['Acoustic & electronic drums', 'Afrobeat, Afropop & jazz rhythms', 'Rudiment & technique drills', 'Full band integration sessions', 'Performance coaching'],
    duration: '45 – 60 min/session',
    schedule: 'Weekdays & Weekends',
  },
  {
    icon: '🎤', color: '#10B981', bg: '#ECFDF5',
    title: 'Vocal Coaching',
    tagline: 'Technique · Performance · Confidence',
    desc: 'Unlock the full power of your voice. Our vocal coaches guide you through breathing, pitch, range expansion, and stage performance — for pop, gospel, RnB, and classical styles.',
    features: ['Breath control & posture', 'Range expansion exercises', 'Pitch accuracy training', 'Gospel, pop, RnB, classical styles', 'Stage & microphone technique'],
    duration: '45 – 60 min/session',
    schedule: 'Weekdays & Weekends',
  },
  {
    icon: '🎻', color: '#F59E0B', bg: '#FFFBEB',
    title: 'Violin & Strings',
    tagline: 'Classical · Contemporary · Ensemble',
    desc: 'Beautiful, disciplined, and deeply rewarding. Our strings programme covers violin, viola, and cello — from first position through advanced bowing and orchestral technique.',
    features: ['Violin, viola & cello', 'Proper posture & bowing technique', 'Scales, études & repertoire', 'Ensemble & chamber music', 'ABRSM exam preparation'],
    duration: '45 – 60 min/session',
    schedule: 'Weekdays & Weekends',
  },
  {
    icon: '🎧', color: '#06B6D4', bg: '#ECFEFF',
    title: 'Music Production',
    tagline: 'Beats · Mixing · Mastering',
    desc: 'Learn the craft behind the hits. Our production programme covers DAW operation, beat-making, sound design, mixing, and mastering using industry-standard software.',
    features: ['FL Studio, Ableton & Logic Pro', 'Beat-making & arrangement', 'Sound design & synthesis', 'Mixing & mastering techniques', 'Music business fundamentals'],
    duration: '60 – 90 min/session',
    schedule: 'Weekdays & Weekends',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function CoursesPage() {
  return (
    <>
      <style>{`
        .courses-page { font-family: 'Inter', sans-serif; }
        .courses-hero {
          background: #030A18; padding: 160px 24px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .courses-hero-orb-1 {
          position: absolute; width: 500px; height: 500px;
          top: -100px; left: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .courses-hero-orb-2 {
          position: absolute; width: 400px; height: 400px;
          bottom: -80px; right: -80px;
          background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .courses-hero-content { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
        .courses-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
          color: #fff; margin: 16px 0 20px;
        }
        .courses-hero p {
          font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.75; margin-bottom: 32px;
        }

        /* Grid */
        .courses-body { background: #F8FAFC; padding: 72px 24px; }
        .courses-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
        }
        .course-card {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(15,23,42,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
          overflow: hidden; transition: all 0.3s;
          display: flex; flex-direction: column;
        }
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 20px 56px rgba(0,0,0,0.1);
          border-color: transparent;
        }
        .course-card-top {
          padding: 28px 28px 24px;
          display: flex; align-items: flex-start; gap: 16px;
          border-bottom: 1px solid rgba(15,23,42,0.06);
        }
        .course-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; flex-shrink: 0;
        }
        .course-title { font-size: 1.05rem; font-weight: 700; color: #0F172A; margin-bottom: 4px; }
        .course-tagline { font-size: 0.78rem; font-weight: 600; opacity: 0.7; letter-spacing: 0.02em; }
        .course-card-body { padding: 24px 28px; flex: 1; }
        .course-desc { font-size: 0.875rem; color: #64748B; line-height: 1.7; margin-bottom: 20px; }
        .course-features { display: flex; flex-direction: column; gap: 8px; }
        .course-feature {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.82rem; color: #475569;
        }
        .course-check {
          width: 18px; height: 18px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; color: #fff; flex-shrink: 0;
        }
        .course-card-footer {
          padding: 20px 28px 24px;
          border-top: 1px solid rgba(15,23,42,0.06);
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          flex-wrap: wrap;
        }
        .course-meta { font-size: 0.78rem; color: #94A3B8; font-weight: 500; }
        .course-meta span { margin-right: 12px; }

        @media (max-width: 768px) {
          .courses-grid { grid-template-columns: 1fr; }
          .courses-hero { padding-top: 130px; }
        }
        @media (max-width: 480px) {
          .courses-body { padding: 48px 16px; }
        }
      `}</style>

      <div className="courses-page">
        {/* Hero */}
        <div className="courses-hero">
          <div className="courses-hero-orb-1" />
          <div className="courses-hero-orb-2" />
          <motion.div
            className="courses-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge badge-dark badge-dot">Our Programs</span>
            <h1>Every discipline.<br />Every level.</h1>
            <p>
              From your very first note to performing on stage — we have a course designed for exactly
              where you are and where you want to go.
            </p>
            <a href="/#register" className="btn btn-primary btn-lg">Enrol Now →</a>
          </motion.div>
        </div>

        {/* Course grid */}
        <div className="courses-body">
          <motion.div
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {COURSES.map((c) => (
              <motion.div className="course-card" key={c.title} variants={cardVariants}>
                <div className="course-card-top">
                  <div className="course-icon" style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="course-title">{c.title}</div>
                    <div className="course-tagline" style={{ color: c.color }}>{c.tagline}</div>
                  </div>
                </div>
                <div className="course-card-body">
                  <p className="course-desc">{c.desc}</p>
                  <div className="course-features">
                    {c.features.map((f) => (
                      <div className="course-feature" key={f}>
                        <div className="course-check" style={{ background: c.color }}>✓</div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="course-card-footer">
                  <div className="course-meta">
                    <span>⏱ {c.duration}</span>
                    <span>📅 {c.schedule}</span>
                  </div>
                  <a href="/#register" className="btn btn-primary btn-sm">Enrol →</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
