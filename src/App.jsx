import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Register from './components/Register';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import PricingPage from './pages/PricingPage';
import TutorsPage from './pages/TutorsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Register />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/tutors"  element={<TutorsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
