import aboutImg from '../assets/about.JPG';

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
        .about-card .card-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }
        .card-line {
          height: 8px;
          background: #e3f2fd;
          border-radius: 4px;
        }
        .card-line.w-full { width: 100%; }
        .card-line.w-3-4 { width: 75%; }
        .card-line.w-half { width: 50%; }
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
          .about-text p { text-align: left; }
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="about-contact-btn-container">
              <a href="#contact" className="about-contact-btn">Contact Us</a>
            </div>
          </div>

          <div className="about-card">
            <div className="card-header">About our Company</div>
            <div className="card-lines">
              <div className="card-line w-full" />
              <div className="card-line w-3-4" />
              <div className="card-line w-full" />
              <div className="card-line w-half" />
            </div>
            <div className="card-title">Welcome to Our Music School and Online Course</div>
            <div className="about-card-img"><img src={aboutImg} alt="About image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} /></div>
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
