import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Product() {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end start']
  });
  
  const productY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const productRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  const features = [
    { title: 'Premium Carbonation', description: 'Triple-filtered for perfect fizz that lasts' },
    { title: 'Authentic Masala Blend', description: 'Cumin, black salt, chili, and secret spices' },
    { title: 'Natural Cola Extract', description: 'No artificial colors or preservatives' },
    { title: 'Low Sugar', description: '30% less sugar than traditional sodas' },
    { title: 'FSSAI Certified', description: 'Meets all safety and quality standards' },
    { title: 'Made in India', description: 'Proudly crafted for Indian taste buds' },
  ];

  const nutrition = [
    { label: 'Serving Size', value: '330ml' },
    { label: 'Calories', value: '110' },
    { label: 'Total Sugar', value: '18g' },
    { label: 'Sodium', value: '35mg' },
    { label: 'Caffeine', value: '0mg' },
  ];

  return (
    <>
      <Head>
        <title>Product | Freshozz Masala Cola</title>
        <meta name="description" content="Discover Freshozz Masala Cola - premium carbonation, authentic masala blend, and natural ingredients. Sip the Freshness." />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-warm mb-6">
                The <span className="text-gold">Freshozz</span> Experience
              </h1>
              <p className="text-xl text-muted-warm max-w-3xl mx-auto">
                Sip the Freshness. Every bottle brings tradition and innovation in perfect harmony.
              </p>
            </motion.div>

            {/* Product Image Placeholder with Parallax */}
            <motion.div
              ref={productRef}
              style={{ y: productY, rotate: productRotate }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="max-w-lg mx-auto mb-16 relative"
            >
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-radial from-gold/30 via-copper/20 to-transparent blur-3xl scale-110" />
              
              <div className="relative aspect-[3/4] bg-gradient-to-b from-copper/5 to-soil/5 rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-copper/20 overflow-hidden group backdrop-blur-xl p-8">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <div className="relative z-10 text-center space-y-8">
                  <div className="w-20 h-[1px] bg-copper/50 mx-auto" />
                  <p className="text-8xl font-display font-light text-warm tracking-tighter">?</p>
                  <div className="w-20 h-[1px] bg-copper/50 mx-auto" />
                  <p className="text-base text-copper/70 font-display tracking-[0.3em] uppercase">
                    Reveal Soon
                  </p>
                </div>
              </div>
              
              {/* Floating particles */}
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-gold/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-copper/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 bg-bg-dark">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-center text-warm mb-16"
            >
              What Makes It <span className="text-copper">Special</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-soil/10 border border-copper/20 rounded-xl p-6 shadow-soft-gold cursor-pointer relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl font-display font-semibold text-gold mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-muted-warm relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Facts */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-warm mb-4">
                Nutrition Facts
              </h2>
              <p className="text-muted-warm">Per 330ml bottle</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-warm/5 backdrop-blur-sm border-2 border-gold/30 rounded-2xl p-8"
            >
              {nutrition.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-copper/20 last:border-b-0"
                >
                  <span className="text-warm font-display font-semibold">{item.label}</span>
                  <span className="text-gold text-lg">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-warm text-sm mt-8"
            >
              Contains: Carbonated Water, Natural Cola Extract, Masala Spice Blend (Cumin, Black Salt, Chili, Ginger), 
              Cane Sugar, Natural Flavoring, Citric Acid
            </motion.p>
          </div>
        </section>
      </Layout>
    </>
  );
}
