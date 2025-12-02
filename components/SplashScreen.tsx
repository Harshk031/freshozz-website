import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if already seen this session
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV6');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto-hide after 2.5 seconds
    const timer = setTimeout(() => {
      handleExit();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV6', 'true');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Premium ripple effect on click */}
          {isExiting && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 8, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-32 h-32 bg-copper/20 rounded-full"
            />
          )}

          {/* Text Logo with exit animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isExiting ? 0 : 1, 
              y: isExiting ? -30 : 0,
              scale: isExiting ? 0.95 : 1
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold text-warm tracking-tight"
              whileTap={{ scale: 0.98 }}
            >
              FRESHOZZ
            </motion.h1>
            <motion.div 
              className="w-16 h-[1px] bg-copper/40 mx-auto mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isExiting ? 0 : 1 }}
              transition={{ duration: 0.4, delay: isExiting ? 0 : 0.3 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 1 }}
              transition={{ delay: isExiting ? 0 : 0.5, duration: 0.3 }}
              className="text-copper/50 text-xs tracking-[0.25em] uppercase mt-4 font-display"
            >
              Sip the Freshness
            </motion.p>
          </motion.div>

          {/* Subtle tap hint */}
          <motion.p
            className="absolute bottom-8 text-warm/20 text-[10px] tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : [0, 0.4, 0] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          >
            Tap anywhere
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
