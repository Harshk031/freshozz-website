import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if already seen this session
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV5');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto-hide after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV5', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream cursor-pointer"
          onClick={() => {
            setIsVisible(false);
            sessionStorage.setItem('freshozzSplashV5', 'true');
          }}
        >
          {/* Simple Text Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-warm tracking-tight">
              FRESHOZZ
            </h1>
            <motion.div 
              className="w-16 h-[1px] bg-copper/40 mx-auto mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-copper/50 text-xs tracking-[0.25em] uppercase mt-4 font-display"
            >
              Sip the Freshness
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
