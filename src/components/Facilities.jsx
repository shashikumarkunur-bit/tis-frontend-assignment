import { motion } from 'framer-motion';
import { FiCompass } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { tisFacilities, tisSchoolInfo } from '../data/tisData';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      aria-label="TIS Campus and World-Class Facilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Campus & Infrastructure"
          title="World-Class Spaces Crafted for"
          highlight="Growth & Exploration"
          description="Spanning 22 acres of pollution-free lush greenery in Dehradun, our campus provides safe, modern, and inspiring spaces for living, studying, and athletics."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Bento Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {/* Bento Item 1: Large Featured Campus Card (Spans 2 cols, 2 rows on large screens) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative min-h-[380px] lg:min-h-[500px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={tisFacilities[0].image}
              alt={tisFacilities[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between text-white z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff1b8] text-[#1c1c1c] shadow-md">
                  {tisFacilities[0].category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  {tisFacilities[0].tag}
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  {tisFacilities[0].title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-200 max-w-xl font-normal leading-relaxed">
                  {tisFacilities[0].description}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={tisSchoolInfo.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#b90124] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/30 transition-all duration-200"
                  >
                    <FiCompass className="text-base" />
                    Take 360° Virtual Tour
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Olympic Sports Complex */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 relative min-h-[260px] lg:min-h-[240px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tisFacilities[1].image}
              alt={tisFacilities[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#60bab1] text-neutral-900 w-fit">
                {tisFacilities[1].tag}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  {tisFacilities[1].title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2">
                  {tisFacilities[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Smart Classrooms */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 relative min-h-[260px] lg:min-h-[240px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tisFacilities[2].image}
              alt={tisFacilities[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#c09d59] text-neutral-950 w-fit">
                {tisFacilities[2].tag}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  {tisFacilities[2].title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2">
                  {tisFacilities[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 4: Science & STEM Labs */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 relative min-h-[260px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tisFacilities[3].image}
              alt={tisFacilities[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-[#b90124] w-fit">
                {tisFacilities[3].tag}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  {tisFacilities[3].title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2">
                  {tisFacilities[3].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 5: Residential Hostels */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 relative min-h-[260px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tisFacilities[4].image}
              alt={tisFacilities[4].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-neutral-900 w-fit">
                {tisFacilities[4].tag}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  {tisFacilities[4].title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2">
                  {tisFacilities[4].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 6: Multi-Cuisine Dining */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-2 lg:col-span-1 relative min-h-[260px] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={tisFacilities[5].image}
              alt={tisFacilities[5].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#fff1b8] text-[#1c1c1c] w-fit">
                {tisFacilities[5].tag}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  {tisFacilities[5].title}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2">
                  {tisFacilities[5].description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
