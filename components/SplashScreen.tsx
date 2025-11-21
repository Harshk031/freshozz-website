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
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer"
          onClick={handleInteraction}
        >
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-8">
            {/* Mystery tagline sequence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-center"
            >
              <motion.p 
                className="text-copper/60 text-sm md:text-base font-body tracking-[0.3em] uppercase mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                Something Unexpected
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-warm tracking-tight mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              >
                FRESHOZZ
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-copper font-display font-light italic">
                  Where tradition meets innovation
                </p>
                <div className="w-24 h-[1px] bg-copper/40 mx-auto my-6" />
                <p className="text-base md:text-lg text-warm/60 font-body">
                  A new category of refreshment<br />is about to emerge
                </p>
              </motion.div>

              <motion.p 
                className="text-copper/40 text-xs font-body tracking-[0.3em] uppercase mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 3, delay: 2.5, repeat: Infinity }}
              >
                Click to Discover
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
