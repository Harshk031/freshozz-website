import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollPercentage() {
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-copper via-mint to-copper origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* Percentage indicator (shows on scroll) */}
      {percentage > 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 left-8 z-[9999] hidden md:block"
        >
          <div className="relative">
            {/* Circle background */}
            <svg className="w-16 h-16 -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-copper/10"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-mint"
                style={{
                  strokeDasharray: `${2 * Math.PI * 28}`,
                  strokeDashoffset: `${2 * Math.PI * 28 * (1 - percentage / 100)}`,
                }}
              />
            </svg>

            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-display text-warm">
                {percentage}
                <span className="text-[8px] text-muted-warm">%</span>
              </span>
            </div>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded text-[10px] whitespace-nowrap pointer-events-none"
          >
            Scroll Progress
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
