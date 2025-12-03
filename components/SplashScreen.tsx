import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [scene, setScene] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // TESTING MODE - Always show splash (remove for production)
    // const hasSeenSplash = sessionStorage.getItem('freshozzSplashV10');
    // if (hasSeenSplash) {
    //   setIsVisible(false);
    //   return;
    // }

    // Scene transitions
    const timers = [
      setTimeout(() => setScene(1), 800),    // Scene 1: Tagline
      setTimeout(() => setScene(2), 2500),   // Scene 2: Brand
      setTimeout(() => setScene(3), 5000),   // Scene 3: Product info
      setTimeout(() => setScene(4), 7500),   // Scene 4: Final
      setTimeout(() => handleExit(), 9500),  // Exit
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      // TESTING MODE - Don't save to sessionStorage
      // sessionStorage.setItem('freshozzSplashV10', 'true');
    }, 1000);
  };

  // Micro bubbles component
  const MicroBubbles = () => (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${10 + Math.random() * 80}%`,
            bottom: '-5%',
            background: `rgba(${Math.random() > 0.5 ? '100,180,140' : '156,123,92'}, ${0.2 + Math.random() * 0.3})`
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.3]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black cursor-pointer overflow-hidden"
          onClick={handleExit}
        >
          {/* Cinematic letterbox bars */}
          <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-50" />
          <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-50" />

          {/* Golden light beam */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(156,123,92,0.4) 0%, rgba(156,123,92,0.1) 30%, transparent 60%)'
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: scene >= 1 ? 0.6 : 0, 
              scaleY: scene >= 1 ? 1 : 0,
              width: scene >= 2 ? 300 : 1
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Ambient glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(156,123,92,0.06) 0%, rgba(100,180,140,0.03) 40%, transparent 70%)'
            }}
            animate={{ 
              scale: [1, 1.15, 1], 
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating dust particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
              style={{
                left: `${5 + i * 6}%`,
                top: `${20 + (i % 5) * 15}%`
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Micro bubbles rising */}
          <MicroBubbles />

          {/* SCENE 1: Opening tagline */}
          <AnimatePresence>
            {scene >= 1 && scene < 3 && (
              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 0.7, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[35%] text-[#64B48C] text-xs md:text-sm tracking-[0.5em] uppercase font-light"
              >
                A New Kind of Fizz
              </motion.p>
            )}
          </AnimatePresence>

          {/* SCENE 2: Brand name reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: scene >= 2 ? 1 : 0,
              y: isExiting ? -50 : 0,
              scale: isExiting ? 0.95 : 1
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center"
          >
            {/* Main brand */}
            <motion.h1
              initial={{ opacity: 0, y: 50, letterSpacing: '0.5em' }}
              animate={{ 
                opacity: scene >= 2 ? 1 : 0, 
                y: scene >= 2 ? 0 : 50,
                letterSpacing: scene >= 2 ? '0.2em' : '0.5em'
              }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extralight text-white mb-2"
            >
              FRESHOZZ
            </motion.h1>

            {/* Trademark symbol */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: scene >= 2 ? 0.4 : 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -top-2 -right-6 text-white/40 text-sm"
            >
              ™
            </motion.span>

            {/* Subtitle line */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: scene >= 2 ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div 
                className="h-[1px] bg-gradient-to-r from-transparent via-copper/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: scene >= 2 ? 60 : 0 }}
                transition={{ delay: 1, duration: 1 }}
              />
              <p className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] uppercase font-light">
                Masala Mojito Soda
              </p>
              <motion.div 
                className="h-[1px] bg-gradient-to-r from-transparent via-copper/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: scene >= 2 ? 60 : 0 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* SCENE 3: Product specs */}
          <AnimatePresence>
            {scene >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[20%] text-center"
              >
                {/* Three circles - brand identity */}
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[#8B5A2B]/60"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[#64B48C]/60"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white/40"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </motion.div>

                {/* Specs text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white/50 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light"
                >
                  0% Preservatives · 0% Sugar Spike · Real Flavour
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SCENE 4: Final tagline */}
          <AnimatePresence>
            {scene >= 4 && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[12%] text-[#64B48C]/70 text-[10px] md:text-xs tracking-[0.4em] uppercase font-light"
              >
                Taste the Freshness
              </motion.p>
            )}
          </AnimatePresence>

          {/* Skip hint */}
          <motion.p
            className="absolute bottom-[4%] text-white/10 text-[8px] tracking-[0.2em] uppercase z-50"
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tap to skip
          </motion.p>

          {/* Corner frame accents */}
          <div className="absolute top-[10%] left-6 w-8 h-[1px] bg-gradient-to-r from-copper/20 to-transparent" />
          <div className="absolute top-[10%] left-6 w-[1px] h-8 bg-gradient-to-b from-copper/20 to-transparent" />
          <div className="absolute top-[10%] right-6 w-8 h-[1px] bg-gradient-to-l from-copper/20 to-transparent" />
          <div className="absolute top-[10%] right-6 w-[1px] h-8 bg-gradient-to-b from-copper/20 to-transparent" />
          <div className="absolute bottom-[10%] left-6 w-8 h-[1px] bg-gradient-to-r from-copper/20 to-transparent" />
          <div className="absolute bottom-[10%] left-6 w-[1px] h-8 bg-gradient-to-t from-copper/20 to-transparent" />
          <div className="absolute bottom-[10%] right-6 w-8 h-[1px] bg-gradient-to-l from-copper/20 to-transparent" />
          <div className="absolute bottom-[10%] right-6 w-[1px] h-8 bg-gradient-to-t from-copper/20 to-transparent" />

          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
