import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo3D from './Logo3D';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if already seen this session
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV4');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto-hide after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV4', 'true');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-cream via-bg-cream to-muddy/20 cursor-pointer"
          onClick={() => {
            setIsVisible(false);
            sessionStorage.setItem('freshozzSplashV4', 'true');
          }}
        >
          {/* Ambient floating orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-copper/10 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 3D Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Logo3D size="xl" />
            
            {/* Tagline below logo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mt-8 text-copper/60 text-sm tracking-[0.3em] uppercase font-display"
            >
              Sip the Freshness
            </motion.p>
          </motion.div>

          {/* Click hint */}
          <motion.p
            className="absolute bottom-12 text-warm/30 text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, delay: 2, repeat: Infinity }}
          >
            Tap to Enter
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
