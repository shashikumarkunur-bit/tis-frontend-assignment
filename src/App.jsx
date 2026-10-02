import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import WhyTIS from './components/WhyTIS';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import AdmissionsCTA from './components/AdmissionsCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-[#1c1c1c] selection:bg-[#b90124] selection:text-white">
      {/* Mandatory Advanced Feature 3: Scroll Progress Bar */}
      <ScrollProgress />

      {/* Mandatory Advanced Feature 1: Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Modern Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <WhyTIS />
        <Activities />
        <Testimonials />
        <AdmissionsCTA />
        <Contact />
      </main>

      {/* Complete Responsive Footer */}
      <Footer />
    </div>
  );
}
