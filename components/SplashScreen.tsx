import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer"
          onClick={handleClick}
        >
          {/* Subtle ambient glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(156,123,92,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center"
          >
            {/* Brand name - ultra thin */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-extralight text-white tracking-[0.3em] mb-6">
              FRESHOZZ
            </h1>

            {/* Minimal line */}
            <motion.div
              className="w-24 h-[0.5px] bg-gradient-to-r from-transparent via-copper/40 to-transparent mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-light"
            >
              Masala × Mojito
            </motion.p>
          </motion.div>

          {/* Minimal corner accents */}
          <div className="absolute top-8 left-8 w-6 h-[0.5px] bg-copper/20" />
          <div className="absolute top-8 left-8 w-[0.5px] h-6 bg-copper/20" />
          <div className="absolute bottom-8 right-8 w-6 h-[0.5px] bg-copper/20" />
          <div className="absolute bottom-8 right-8 w-[0.5px] h-6 bg-copper/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
