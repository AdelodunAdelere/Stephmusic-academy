// ============================================================
// MAIN ENTRY: App.jsx
// COPY THIS FILE → src/App.jsx
//
// FOLDER STRUCTURE:
//   src/
//   ├── App.jsx               ← this file
//   └── components/
//       ├── Navbar.jsx
//       ├── Hero.jsx
//       ├── Services.jsx
//       ├── About.jsx
//       ├── Testimonials.jsx
//       ├── Contact.jsx
//       ├── Register.jsx
//       └── Footer.jsx
//
// SETUP:
//   npx create-react-app stephmusic-academy
//   Then replace the files above.
//   OR use Vite: npm create vite@latest stephmusic-academy -- --template react
// ============================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
      `}</style>

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Register />
      <Footer />
    </>
  );
}
