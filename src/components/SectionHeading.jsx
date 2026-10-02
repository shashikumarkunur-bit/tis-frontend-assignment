import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-[#b90124]/10 text-[#b90124] border border-[#b90124]/20`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#b90124] animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#1c1c1c] leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-[#b90124]">
            {highlight}
            <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#c09d59]/40 rounded-full -z-10" />
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
