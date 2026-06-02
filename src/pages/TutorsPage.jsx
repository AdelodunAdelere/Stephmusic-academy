import { motion } from 'framer-motion';

const TUTORS = [
  {
    initials: 'SA',
    color: '#2563EB',
    name: 'Stephen Aramawo',
    role: 'Founder & Lead Instructor',
    specialties: ['Piano', 'Music Theory', 'Composition'],
    bio: 'Stephen founded Stephmusic Academy with a vision to democratise world-class music education in Nigeria. With over 15 years of performance and teaching experience, he has trained hundreds of students — from curious beginners to professional performers. His approach blends classical rigour with creative freedom.',
    exp: '15+ years',
    students: '200+',
    instagram: '#',
  },
  {
    initials: 'AD',
    color: '#8B5CF6',
    name: 'Adaeze Okonkwo',
    role: 'Vocal Coach & Choir Director',
    specialties: ['Vocal Coaching', 'Gospel', 'RnB', 'Performance'],
    bio: 'Adaeze brings over a decade of vocal training experience across gospel, Afropop, and classical styles. She has directed choirs at major events in Lagos and has a gift for helping students discover the full range and power of their voice.',
    exp: '12+ years',
    students: '150+',
    instagram: '#',
  },
  {
    initials: 'TJ',
    color: '#10B981',
    name: 'Taiwo James',
    role: 'Guitar Instructor',
    specialties: ['Guitar', 'Bass', 'Afrobeats', 'Rock'],
    bio: 'Taiwo is an accomplished session guitarist who has played on dozens of professionally released albums. His encyclopaedic knowledge of African rhythms alongside western styles makes him uniquely equipped to teach the full spectrum of guitar music.',
    exp: '10+ years',
    students: '120+',
    instagram: '#',
  },
  {
    initials: 'EO',
    color: '#EC4899',
    name: 'Emmanuel Ojo',
    role: 'Drum Instructor & Percussionist',
    specialties: ['Drums', 'Percussion', 'Afrobeats', 'Jazz'],
    bio: 'Emmanuel is a seasoned studio and live drummer with experience touring internationally. His teaching combines technical precision with a deep understanding of groove and feel — essential for any drummer aiming to play at a professional level.',
    exp: '8+ years',
    students: '90+',
    instagram: '#',
  },
  {
    initials: 'FN',
    color: '#F59E0B',
    name: 'Funke Nwosu',
    role: 'Violin & Strings Instructor',
    specialties: ['Violin', 'Viola', 'Chamber Music', 'ABRSM'],
    bio: 'Funke holds a degree in Music Performance from the University of Lagos and has been teaching strings for over eight years. Her structured approach to technique and theory has helped numerous students pass ABRSM examinations with distinction.',
    exp: '8+ years',
    students: '80+',
    instagram: '#',
  },
  {
    initials: 'KA',
    color: '#06B6D4',
    name: 'Kolade Adeyemi',
    role: 'Music Producer & DAW Instructor',
    specialties: ['Music Production', 'Mixing', 'Mastering', 'FL Studio'],
    bio: 'Kolade has produced music for artists across Nigeria and the UK. He brings real-world industry experience into the classroom, teaching students not just how to make music but how to make it sound like a hit — and how to navigate the business behind it.',
    exp: '7+ years',
    students: '60+',
    instagram: '#',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function TutorsPage() {
  return (
    <>
      <style>{`
        .tutors-page { font-family: 'Inter', sans-serif; }
        .tutors-hero {
          background: #030A18; padding: 160px 24px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .tutors-hero-orb-1 {
          position: absolute; width: 500px; height: 500px;
          top: -100px; left: -100px;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .tutors-hero-orb-2 {
          position: absolute; width: 400px; height: 400px;
          bottom: -80px; right: -80px;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .tutors-hero-content { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
        .tutors-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
          color: #fff; margin: 16px 0 20px;
        }
        .tutors-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.75; }

        /* Tutors grid */
        .tutors-body { background: #F8FAFC; padding: 72px 24px; }
        .tutors-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .tutor-card {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(15,23,42,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.06);
          overflow: hidden; transition: all 0.3s;
          display: flex; flex-direction: column;
        }
        .tutor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 20px 56px rgba(0,0,0,0.1);
          border-color: transparent;
        }
        .tutor-card-top {
          padding: 28px; display: flex; align-items: center; gap: 16px;
        }
        .tutor-avatar {
          width: 64px; height: 64px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.2rem; font-weight: 800;
          flex-shrink: 0; letter-spacing: -0.02em;
        }
        .tutor-name { font-size: 1rem; font-weight: 700; color: #0F172A; margin-bottom: 3px; }
        .tutor-role { font-size: 0.78rem; color: #64748B; font-weight: 500; }
        .tutor-specialties {
          padding: 0 28px 20px;
          display: flex; gap: 6px; flex-wrap: wrap;
        }
        .specialty-tag {
          padding: 4px 10px; border-radius: 6px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.01em;
        }
        .tutor-divider { height: 1px; background: rgba(15,23,42,0.06); margin: 0 28px; }
        .tutor-bio {
          padding: 20px 28px 0;
          font-size: 0.85rem; color: #64748B; line-height: 1.75;
          flex: 1;
        }
        .tutor-stats {
          padding: 20px 28px;
          display: flex; gap: 24px;
        }
        .tutor-stat-val { font-size: 1.1rem; font-weight: 800; color: #0F172A; line-height: 1; }
        .tutor-stat-lbl { font-size: 0.72rem; color: #94A3B8; margin-top: 2px; font-weight: 500; }
        .tutor-card-footer {
          padding: 16px 28px 24px;
          border-top: 1px solid rgba(15,23,42,0.06);
        }

        /* CTA banner */
        .tutors-cta {
          max-width: 1100px; margin: 56px auto 0;
          background: linear-gradient(135deg, #1E40AF, #3730A3);
          border-radius: 24px; padding: 48px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap;
          box-shadow: 0 8px 40px rgba(37,99,235,0.35);
        }
        .tutors-cta h3 {
          font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .tutors-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.55); }

        @media (max-width: 900px) {
          .tutors-grid { grid-template-columns: repeat(2, 1fr); }
          .tutors-hero { padding-top: 130px; }
        }
        @media (max-width: 580px) {
          .tutors-grid { grid-template-columns: 1fr; }
          .tutors-body { padding: 48px 16px; }
          .tutors-cta { padding: 32px 24px; }
          .tutors-cta h3 { font-size: 1.3rem; }
        }
      `}</style>

      <div className="tutors-page">
        {/* Hero */}
        <div className="tutors-hero">
          <div className="tutors-hero-orb-1" />
          <div className="tutors-hero-orb-2" />
          <motion.div
            className="tutors-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge badge-dark badge-dot">Our Instructors</span>
            <h1>Learn from the<br />very best</h1>
            <p>
              Every tutor at Stephmusic Academy is a working musician and certified educator —
              passionate about teaching, relentless in their craft.
            </p>
          </motion.div>
        </div>

        {/* Tutors grid */}
        <div className="tutors-body">
          <motion.div
            className="tutors-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {TUTORS.map((t) => (
              <motion.div className="tutor-card" key={t.name} variants={cardVariants}>
                <div className="tutor-card-top">
                  <div className="tutor-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="tutor-name">{t.name}</div>
                    <div className="tutor-role">{t.role}</div>
                  </div>
                </div>

                <div className="tutor-specialties">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="specialty-tag"
                      style={{ background: `${t.color}12`, color: t.color }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="tutor-divider" />
                <p className="tutor-bio">{t.bio}</p>

                <div className="tutor-stats">
                  <div>
                    <div className="tutor-stat-val">{t.exp}</div>
                    <div className="tutor-stat-lbl">Experience</div>
                  </div>
                  <div>
                    <div className="tutor-stat-val">{t.students}</div>
                    <div className="tutor-stat-lbl">Students Trained</div>
                  </div>
                </div>

                <div className="tutor-card-footer">
                  <a href="/#register" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Book a Lesson →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="tutors-cta"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3>Ready to learn from the best?</h3>
              <p>Register today and we'll match you with the perfect instructor for your goals.</p>
            </div>
            <a href="/#register" className="btn btn-white btn-lg">Start Today →</a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
