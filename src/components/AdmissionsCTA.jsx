import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiFileText, FiPhoneCall } from 'react-icons/fi';
import { tisSchoolInfo } from '../data/tisData';
import { scaleIn } from '../utils/animations';

export default function AdmissionsCTA() {
  return (
    <section
      id="admissions-cta"
      className="py-16 lg:py-24 bg-[#FAF9F6] relative overflow-hidden"
      aria-label="Admissions Call to Action"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-3xl lg:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#ecf8e8] via-[#d9f0d2] to-[#c8e8be] text-[#1c3322] p-8 sm:p-14 lg:p-16 shadow-2xl border border-[#b7d9ad]"
        >
          {/* Ambient decorative glowing shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8fbd82]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/65 backdrop-blur-md border border-[#b7d9ad] text-[#315d38] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4b8b52] animate-ping" />
              Admissions Open 2026-27 • Class IV to XII
            </div>

            {/* Required Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight">
              Begin Your Journey at{' '}
              <span className="text-[#3f7847]">Tulas International School</span>
            </h2>

            {/* Short Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-[#36513a] leading-relaxed font-normal max-w-2xl mx-auto">
              Empower your child in a safe, inspiring modern Gurukul environment where academic rigor,
              16+ Olympic sports, and individual care converge.
            </p>

            {/* Required Three Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {/* Button 1: Apply Now */}
              <a
                href={tisSchoolInfo.admissionPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#bfe8b6] text-[#214628] hover:bg-[#a8d99d] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FiFileText className="text-base" />
                Apply Now 2026-27
                <FiArrowRight className="text-base" />
              </a>

              {/* Button 2: Enquire Now */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#c09d59] hover:bg-[#a98544] text-neutral-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enquire Now
              </a>

              {/* Button 3: Schedule a Visit */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/60 hover:bg-white/85 text-[#315d38] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#a9cca0] backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiCalendar className="text-base" />
                Schedule a Visit
              </a>
            </div>

            {/* Fast Helpline Contact Pill */}
            <div className="mt-10 pt-8 border-t border-[#8fbd82]/50 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#48634b]">
              <span className="flex items-center gap-2">
                <FiPhoneCall className="text-[#3f7847]" />
                Direct Helpline: <strong className="text-[#1c3322]">{tisSchoolInfo.phone}</strong>
              </span>
              <span className="hidden sm:inline text-[#729174]">•</span>
              <span>Available 9:00 AM – 6:00 PM (Mon – Sat)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
