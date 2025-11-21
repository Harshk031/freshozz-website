import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
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
    sessionStorage.setItem('hasSeenSplash', 'true');
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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-soil/20 to-black opacity-50" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 50,
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
            {/* Bear image with animations */}
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative w-[90vw] max-w-[600px] h-auto"
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

            {/* Animated text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-copper to-gold"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                FRESHOZZ
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-warm mt-4 font-body"
              >
                Sip the Freshness
              </motion.p>
            </motion.div>

            {/* Click to continue hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="absolute bottom-10 text-warm/60 text-sm font-body"
            >
              Click anywhere to continue
            </motion.div>
          </div>

          {/* Shimmer effect overlay */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 2,
              delay: 0.5,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            style={{ width: '50%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
