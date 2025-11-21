import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasInteracted) {
        hideSplash();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const hideSplash = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
  };

  const handleInteraction = () => {
    setHasInteracted(true);
    hideSplash();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer overflow-hidden"
          onClick={handleInteraction}
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-premium-black to-black" />
          
          {/* Copper glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-copper/30 rounded-full blur-[150px]"
          />

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="text-center"
            >
              {/* Main brand reveal */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-7xl md:text-9xl font-display font-bold text-warm tracking-tighter mb-6 leading-none">
                  FRESHOZZ
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="space-y-6"
              >
                <div className="w-16 h-[1px] bg-copper/50 mx-auto" />
                <p className="text-lg md:text-xl text-copper/80 font-display tracking-[0.2em] uppercase">
                  Coming Soon
                </p>
              </motion.div>

              {/* Click hint */}
              <motion.p 
                className="text-copper/30 text-xs font-body tracking-[0.25em] uppercase mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.5, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Click Anywhere
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
