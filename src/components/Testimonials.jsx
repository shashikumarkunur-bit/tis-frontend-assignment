import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import SectionHeading from './SectionHeading';
import { tisTestimonials } from '../data/tisData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = tisTestimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const current = tisTestimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-[#faf9f6] relative overflow-hidden"
      aria-label="Parent Testimonials"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Parent Experiences"
          title="Voices of Trust from"
          highlight="Our Parent Community"
          description="Verified testimonials from parents whose children thrive in the caring residential ecosystem of Tulas International School."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Carousel Showcase Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl relative"
            >
              {/* Quote Icon Background */}
              <RiDoubleQuotesL className="absolute top-6 right-8 text-6xl text-[#b90124]/10 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Parent Avatar with Verified Badge */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-[#c09d59] p-0.5 shadow-md">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-neutral-100" title="Google Verified Review">
                    <FcGoogle className="text-xl" />
                  </div>
                </div>

                {/* Feedback & Details */}
                <div className="flex-1 text-center sm:text-left">
                  {/* Star Rating */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-3" aria-label="5 out of 5 stars">
                    {[...Array(current.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-amber-400 text-sm" />
                    ))}
                    <span className="text-xs font-bold text-neutral-500 ml-1.5">5.0 Star Rating</span>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-base sm:text-lg lg:text-xl text-neutral-800 font-serif-editorial italic leading-relaxed">
                    “{current.feedback}”
                  </p>

                  {/* Parent Identity */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#1c1c1c]">
                        {current.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#b90124]">
                        {current.relation}
                      </p>
                    </div>

                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Verified Google Review
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {tisTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-8 h-2.5 bg-[#b90124]'
                      : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-[#b90124] hover:text-white hover:border-[#b90124] flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-[#b90124] hover:text-white hover:border-[#b90124] flex items-center justify-center transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#b90124]"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-14 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
          <div className="flex items-center gap-2">
            <FcGoogle className="text-2xl" />
            <span className="font-display font-extrabold text-sm text-neutral-900">Google Rating</span>
            <div className="flex text-amber-400 text-xs">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-amber-400" />
              ))}
            </div>
          </div>
          <span className="hidden sm:inline text-neutral-300">|</span>
          <span className="text-xs sm:text-sm text-neutral-600 font-medium">
            Rated 4.9/5 by 350+ Parents & Guardians across India
          </span>
        </div>
      </div>
    </section>
  );
}
