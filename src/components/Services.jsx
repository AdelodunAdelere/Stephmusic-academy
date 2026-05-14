// ============================================================
// COMPONENT: Services.jsx
// COPY THIS FILE → src/components/Services.jsx
// ============================================================

const services = [
  {
    icon: "🎹",
    title: "Piano Lessons",
    desc: "From beginner to advanced. Learn classical, jazz, and contemporary piano techniques with our expert tutors.",
  },
  {
    icon: "🎸",
    title: "Guitar Classes",
    desc: "Acoustic and electric guitar courses covering all genres — pop, rock, blues, classical, and more.",
  },
  {
    icon: "🥁",
    title: "Drum Training",
    desc: "Master rhythm, timing, and percussion with hands-on drum training in our soundproofed studios.",
  },
  {
    icon: "🎤",
    title: "Vocal Coaching",
    desc: "Develop your singing voice, improve pitch, breath control, and performance confidence.",
  },
  {
    icon: "🎻",
    title: "Violin & Strings",
    desc: "Classical and contemporary string training for all ages and experience levels.",
  },
  {
    icon: "🎧",
    title: "Music Production",
    desc: "Learn beat-making, mixing, and mastering using industry-standard digital audio workstations.",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          padding: 80px 40px;
          background: #f0f4f8;
          font-family: 'Poppins', sans-serif;
        }
        .services-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 48px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .service-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px 24px 28px;
          position: relative;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.25s, box-shadow 0.25s;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(33,150,243,0.18);
        }
        .service-icon-dot {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, #2196f3, #64b5f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 18px;
          box-shadow: 0 4px 14px rgba(33,150,243,0.3);
        }
        .service-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
        }
        .service-card p {
          font-size: 0.87rem;
          color: #666;
          line-height: 1.65;
          margin: 0;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2196f3, #1565c0);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .service-card:hover::after { transform: scaleX(1); }

        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-section { padding: 60px 16px; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { text-align: left; }
          .service-icon-dot,
          .service-card h3 {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .service-card p {
            text-align: left;
          }
        }
      `}</style>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon-dot">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
