import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <section ref={containerRef} className="py-32 px-4 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block text-copper uppercase tracking-widest text-sm font-semibold mb-4"
            >
              Premium Quality
            </motion.span>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-warm mb-6">
              Crafted for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper">
                Discerning Palate
              </span>
            </h2>
            
            <p className="text-lg text-muted-warm leading-relaxed mb-8">
              Every bottle is a masterpiece. From the perfect carbonation to the authentic masala blend, 
              we've obsessed over every detail to deliver an experience that's nothing short of extraordinary.
            </p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { label: 'FSSAI Certified', value: '100%' },
                { label: 'Natural Ingredients', value: 'Yes' },
                { label: 'Premium Carbonation', value: 'Triple Filtered' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center border-b border-copper/20 pb-3"
                >
                  <span className="text-muted-warm">{item.label}</span>
                  <span className="text-gold font-semibold">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Image with Parallax */}
          <motion.div
            style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-copper/10 to-transparent blur-3xl" />
              
              {/* Product placeholder */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-96 bg-gradient-to-br from-copper/30 to-soil/30 rounded-3xl shadow-2xl backdrop-blur-sm border border-gold/20 flex items-center justify-center">
                  <span className="text-8xl">🥤</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-gold/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-copper/10 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
