import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hasSeenSplash = sessionStorage.getItem('freshozzSplashV9');
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => handleExit(), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('freshozzSplashV9', 'true');
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Cinematic ambient light */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(156,123,92,0.08) 0%, rgba(100,180,140,0.05) 40%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-copper/30 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isExiting ? 0 : 0.6, 
                y: isExiting ? -10 : 0 
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#64B48C]/60 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-light"
            >
              Masala Meets Mojito
            </motion.p>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isExiting ? 0 : 1, 
                y: isExiting ? -20 : 0 
              }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white tracking-[0.15em] mb-4"
            >
              FRESHOZZ
            </motion.h1>

            {/* Divider line */}
            <motion.div 
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, #9C7B5C, transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: isExiting ? 0 : 1, 
                opacity: isExiting ? 0 : 1 
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 0.4 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light"
            >
              Premium Masala Mojito Soda
            </motion.p>
          </motion.div>

          {/* Bottom hint */}
          <motion.p
            className="absolute bottom-10 text-white/15 text-[9px] tracking-[0.25em] uppercase"
            animate={{ opacity: isExiting ? 0 : [0.1, 0.25, 0.1] }}
            transition={{ duration: 2.5, delay: 1.5, repeat: Infinity }}
          >
            Tap to Enter
          </motion.p>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-12 h-[1px] bg-gradient-to-r from-copper/30 to-transparent" />
          <div className="absolute top-8 left-8 w-[1px] h-12 bg-gradient-to-b from-copper/30 to-transparent" />
          <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-gradient-to-l from-copper/30 to-transparent" />
          <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-gradient-to-t from-copper/30 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
