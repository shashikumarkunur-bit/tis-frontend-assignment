import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'text'

  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  const dotX = useSpring(0, { stiffness: 1000, damping: 45 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 45 });

  useEffect(() => {
    // Only enable custom cursor on fine pointer (desktop mouse), NOT touch
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsEnabled(hasFinePointer);
      if (hasFinePointer) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-cursor');
      if (interactive) {
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          setCursorType('text');
        } else {
          setCursorType('pointer');
        }
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, dotX, dotY]);

  if (!isEnabled) return null;

  const isPointer = cursorType === 'pointer';
  const isText = cursorType === 'text';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 44 : isText ? 24 : 32,
          height: isPointer ? 44 : isText ? 36 : 32,
          borderColor: isPointer ? '#b90124' : 'rgba(192, 157, 89, 0.65)',
          backgroundColor: isPointer ? 'rgba(185, 1, 36, 0.08)' : 'rgba(192, 157, 89, 0.04)',
          borderRadius: isText ? '4px' : '9999px',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease'
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 8 : isText ? 2 : 6,
          height: isPointer ? 8 : isText ? 18 : 6,
          backgroundColor: isPointer ? '#b90124' : '#1c1c1c',
          borderRadius: isText ? '1px' : '9999px',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease'
        }}
      />
    </div>
  );
}
