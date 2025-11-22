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
      question: "Market Comparison",
      problem: "What makes Freshozz different?",
      answer: "Triple-Filtered vs Mass Production",
      content: "Market brands carbonate water once and bottle. We triple-filter carbonation through precision micro-bubble technology. Each bubble is 40% smaller than standard sodas, creating a smoother fizz that lasts 3x longer after opening. The difference? They optimize for cost. We optimize for experience. That's why one sip feels different."
    },
    {
      question: "Spice Engineering",
      problem: "Why doesn't your masala settle?",
      answer: "Micro-Emulsion vs Crude Grinding",
      content: "Traditional masala sodas grind spices at 2000 RPM. Particles stay large (100+ microns), sink fast, create sediment. Our cold-press micro-emulsion process operates at 12000 RPM with temperature control, creating 5-micron masala particles that remain suspended. Result: uniform distribution, no cloudiness, authentic taste in every sip without the shake-and-pray ritual."
    },
    {
      question: "Sugar Reality",
      problem: "How do you taste sweet with less sugar?",
      answer: "Natural Balance vs Artificial Spikes",
      content: "Mass sodas use 30g+ sugar per bottle to mask cheap ingredients. We use 18g organic cane sugar paired with natural spice aromatics (ginger, cumin, fennel) that activate sweetness receptors naturally. Your brain perceives full flavor without the sugar crash. It's sensory science, not chemistry shortcuts. That's why you don't feel thirsty after."
    },
    {
      question: "Shelf Life Truth",
      problem: "Why only 90 days vs 6 months?",
      answer: "Freshness vs Preservative Overload",
      content: "Industry secret: 6-month shelf life requires sodium benzoate, potassium sorbate, and stabilizers. These preserve the liquid but kill the spice aromatics within 60 days. We chose 90-day freshness with natural preservation (citric acid + CO2 pressure). You get real spice flavor that's alive, not a preserved memory of taste. Premium products expire. Cheap ones don't."
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
                Technical Excellence
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-6 leading-tight">
                How We're Different
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-8" />
              <p className="text-lg text-muted-warm max-w-2xl mx-auto">
                Side-by-side comparisons. Real numbers. No marketing fluff.<br className="hidden md:block" />
                This is what makes Freshozz the superior choice.
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
              <div className="inline-block px-10 py-5 bg-gradient-to-r from-copper/5 via-gold/5 to-copper/5 border border-copper/20 rounded-2xl">
                <p className="text-base text-copper/80 font-display leading-relaxed">
                  Every decision we made costs more.<br />
                  But creates better.<br />
                  <span className="text-copper font-semibold">That's the premium difference.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
