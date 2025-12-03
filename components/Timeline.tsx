import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2024',
    quarter: 'Q1',
    title: 'The Spark',
    description: 'Concept ideation and first recipe experiments. 200+ iterations to perfect the masala-mojito fusion.',
    icon: '💡'
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'Formula Locked',
    description: 'Zero preservatives, zero sugar calories achieved. Natural ingredients sourced from across India.',
    icon: '🔬'
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Brand Born',
    description: 'Freshozz identity created. Premium packaging designed to compete globally.',
    icon: '🎨'
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Production Ready',
    description: 'Manufacturing partnerships finalized. Quality standards set at international benchmarks.',
    icon: '🏭'
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Market Launch',
    description: 'First bottles hit the market. Pre-orders and early access for waitlist members.',
    icon: '🚀'
  },
  {
    year: '2025',
    quarter: 'Q2+',
    title: 'Scale & Expand',
    description: 'Pan-India distribution. International markets on the horizon.',
    icon: '🌏'
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="bg-cream py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-copper rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-copper/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-muted-warm">Our Journey</span>
            <div className="h-[1px] w-12 bg-copper/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-thin text-warm tracking-tight">
            From Idea to
            <br />
            <span className="font-normal text-copper">Impact</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-copper/10 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-copper via-mint to-copper origin-top"
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="bg-white/60 backdrop-blur-sm border border-copper/10 rounded-2xl p-8 hover:bg-white hover:shadow-soft-gold transition-all duration-500 group">
                    {/* Year badge */}
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="px-3 py-1 bg-copper/20 border border-copper/30 rounded-full text-copper text-xs tracking-wider">
                        {milestone.year}
                      </div>
                      <div className="px-3 py-1 bg-mint/20 border border-mint/30 rounded-full text-mint text-xs tracking-wider">
                        {milestone.quarter}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-display font-light text-warm mb-3 group-hover:text-copper transition-colors">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-warm text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon (center) */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-white border-4 border-cream rounded-full flex items-center justify-center text-4xl shadow-soft-gold z-10 relative"
                  >
                    {milestone.icon}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-copper/10 via-mint/10 to-copper/10 border border-copper/20 rounded-full">
            <p className="text-warm text-sm tracking-wide">
              This is just the beginning of our story.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
