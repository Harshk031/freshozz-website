import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-cream overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-copper/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-mint/5 rounded-full blur-3xl"
      />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 py-32 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Large typography as design element */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                className="absolute -top-20 -left-10 text-[20rem] font-display font-bold text-warm leading-none select-none"
              >
                F
              </motion.div>
              
              <div className="relative bg-white/50 backdrop-blur-sm border border-copper/10 rounded-2xl p-12">
                <div className="space-y-8">
                  {/* Quote marks */}
                  <div className="text-8xl font-serif text-copper/20 leading-none">"</div>
                  
                  <p className="text-2xl md:text-3xl font-light text-warm leading-relaxed">
                    We didn't just create a drink.
                    <br />
                    <span className="font-normal">We reimagined refreshment.</span>
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-[1px] bg-copper/30" />
                    <div>
                      <div className="text-warm font-light text-sm">The Freshozz Team</div>
                      <div className="text-muted-warm text-xs tracking-widest">India, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-mint" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-warm">Our Story</span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-display font-light text-warm tracking-tight leading-tight">
              From India,
              <br />
              For The <span className="font-normal text-copper">World</span>
            </h2>

            {/* Story paragraphs */}
            <div className="space-y-6 text-muted-warm text-base md:text-lg font-light leading-relaxed">
              <p>
                Freshozz was born from a simple truth: India deserves world-class beverages that celebrate our heritage without compromising on premium quality.
              </p>
              
              <p>
                We took the soul of Indian masala—bold, complex, unapologetic—and fused it with the refreshing essence of Cuban mojito. The result? A drink that's familiar yet revolutionary.
              </p>

              <p className="text-copper/80 italic">
                Zero preservatives. Zero sugar calories. 100% flavor.
                <br />
                This is beverages, elevated.
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Handcrafted Formula', 'Premium Ingredients', 'Indian Innovation'].map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-copper/20 rounded-full text-xs text-warm tracking-wide hover:bg-copper/10 transition-all cursor-default"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-copper/20 to-transparent mt-32 max-w-4xl mx-auto"
        />
      </motion.div>
    </div>
  );
}
