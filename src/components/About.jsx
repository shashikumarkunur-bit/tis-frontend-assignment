import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { RiBuilding4Line, RiUserHeartLine, RiTrophyLine, RiHospitalLine } from 'react-icons/ri';
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '../utils/animations';
import { tisStatistics } from '../data/tisData';

const statIcons = {
  TreePine: RiBuilding4Line,
  Users: RiUserHeartLine,
  Trophy: RiTrophyLine,
  HeartPulse: RiHospitalLine
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      aria-label="About Tulas International School"
    >
      {/* Background design elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#c09d59]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#fff1b8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Image Composition */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-100">
                <img
                  src="/tis-assets/AtTIS.59351600.png"
                  alt="Students engaged in learning at Tulas International School"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#dbc79f] mb-1 block">
                    Established 2012
                  </span>
                  <p className="font-serif-editorial italic text-lg sm:text-xl text-white/95 leading-snug">
                    “School isn’t just about lessons, it’s about endless opportunities waiting to be explored.”
                  </p>
                </div>
              </div>

              {/* Offset Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#fff1b8] text-[#1c1c1c] p-5 sm:p-6 rounded-2xl shadow-xl max-w-[210px] sm:max-w-[240px]">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-[#8c001a]">
                  14+ <span className="text-xl font-normal text-[#1c1c1c]">Years</span>
                </p>
                <p className="text-xs sm:text-sm font-medium text-neutral-700 mt-1 leading-tight">
                  Of educational prestige & holistic character building
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy, Bullets & Verified Stats */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Small Eyebrow Heading */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#fff1b8]/70 text-[#b90124] border border-[#b90124]/20 w-fit mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fff1b8]" />
              About Tulas International School
            </div>

            {/* Section H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#1c1c1c] leading-[1.15]">
              Nurturing Minds in the Spirit of{' '}
              <span className="text-[#b90124]">The Modern Gurukul</span>
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Founded in 2012 under the aegis of <strong className="text-neutral-800 font-semibold">Rishabh Educational Trust</strong>,
              Tulas International School blends time-honored traditional values of humility, self-reliance,
              and camaraderie with modern 21st-century CBSE academics.
            </p>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Nestled against the tranquil Himalayan foothills, our 22-acre pollution-free campus
              provides an idyllic sanctuary where boys and girls from Class IV to XII discover their
              intellectual passions, athletic discipline, and creative voices.
            </p>

            {/* Key Pillars */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "CBSE-Affiliated Co-Educational Boarding",
                "Exceptional 6:1 Student-to-Teacher Ratio",
                "16+ Olympic-Standard Sports Disciplines",
                "24/7 Dedicated Medical & Pastoral Care"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800">
                  <FiCheckCircle className="text-[#b90124] text-lg shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#1c1c1c] bg-[#fff1b8] hover:bg-[#ffeb99] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Academic Programs
                <FiArrowRight className="text-base" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Verified Statistics Grid (Animated Into View) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-20 pt-12 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {tisStatistics.map((stat, index) => {
            const IconComponent = statIcons[stat.icon] || RiBuilding4Line;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-[#f8f5f0] border border-neutral-200/60 hover:border-[#b90124]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#b90124] shadow-xs flex items-center justify-center mb-4 group-hover:bg-[#fff1b8] group-hover:text-[#1c1c1c] transition-colors duration-300">
                  <IconComponent className="text-2xl" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#1c1c1c] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b90124]">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-neutral-800 mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
