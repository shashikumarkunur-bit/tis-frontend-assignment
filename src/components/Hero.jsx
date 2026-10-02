import { motion } from 'framer-motion';
import { FiArrowRight, FiCompass, FiAward, FiUsers, FiChevronDown } from 'react-icons/fi';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f5f0] via-[#faf9f6] to-[#f4eee6]"
      aria-label="Tulas International School Hero"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#fff1b8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[28rem] h-[28rem] bg-[#c09d59]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#60bab1]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Content & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* School Eyebrow Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#b90124]/20 shadow-xs mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff1b8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fff1b8]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b90124]">
                Tulas International School • Dehradun
              </span>
            </motion.div>

            {/* Single H1 Title for SEO & Visual Dominance */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-[#131313] leading-[1.08]"
            >
              The Modern Gurukul for{' '}
              <span className="relative inline-block text-[#b90124]">
                Future Leaders
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#c09d59]"
                  viewBox="0 0 268 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10.5C50 3.5 155 1 265 10"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl font-normal"
            >
              Empowering students from Class IV to XII through academic excellence,
              16+ Olympic sports disciplines, and holistic character building on an
              exquisite 22-acre pollution-free Himalayan foothill campus.
            </motion.p>

            {/* Action Buttons (CTAs) */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#admissions-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-[#214628] bg-gradient-to-r from-[#c9edc1] to-[#b5e3aa] hover:from-[#b5e3aa] hover:to-[#a4d996] text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Apply Now 2026-27
                <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto px-7 py-4 rounded-full text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300/80 text-sm sm:text-base font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiCompass className="text-[#b90124] text-lg" />
                Explore TIS
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-neutral-300/60 flex flex-wrap items-center gap-6 sm:gap-8 text-neutral-600 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <IoShieldCheckmarkOutline className="text-[#b90124] text-lg" />
                <span>CBSE Co-Ed Boarding</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="text-[#c09d59] text-lg" />
                <span>6:1 Faculty Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <FiAward className="text-[#60bab1] text-lg" />
                <span>#1 in Dehradun</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Campus Imagery with Floating Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Image Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <div className="relative aspect-[4/4.5] sm:aspect-[4/3.8] lg:aspect-[4/4.4] overflow-hidden">
                <img
                  src="/tis-assets/schoolTopView.6e263e02.webp"
                  alt="Tulas International School Dehradun 22-Acre Campus Aerial View"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Image Overlay Banner */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fff1b8] text-[#1c1c1c] text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Dehradun Foothills
                  </div>
                  <p className="font-display font-bold text-xl sm:text-2xl leading-tight">
                    22-Acre World-Class Campus
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Tranquil, eco-friendly atmosphere designed for holistic growth
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Info Card 1: Top Ranking (Top Right) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
                opacity: { duration: 0.6, delay: 0.5 }
              }}
              className="absolute -top-6 -right-3 sm:-right-6 glass-card p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/80 max-w-[200px] sm:max-w-[230px]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#fff1b8] text-[#1c1c1c] flex items-center justify-center shrink-0 shadow-md">
                <FiAward className="text-xl text-[#8c001a]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#b90124] uppercase tracking-wide">Ranked #1</p>
                <p className="text-xs font-semibold text-neutral-800 leading-snug">
                  Co-Ed Boarding School in Dehradun
                </p>
              </div>
            </motion.div>

            {/* Floating Info Card 2: 16+ Sports (Bottom Left) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, 6, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 },
                opacity: { duration: 0.6, delay: 0.7 }
              }}
              className="absolute -bottom-6 -left-3 sm:-left-6 glass-card p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/80 max-w-[210px] sm:max-w-[240px]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#60bab1] text-neutral-900 flex items-center justify-center shrink-0 shadow-md">
                <span className="font-display font-extrabold text-base">16+</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#007a83] uppercase tracking-wide">Olympic Sports</p>
                <p className="text-xs font-semibold text-neutral-800 leading-snug">
                  Archery, Squash, Riding, Shooting & more
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer pointer-events-auto group"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-[#b90124] transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-neutral-400 group-hover:text-[#b90124] transition-colors"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
