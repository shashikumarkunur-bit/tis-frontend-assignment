import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#fff1b8] via-[#c09d59] to-[#60bab1] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
