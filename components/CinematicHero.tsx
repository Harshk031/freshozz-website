import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scene transitions based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const bottleY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const bottleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0.3]);

  // Auto-advance scenes - faster pacing
  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 1000),
      setTimeout(() => setScene(2), 2500),
      setTimeout(() => setScene(3), 4000)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-black">
      {/* Sticky cinematic container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Premium multi-layer ambient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,180,140,0.15) 0%, rgba(156,123,92,0.08) 40%, transparent 65%)',
            filter: 'blur(100px)',
            scale
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(156,123,92,0.12) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Lens flare effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.3, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(100,180,140,0.4) 0%, rgba(100,180,140,0.1) 40%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.6, 0.2, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(156,123,92,0.5) 0%, rgba(156,123,92,0.2) 40%, transparent 70%)',
            filter: 'blur(25px)'
          }}
        />

        {/* Light leak overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-mint/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-copper/10 to-transparent" />
        </div>

        {/* Product bottle silhouette */}
        <motion.div
          className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-96"
          style={{ 
            y: bottleY, 
            opacity: bottleOpacity,
            background: 'linear-gradient(180deg, rgba(100,180,140,0.1) 0%, rgba(156,123,92,0.1) 100%)',
            borderRadius: '45% 45% 20% 20%',
            filter: 'blur(2px)'
          }}
        />

        {/* Scene 1: Powerful opening */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: scene >= 0 ? 1 : 0, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: scene >= 0 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-mint/60 to-transparent mx-auto mb-8"
            />
            <p className="text-mint/80 text-base tracking-[0.6em] uppercase font-light mb-2"
               style={{ textShadow: '0 0 40px rgba(100,180,140,0.5)' }}>
              Born Refreshing
            </p>
            <p className="text-white/70 text-sm mb-2">
              India's First Premium Masala Mojito Soda
            </p>
            <p className="text-white/50 text-xs tracking-wide">
              ₹35 • Zero Sugar • 100% Natural
            </p>
          </motion.div>
        </motion.div>

        {/* Scene 2: Epic brand reveal with depth */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: scene >= 1 ? 1 : 0,
              scale: scene >= 1 ? 1 : 0.9
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center relative"
          >
            {/* Glow behind text */}
            <div className="absolute inset-0 blur-3xl opacity-40"
                 style={{ background: 'radial-gradient(ellipse, rgba(100,180,140,0.3) 0%, transparent 70%)' }} />
            
            {/* Main brand with premium styling */}
            <h1 className="relative text-6xl md:text-9xl lg:text-[12rem] font-display font-thin text-white tracking-[0.35em] mb-8"
                style={{ 
                  textShadow: '0 0 80px rgba(100,180,140,0.6), 0 0 120px rgba(156,123,92,0.3)',
                  background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              FRESHOZZ
            </h1>

            {/* Premium tagline with separators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: scene >= 1 ? 1 : 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center justify-center gap-4 text-white/50 text-xs md:text-sm tracking-[0.5em] uppercase"
            >
              <span className="text-mint/70">Masala</span>
              <div className="w-1.5 h-1.5 rounded-full bg-copper/50 shadow-[0_0_10px_rgba(156,123,92,0.8)]" />
              <span className="text-white/60">Mojito</span>
              <div className="w-1.5 h-1.5 rounded-full bg-mint/50 shadow-[0_0_10px_rgba(100,180,140,0.8)]" />
              <span className="text-copper/70">Zero Sugar</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scene 3: Impactful product specs with glass morphism */}
        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: scene >= 2 ? 1 : 0,
              y: scene >= 2 ? 0 : 30
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl px-6"
          >
            {/* Premium glass morphism specs */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: scene >= 2 ? 1 : 0, y: scene >= 2 ? 0 : 20 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-5xl md:text-6xl font-thin text-mint mb-3"
                     style={{ textShadow: '0 0 40px rgba(100,180,140,0.6)' }}>0%</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/60">Preservatives</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: scene >= 2 ? 1 : 0, y: scene >= 2 ? 0 : 20 }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-5xl md:text-6xl font-thin text-mint mb-3"
                     style={{ textShadow: '0 0 40px rgba(100,180,140,0.6)' }}>0%</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/60">Sugar Calories</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: scene >= 2 ? 1 : 0, y: scene >= 2 ? 0 : 20 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-5xl md:text-6xl font-thin text-white mb-3"
                     style={{ textShadow: '0 0 40px rgba(255,255,255,0.4)' }}>100%</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/60">Real Flavour</div>
              </motion.div>
            </div>

            {/* Premium CTA with glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scene >= 3 ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(100,180,140,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-mint/20 to-copper/20 backdrop-blur-xl border border-mint/30 text-white text-xs tracking-[0.4em] uppercase font-light rounded-full hover:border-mint/50 transition-all cursor-pointer"
                style={{ textShadow: '0 0 20px rgba(100,180,140,0.5)' }}
              >
                Experience Freshozz ↓
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced vignette with premium edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.95) 100%)'
          }}
        />
        
        {/* Film grain intensity */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")' }} />
      </div>
    </div>
  );
}
