import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiStar } from 'react-icons/fi';
import { tisSportsAndActivities, tisNotableGuests } from '../data/tisData';
import { fadeUp, staggerContainer } from '../utils/animations';

const categories = ["All", "Olympic Sports", "Aquatics & Field", "Racquet & Precision", "Campus Luminaries"];

export default function Activities() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = tisSportsAndActivities.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Olympic Sports") return item.category.includes("Sports") || item.category === "Equestrian";
    if (activeTab === "Aquatics & Field") return item.category === "Aquatics" || item.category === "Field Sports";
    if (activeTab === "Racquet & Precision") return item.category === "Racquet Sports" || item.category === "Precision" || item.category === "Indoor Sports";
    return true;
  });

  return (
    <section
      id="life-at-tis"
      className="py-20 lg:py-32 bg-[#131313] text-white relative overflow-hidden"
      aria-label="Life at Tulas International School"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b90124]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#60bab1]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-[#b90124]/20 text-[#ff8093] border border-[#b90124]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8093] animate-pulse" />
            Beyond Academics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Life at TIS: Where{' '}
            <span className="text-[#60bab1]">Passion Meets Discipline</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            “Sports is not just a facility at Tulas—it is the foundation!” Over 16+ Olympic disciplines,
            performing arts academies, and frequent interactions with national sporting icons.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#b90124] text-white shadow-lg shadow-[#b90124]/30 scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10'
              }`}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery / Masonry Layout */}
        {activeTab !== "Campus Luminaries" ? (
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.name}
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3.5] bg-neutral-900 border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#60bab1]/50 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} activity at Tulas International School`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

                  {/* Overlay Titles */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#60bab1] mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-display font-extrabold text-base sm:text-lg lg:text-xl leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Campus Luminaries Sub-Section */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tisNotableGuests.map((guest, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#b90124] transition-all duration-300"
              >
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shrink-0 border-2 border-white/20 group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#c09d59] mb-1">
                    <FiStar /> Campus Luminary
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {guest.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-300 leading-relaxed">
                    {guest.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Olympic Sports Banner Footer */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#60bab1]/20 text-[#60bab1] flex items-center justify-center shrink-0">
              <FiActivity className="text-2xl" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-white">
                Coached by National & State Certified Champions
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Every child is introduced to both individual precision sports and collaborative team games.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#60bab1] hover:bg-[#4ea69d] text-neutral-950 font-extrabold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Explore Athletics
          </a>
        </div>
      </div>
    </section>
  );
}
