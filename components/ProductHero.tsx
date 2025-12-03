import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProductHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        {/* Gradient overlay for product to pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
        
        {/* Dynamic glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper/15 rounded-full blur-[120px] animate-pulse delay-1000" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Bottle mock - replace with actual product image */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Condensation effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10 rounded-3xl backdrop-blur-sm" />
              
              {/* Glow behind bottle */}
              <div className="absolute -inset-10 bg-gradient-radial from-mint/30 via-transparent to-transparent blur-3xl" />
              
              {/* Product placeholder - replace with actual image */}
              <div className="relative w-full h-full bg-gradient-to-br from-mint/10 to-copper/10 rounded-3xl flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <div className="w-32 h-64 mx-auto bg-white/5 rounded-full mb-4 backdrop-blur-md border border-white/10" />
                  <p className="text-white/40 text-xs tracking-widest">200ML PREMIUM SODA</p>
                </div>
              </div>

              {/* Floating specs */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full"
              >
                <p className="text-white text-xs font-light">0% Sugar</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 bottom-1/3 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full"
              >
                <p className="text-white text-xs font-light">Real Ingredients</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Product details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-white space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-12 bg-mint/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">Premium Masala Mojito</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-display font-thin tracking-tight leading-none">
              Turn Down.
              <br />
              <span className="text-mint">Taste Up.</span>
            </h2>

            {/* Description */}
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md">
              India's first premium soda that flips the script. Rich masala spices meet fresh mojito coolness. Zero compromises, all flavor.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Preservatives', value: '0%' },
                { label: 'Calories from Sugar', value: '0%' },
                { label: 'Natural Ingredients', value: '100%' },
                { label: 'Fizz Level', value: 'High' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="text-2xl font-thin mb-1">{item.value}</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-white/40">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 180, 140, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm tracking-[0.3em] uppercase font-light hover:border-mint/40 transition-all cursor-pointer"
            >
              Join Waitlist →
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30 text-xs tracking-widest flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
