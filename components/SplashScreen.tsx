import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for 3D Panda (client-only)
const Panda3D = dynamic(() => import('./Panda3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-64 h-64 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-copper/30 border-t-copper rounded-full animate-spin" />
    </div>
  )
});

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if already seen this session
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV7');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto-hide after 4 seconds (longer for 3D to load)
    const timer = setTimeout(() => {
      handleExit();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV7', 'true');
    }, 700);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-cream via-bg-cream to-muddy/20 cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />

          {/* 3D Panda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isExiting ? 0 : 1, 
              scale: isExiting ? 0.9 : 1,
              y: isExiting ? -20 : 0
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 h-72 md:w-96 md:h-96 relative z-10"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-copper/30 border-t-copper rounded-full animate-spin" />
              </div>
            }>
              <Panda3D />
            </Suspense>
          </motion.div>

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isExiting ? 0 : 1, 
              y: isExiting ? -10 : 0
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-4 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-warm tracking-tight">
              FRESHOZZ
            </h1>
            <p className="text-copper/50 text-xs tracking-[0.2em] uppercase mt-2 font-display">
              Sip the Freshness
            </p>
          </motion.div>

          {/* Tap hint */}
          <motion.p
            className="absolute bottom-8 text-warm/25 text-[10px] tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : [0, 0.5, 0] }}
            transition={{ duration: 2, delay: 2, repeat: Infinity }}
          >
            Tap to enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
