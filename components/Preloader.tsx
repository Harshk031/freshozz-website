import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[10001] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Brand name reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-display font-thin text-white tracking-[0.3em]">
                FRESHOZZ
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-mint/40 to-transparent mt-6"
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 h-[1px] bg-white/10 mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-copper via-mint to-copper"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="text-white/40 text-xs tracking-[0.4em] uppercase mt-6"
            >
              {progress}%
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.2 }}
              className="text-white/30 text-[10px] tracking-[0.5em] uppercase mt-8"
            >
              Born Refreshing
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
