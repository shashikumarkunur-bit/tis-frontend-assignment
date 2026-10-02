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
          className="relative rounded-3xl lg:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#8c001a] via-[#b90124] to-[#590010] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-white/10"
        >
          {/* Ambient decorative glowing shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c09d59]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
              Admissions Open 2026-27 • Class IV to XII
            </div>

            {/* Required Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight">
              Begin Your Journey at{' '}
              <span className="text-[#dbc79f]">Tulas International School</span>
            </h2>

            {/* Short Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
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
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#b90124] hover:bg-neutral-100 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiCalendar className="text-base" />
                Schedule a Visit
              </a>
            </div>

            {/* Fast Helpline Contact Pill */}
            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/80">
              <span className="flex items-center gap-2">
                <FiPhoneCall className="text-[#dbc79f]" />
                Direct Helpline: <strong className="text-white">{tisSchoolInfo.phone}</strong>
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span>Available 9:00 AM – 6:00 PM (Mon – Sat)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
