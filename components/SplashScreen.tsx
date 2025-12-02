import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if already seen this session
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV3');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto-hide after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV3', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream cursor-pointer"
          onClick={() => {
            setIsVisible(false);
            sessionStorage.setItem('freshozzSplashV3', 'true');
          }}
        >
          {/* Simple centered text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-light text-warm tracking-tight">
              FRESHOZZ
            </h1>
            <motion.div 
              className="w-12 h-[1px] bg-copper/50 mx-auto mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
