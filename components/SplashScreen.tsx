import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check if user has seen splash before (in this session)
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Auto hide after 3 seconds
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
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer"
          onClick={handleInteraction}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-near-black to-bg-dark" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (window?.innerWidth || 1920), 
                  y: (window?.innerHeight || 1080) + 50,
                  opacity: 0 
                }}
                animate={{ 
                  y: -50, 
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear'
                }}
                className="absolute w-1 h-1 bg-gold rounded-full"
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Hero Image - Bear with Bottle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{ 
                duration: 1.5,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-10 max-w-xl mx-auto px-4"
            >
              <Image
                src="/splash-hero.jpg"
                alt="Freshozz Bear"
                width={600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
              
              {/* Glow effect behind image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1.2 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 bg-gradient-radial from-gold/30 to-transparent blur-3xl -z-10"
              />
            </motion.div>

            {/* Brand Name - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1.5,
                delay: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-10 text-center mt-16"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-3 text-warm tracking-tight">
                FRESHOZZ
              </h1>
              <p className="text-sm md:text-base text-copper/70 font-display tracking-[0.2em] uppercase">
                Launching Soon
              </p>
            </motion.div>

            {/* Click to continue hint - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1.5,
                delay: 2
              }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
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
