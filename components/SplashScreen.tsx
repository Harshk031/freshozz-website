import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    }, 3000);

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
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-premium-black cursor-pointer"
          onClick={handleInteraction}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-near-black to-bg-dark" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-xl mx-auto px-4"
            >
              <Image
                src="/splash-hero.jpg"
                alt="Freshozz Bear"
                width={600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mt-16"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-3 text-warm tracking-tight">
                FRESHOZZ
              </h1>
              <p className="text-sm md:text-base text-copper/70 font-display tracking-[0.2em] uppercase">
                Launching Soon
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-copper/30 text-xs font-body tracking-[0.2em] uppercase">
                Click to Enter
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
