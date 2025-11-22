import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Product() {
  const [activeTab, setActiveTab] = useState(0);
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end start']
  });
  
  const productY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const productRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  
  const whyTabs = [
    {
      question: "6-Month Shelf Life?",
      problem: "Other brands promise long shelf life",
      answer: "The Truth About Preservatives",
      content: "Most masala sodas use chemical preservatives to last 6+ months on shelves. Real masala settles. Real flavors fade. That's nature. We chose freshness over fake stability. Our spices are real, so they behave like real ingredients should."
    },
    {
      question: "Masala Never Settles?",
      problem: "Your masala soda looks cloudy at the bottom",
      answer: "We Solved The Science",
      content: "Traditional masala sodas let spices sink because they use crude grinding methods. We use micro-emulsion technology that suspends authentic masala particles evenly. Shake once. Perfect pour. No sediment. Just pure, distributed flavor in every sip."
    },
    {
      question: "Upset Stomach Solution?",
      problem: "What do you drink when bloated?",
      answer: "Ayurvedic Meets Fizz",
      content: "Ginger. Cumin. Black salt. The same trio your grandmother used for digestion, now in a sophisticated fizzy form. Not medicine. Not soda. A functional refreshment that actually helps your gut while tasting incredible."
    },
    {
      question: "Premium Flavored Cola?",
      problem: "Name one sophisticated Indian fizzy drink",
      answer: "The Category Didn't Exist",
      content: "You can't. Because until now, India had mass-market colas or cheap masala sodas. Nothing premium. Nothing cultural yet contemporary. Freshozz created the category that should have existed: a premium Indian fizzy drink worth ₹100+."
    }
  ];

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

        {/* WHY Section - Pain Points & Solutions */}
        <section className="py-32 px-4 bg-gradient-to-b from-bg-dark to-near-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Truth
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-6 leading-tight">
                WHY Freshozz Exists
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-8" />
              <p className="text-lg text-muted-warm max-w-2xl mx-auto">
                Questions you've asked. Answers the industry avoids.
              </p>
            </motion.div>

            {/* Interactive Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {whyTabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-6 rounded-xl border transition-all duration-500 text-left ${
                      activeTab === index
                        ? 'bg-copper/10 border-copper shadow-[0_0_30px_rgba(184,107,44,0.3)] backdrop-blur-xl'
                        : 'bg-soil/10 border-copper/20 hover:border-copper/40'
                    }`}
                  >
                    {/* Arrow indicator for active tab */}
                    {activeTab === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-copper" />
                      </motion.div>
                    )}

                    <p className="text-xs text-copper/50 mb-2 font-display tracking-wider uppercase">
                      {tab.problem}
                    </p>
                    <h3 className={`text-base md:text-lg font-display font-semibold transition-colors ${
                      activeTab === index ? 'text-copper' : 'text-warm/70'
                    }`}>
                      {tab.question}
                    </h3>

                    {/* Glow effect for active tab */}
                    {activeTab === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-copper/5 to-gold/5 rounded-xl pointer-events-none"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-soil/20 to-copper/10 backdrop-blur-xl border border-copper/20 rounded-2xl p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl font-display font-light text-copper mb-6 leading-tight"
                >
                  {whyTabs[activeTab].answer}
                </motion.h3>
                
                <div className="w-20 h-[1px] bg-copper/40 mx-auto" />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-warm/80 leading-relaxed"
                >
                  {whyTabs[activeTab].content}
                </motion.p>
              </div>
            </motion.div>

            {/* Bottom emphasis */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-base text-copper/60 italic">
                This is why Freshozz isn't just another drink.<br />
                It's a category that needed to exist.
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
