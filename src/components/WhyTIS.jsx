import { motion } from 'framer-motion';
import {
  FiAward,
  FiUsers,
  FiGlobe,
  FiSmile
} from 'react-icons/fi';
import { GiMedal, GiGraduateCap } from 'react-icons/gi';
import SectionHeading from './SectionHeading';
import { tisWhyChoose } from '../data/tisData';
import { fadeUp, staggerContainer } from '../utils/animations';

const iconMap = {
  GraduationCap: GiGraduateCap,
  Users: FiUsers,
  Medal: GiMedal,
  Award: FiAward,
  Sparkles: FiSmile,
  Globe: FiGlobe
};

export default function WhyTIS() {
  return (
    <section
      id="why-tis"
      className="py-20 lg:py-32 bg-[#f8f5f0] relative overflow-hidden"
      aria-label="Why Choose Tulas International School"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#b90124]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c09d59]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Why Choose TIS"
          title="The Distinctive Edge of"
          highlight="Tulas International"
          description="Choosing the right boarding school is an investment into your child's character and future. Here is what sets our modern Gurukul apart."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {tisWhyChoose.map((item, index) => {
            const IconComponent = iconMap[item.icon] || FiAward;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#b90124]/10 text-[#b90124] flex items-center justify-center group-hover:bg-[#b90124] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="text-2xl" />
                    </div>
                    <span className="text-xs font-bold text-neutral-400 font-display">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#c09d59] mb-1.5">
                    {item.highlight}
                  </span>

                  <h3 className="font-display font-extrabold text-xl text-[#1c1c1c] group-hover:text-[#b90124] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                  <span className="group-hover:text-[#b90124] transition-colors">
                    The Modern Gurukul Promise
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#b90124]/20 group-hover:bg-[#b90124] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
