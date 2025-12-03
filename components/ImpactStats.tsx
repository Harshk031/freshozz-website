import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ end, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      {/* Number */}
      <div className="text-8xl md:text-9xl font-display font-thin text-white mb-4 tracking-tight">
        {count}
        <span className="text-mint">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-white/60 text-xs tracking-[0.4em] uppercase">
        {label}
      </div>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5, duration: 0.8 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-mint/40 to-transparent mt-6 max-w-xs mx-auto"
      />
    </motion.div>
  );
}

export default function ImpactStats() {
  return (
    <div className="bg-black py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-thin text-white mb-4 tracking-tight">
            Numbers That <span className="text-mint">Matter</span>
          </h2>
          <div className="flex items-center justify-center gap-3 text-white/30 text-[10px] tracking-[0.5em] uppercase">
            <div className="h-[1px] w-12 bg-white/20" />
            <span>Pure Stats</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
          <AnimatedStat
            end={0}
            suffix="%"
            label="Preservatives"
            delay={0}
          />
          <AnimatedStat
            end={0}
            suffix="%"
            label="Sugar Calories"
            delay={0.2}
          />
          <AnimatedStat
            end={100}
            suffix="%"
            label="Natural Ingredients"
            delay={0.4}
          />
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Clean ingredients. Bold flavor. Zero compromise.
            <br />
            <span className="text-mint">That's the Freshozz promise.</span>
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-mint/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-copper/20 to-transparent" />
      </div>
    </div>
  );
}
