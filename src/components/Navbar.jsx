import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import { tisNavLinks, tisSchoolInfo } from '../data/tisData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const mobileDrawerVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top announcement / helpline bar */}
        <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-8 sm:h-9 bg-[#b90124] text-white opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-amber-200">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-ping" />
                Admissions Open 2026-27 (Class IV - XII)
              </span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span className="hidden md:inline text-white/90">Ranked #1 Boarding School in Dehradun</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${tisSchoolInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-amber-200 transition-colors"
                aria-label={`Helpline: ${tisSchoolInfo.phone}`}
              >
                <FiPhoneCall className="text-amber-300" />
                <span className="font-semibold">{tisSchoolInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main sticky navigation */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'glass-nav-scrolled py-3 shadow-sm'
              : 'glass-nav py-4 sm:py-5'
          }`}
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b90124] rounded-lg p-1"
              aria-label="Tulas International School Home"
            >
              <img
                src="/schoolLogo.png"
                alt="Tulas International School Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                width="140"
                height="48"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-extrabold text-base tracking-tight text-[#1c1c1c] leading-none">
                  TULA'S
                </span>
                <span className="text-[10px] tracking-widest text-[#b90124] font-bold uppercase mt-0.5">
                  International School
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {tisNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-semibold text-neutral-700 hover:text-[#b90124] transition-colors rounded-md group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#b90124] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#b90124] hover:bg-[#b90124]/10 rounded-full border border-[#b90124]/30 transition-all duration-200"
              >
                Enquire
              </a>
              <a
                href="#admissions-cta"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#b90124] to-[#8c001a] hover:from-[#d62249] hover:to-[#b90124] rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 transform hover:-translate-y-0.5"
              >
                Apply Now
                <FiArrowRight className="text-sm" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#admissions-cta"
                className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#b90124] rounded-full shadow-sm"
              >
                Apply
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-800 hover:text-[#b90124] hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={mobileDrawerVariants}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between p-6 lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <img src="/schoolLogo.png" alt="TIS Logo" className="h-9 w-auto" />
                    <span className="font-display font-extrabold text-sm text-[#1c1c1c]">TULA'S</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                    aria-label="Close menu"
                  >
                    <HiX size={22} />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {tisNavLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-semibold text-neutral-800 hover:text-[#b90124] hover:bg-neutral-50 rounded-xl transition-all flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <FiArrowRight className="text-neutral-400 text-sm" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-neutral-200 space-y-3">
                <a
                  href="#admissions-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-[#b90124] text-white font-bold rounded-xl text-center block shadow-md hover:bg-[#8c001a] transition-colors"
                >
                  Apply Now 2026-27
                </a>
                <a
                  href={`tel:${tisSchoolInfo.phone}`}
                  className="w-full py-2.5 border border-neutral-300 text-neutral-800 font-semibold rounded-xl text-center flex items-center justify-center gap-2 text-sm"
                >
                  <FiPhoneCall className="text-[#b90124]" />
                  Call: {tisSchoolInfo.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
