import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
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

  return (
    <>
      <Head>
        <title>Premium Flavoured Soda | Clean Caffeine Mojito Masala - Freshozz</title>
        <meta name="description" content="Low-sugar mojito masala soda with clean caffeine. Triple-filtered fizz, micro-emulsion spice tech. Premium Indian fizzy drink worth ₹100+." />
        <meta name="keywords" content="mojito masala soda, clean caffeine drink india, low sugar soda, premium fizzy drink, flavoured soda india, party beverage" />
        
        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://freshozz.in/product" />
        <meta property="og:title" content="The Soda India Was Missing - Freshozz Product" />
        <meta property="og:description" content="Mojito energy × Masala soul × High-fizz texture. Not syrup. Not mocktail. A modern Indian flavour experience." />
        <meta property="og:image" content="https://freshozz.in/og-product.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://freshozz.in/product" />
        <meta property="twitter:title" content="The Soda India Was Missing - Freshozz" />
        <meta property="twitter:description" content="Premium Indian fizzy drink. Clean caffeine, low sugar, high masala." />
        <meta property="twitter:image" content="https://freshozz.in/og-product.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://freshozz.in/product" />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Freshozz Premium Mojito Masala Soda",
            "description": "India's first mojito-style masala soda with clean caffeine, low sugar, and micro-emulsion spice technology. Triple-filtered high-fizz premium beverage.",
            "brand": {
              "@type": "Brand",
              "name": "Freshozz"
            },
            "category": "Beverages > Soda > Flavoured Soda",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "price": "120",
              "priceCurrency": "INR",
              "url": "https://freshozz.in/product"
            }
          }`}
        </script>
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-32 px-4 bg-gradient-to-b from-black via-premium-black to-bg-dark">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-12"
            >
              <div>
                <h1 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                  The soda India<br className="hidden md:inline" /> was missing.
                </h1>
                <div className="w-16 h-[1px] bg-copper/40 mx-auto mb-8" />
                <p className="text-2xl md:text-3xl text-copper font-display font-light leading-tight">
                  Not inspiration.<br />
                  Necessity.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* The Gap We Stepped Into */}
        <section className="py-40 px-4 bg-gradient-to-b from-bg-dark to-near-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center">
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Category Creation
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  The Gap We Stepped Into
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto text-center">
                <p className="text-xl text-muted-warm leading-relaxed">
                  India had a choice:
                </p>
                
                <div className="space-y-4 text-lg text-warm/70">
                  <p>Sugary colas</p>
                  <p>Masala drinks without soul</p>
                  <p>Energy drinks that burn out the mind</p>
                </div>

                <div className="py-8">
                  <div className="w-12 h-[1px] bg-copper/40 mx-auto mb-8" />
                  <p className="text-xl text-copper/80 leading-relaxed">
                    What India didn't have was obvious:
                  </p>
                </div>

                <div className="space-y-3 text-2xl md:text-3xl font-display font-light text-copper leading-tight">
                  <p>A flavoured soda culture.</p>
                  <p>Fizz with taste.</p>
                  <p>Fizz with identity.</p>
                  <p>Fizz with intention.</p>
                </div>

                <div className="pt-8">
                  <p className="text-base text-warm/60 italic">
                    Freshozz exists because nobody built that lane.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The First of Its Kind */}
        <section className="py-40 px-4 bg-gradient-to-b from-near-black to-premium-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Innovation
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  The First of Its Kind
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-3xl md:text-4xl font-display font-light text-copper leading-tight">
                  Mojito energy × Masala soul × High-fizz texture<br />
                  In the form of a soda.
                </p>

                <div className="space-y-4 text-lg text-warm/70 leading-relaxed">
                  <p>Not syrup in sparkling water.</p>
                  <p>Not mocktail flavouring.</p>
                  <p>Not nostalgia in a bottle.</p>
                </div>

                <div className="pt-6">
                  <p className="text-xl text-muted-warm leading-relaxed">
                    A modern Indian flavour experience<br />
                    built on carbonation, spice structure and sensory balance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Taste That Thinks */}
        <section className="py-40 px-4 bg-gradient-to-b from-premium-black to-bg-dark">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Sensory Design
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Taste That Thinks
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-warm leading-relaxed">
                  Flavour isn't loud.<br />
                  Flavour is layered.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                  <div className="space-y-3">
                    <p className="text-2xl text-copper font-display">Bright lime</p>
                    <p className="text-sm text-warm/50 uppercase tracking-wider">top note</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-2xl text-copper font-display">Warm spice</p>
                    <p className="text-sm text-warm/50 uppercase tracking-wider">mid note</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-2xl text-copper font-display">Clean fizz</p>
                    <p className="text-sm text-warm/50 uppercase tracking-wider">finish</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-base text-warm/70 leading-relaxed">
                    A taste that doesn't shout.<br />
                    A taste that stays.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clean Caffeine */}
        <section className="py-40 px-4 bg-gradient-to-b from-bg-dark to-near-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Energy Redefined
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Clean Caffeine<br />
                  <span className="text-copper text-3xl md:text-4xl">(The Right Kind)</span>
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-2xl text-muted-warm leading-relaxed">
                  Energy drinks force you awake.<br />
                  Freshozz brings you alive.
                </p>

                <div className="space-y-4 text-lg text-warm/80 leading-relaxed">
                  <p>Caffeine without bitterness</p>
                  <p>Alertness without jitters</p>
                  <p>Focus without crash</p>
                </div>

                <div className="pt-6">
                  <p className="text-base text-copper/70 italic">
                    Because energy doesn't need to be violent.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Low-Sugar Intelligence */}
        <section className="py-40 px-4 bg-gradient-to-b from-near-black to-premium-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Smart Sweetness
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Low-Sugar by Intelligence,<br />
                  Not Compromise
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-warm leading-relaxed">
                  Sweetness doesn't have to dominate.<br />
                  It has to belong.
                </p>

                <div className="space-y-4 text-lg text-warm/80 leading-relaxed">
                  <p>Just enough sugar to support the palate</p>
                  <p>Zero-spike sweetness curve</p>
                  <p>No aftertaste masking</p>
                  <p>No heavy tongue-coat sensation</p>
                </div>

                <div className="pt-6">
                  <p className="text-2xl text-copper font-display font-light">
                    Light, refined, modern.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why This Category Matters */}
        <section className="py-40 px-4 bg-gradient-to-b from-premium-black to-bg-dark">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  The Answer
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Why This Category Matters
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-warm leading-relaxed">
                  People are done choosing between:
                </p>

                <div className="space-y-4 text-2xl text-warm/70 leading-relaxed">
                  <p>Taste or health</p>
                  <p>Soda or energy</p>
                  <p>Masala or mojito</p>
                </div>

                <div className="py-8">
                  <div className="w-12 h-[1px] bg-copper/40 mx-auto mb-8" />
                </div>

                <p className="text-xl text-copper leading-relaxed">
                  Freshozz is the answer to the question<br />
                  no brand bothered to ask:
                </p>

                <p className="text-3xl md:text-4xl font-display font-light text-warm leading-tight">
                  "Why can't a drink do all three?"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What This Says About You */}
        <section className="py-40 px-4 bg-gradient-to-b from-bg-dark to-near-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  Identity
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  What This Says About You
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl font-display font-light text-copper leading-tight">
                  You didn't settle for what already existed.<br />
                  So neither did we.
                </p>

                <div className="py-8">
                  <div className="w-12 h-[1px] bg-copper/40 mx-auto mb-8" />
                </div>

                <p className="text-xl text-muted-warm leading-relaxed">
                  Premium isn't price.<br />
                  Premium is preference.
                </p>

                <div className="pt-12">
                  <Link 
                    href="/#waitlist"
                    className="inline-block px-16 py-5 bg-copper text-warm font-display font-medium text-base tracking-[0.25em] uppercase hover:bg-copper/90 transition-all duration-500 hover:tracking-[0.3em]"
                  >
                    Taste the Threshold
                  </Link>
                </div>
              </div>
            </motion.div>
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
