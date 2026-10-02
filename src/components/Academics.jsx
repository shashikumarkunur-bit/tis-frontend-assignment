import { motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { tisAcademics } from '../data/tisData';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Academics() {
  return (
    <section
      id="academics"
      className="py-20 lg:py-32 bg-[#faf9f6] relative overflow-hidden"
      aria-label="TIS Academic Programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Academic Excellence"
          title="Progressive Pathways from"
          highlight="Foundations to Mastery"
          description="A comprehensive CBSE-affiliated curriculum tailored to empower students with conceptual clarity, analytical acumen, and global preparedness."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Academic Program Cards Grid - Generated dynamically via .map() */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {tisAcademics.map((program) => (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
            >
              {/* Card Image with Zoom Interaction */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={program.image}
                  alt={`${program.title} at TIS`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-white/95 text-[#b90124] shadow-xs backdrop-blur-xs">
                  {program.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c09d59] uppercase tracking-wider mb-1">
                    <FiBookOpen className="text-sm" />
                    <span>{program.subtitle}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-[#1c1c1c] group-hover:text-[#b90124] transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {program.description}
                  </p>

                  {/* Program Highlights */}
                  <ul className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5" aria-label="Key highlights">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b90124]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link with Arrow Animation */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b90124] group-hover:text-[#8c001a] transition-colors"
                  >
                    <span>Enquire Curriculum</span>
                    <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Curriculum Advisory Pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#f8f5f0] border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-4xl mx-auto"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#b90124]">
              CBSE Curriculum & Co-Curricular Balance
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 mt-0.5">
              Dual focus on rigorous board examination performance and competitive university entrance exams.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#b90124] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
          >
            Download Syllabus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
