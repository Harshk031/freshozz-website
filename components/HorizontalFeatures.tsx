import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Zero Preservatives',
    subtitle: 'Pure & Natural',
    description: 'No artificial chemicals. Just real ingredients doing real magic.',
    icon: '🌿',
    color: 'mint'
  },
  {
    title: 'Zero Sugar Calories',
    subtitle: 'Guilt-Free Indulgence',
    description: 'All the flavor, none of the sugar. Sweetened with natural stevia.',
    icon: '✨',
    color: 'copper'
  },
  {
    title: 'Masala × Mojito',
    subtitle: 'Fusion Innovation',
    description: 'Indian spices meet Cuban refreshment. A flavor revolution.',
    icon: '🔥',
    color: 'mint'
  },
  {
    title: 'High Fizz',
    subtitle: 'Maximum Refreshment',
    description: 'Carbonation levels engineered for that perfect crisp crack.',
    icon: '💧',
    color: 'copper'
  }
];

export default function HorizontalFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-black py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-thin text-white mb-6 tracking-tight">
            Engineered for <span className="text-mint">Excellence</span>
          </h2>
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase">
            Every Detail Matters
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="relative">
        <div className="flex gap-6 px-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 md:w-96"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all group cursor-default">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-6"
                >
                  {feature.icon}
                </motion.div>

                {/* Subtitle */}
                <div className={`text-${feature.color}/60 text-[9px] tracking-[0.4em] uppercase mb-2`}>
                  {feature.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-display font-light text-white mb-4 group-hover:text-mint transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className={`h-[1px] bg-${feature.color}/20 mt-6 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-white/20 text-xs tracking-[0.3em] uppercase">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
            <span>Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
