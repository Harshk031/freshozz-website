import Head from 'next/head';
import Layout from '@/components/Layout';
import ProductShowcase from '@/components/ProductShowcase';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

// Import client-only components
const Particles = dynamic(() => import('@/components/Particles'), {
  ssr: false,
});

const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'), {
  ssr: false,
});

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const whyTabs = [
    {
      question: "Why Shorter Shelf Life?",
      problem: "You last 90 days, not 6 months like others",
      answer: "We Chose Quality Over Longevity",
      content: "Extended shelf life requires heavy preservatives. While effective for distribution, they gradually diminish authentic spice character. We use minimal natural preservation, accepting a shorter lifespan to maintain true flavor integrity. It's a trade-off: longer sitting on shelves, or better in your glass."
    },
    {
      question: "Settling vs Clarity",
      problem: "How do you keep masala suspended?",
      answer: "Better Processing, Not Magic",
      content: "Spices naturally want to settle—it's physics. We reduce this through finer particle processing and specific carbonation pressure. Some minimal settling may still occur over time, but it's significantly less than conventional methods. A gentle shake before opening ensures even distribution."
    },
    {
      question: "Digestive Benefits?",
      problem: "Can soda actually help digestion?",
      answer: "Traditional Ingredients, Modern Form",
      content: "Ginger, cumin, and black salt have been used in Indian households for digestive comfort for generations. We're not claiming medical benefits—we're simply incorporating these time-tested ingredients into a fizzy format. Whether it helps is subjective; what we promise is authentic ingredient use."
    },
    {
      question: "Market Positioning",
      problem: "What makes this category different?",
      answer: "Between Mass Market and Craft",
      content: "Most Indian sodas are either mass-produced colas or budget masala drinks. There's been a gap for something premium yet culturally rooted—quality ingredients, thoughtful processing, refined taste. Not luxury for luxury's sake, but intentional choices that justify the price."
    }
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Maximum Coverage */}
        <title>Freshozz - Premium Flavoured Soda India | Mojito Masala Fizz | Clean Caffeine Low Sugar Drink</title>
        <meta name="title" content="Freshozz - Premium Flavoured Soda India | Mojito Masala Fizz" />
        <meta name="description" content="India's first premium mojito-style masala soda. Clean caffeine, low sugar, high fizz. A new category of flavoured drinks. Join the waitlist for exclusive access." />
        <meta name="keywords" content="premium soda india, mojito masala soda, flavoured soda drink, low sugar fizzy drink, clean caffeine beverage, party drink india, masala cola, indian fizzy drink, premium beverage brand, ayurvedic soda, healthy soda alternative, craft soda india, artisan beverages, gen z drinks, youth beverage, premium mixer, mocktail base, party beverage, celebration drink, festive drink india, new age beverage, modern indian drink" />
        <meta name="author" content="Freshozz India" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English, Hindi" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="audience" content="all" />
        <meta name="rating" content="general" />
        <meta name="subject" content="Premium Beverages, Flavoured Soda, Masala Drinks" />
        <meta name="classification" content="Beverages, Food & Drink, Consumer Goods" />
        
        {/* Open Graph - Maximum Coverage */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in" />
        <meta property="og:site_name" content="Freshozz" />
        <meta property="og:title" content="Freshozz - Premium Soda India Never Had | Mojito Masala Fizz" />
        <meta property="og:description" content="Mojito energy × Masala soul × High fizz. India's first flavoured soda culture. Clean caffeine, low sugar, premium quality. Coming soon." />
        <meta property="og:image" content="https://freshozz.in/og-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Freshozz Premium Mojito Masala Soda India" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        
        {/* Twitter Card - Maximum Coverage */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@freshozz" />
        <meta name="twitter:creator" content="@freshozz" />
        <meta name="twitter:url" content="https://freshozz.in" />
        <meta name="twitter:title" content="Freshozz - Premium Soda India Never Had" />
        <meta name="twitter:description" content="Mojito energy × Masala soul × High fizz. India's first premium flavoured soda culture. Coming soon." />
        <meta name="twitter:image" content="https://freshozz.in/og-home.jpg" />
        <meta name="twitter:image:alt" content="Freshozz Premium Mojito Masala Soda" />
        <meta name="twitter:label1" content="Category" />
        <meta name="twitter:data1" content="Premium Beverages" />
        <meta name="twitter:label2" content="Launch" />
        <meta name="twitter:data2" content="Coming Soon" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://freshozz.in" />
        <link rel="alternate" hrefLang="en-IN" href="https://freshozz.in" />
        <link rel="alternate" hrefLang="hi-IN" href="https://freshozz.in/hi" />
        <link rel="alternate" hrefLang="x-default" href="https://freshozz.in" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Mobile App Integration */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Freshozz" />
        <meta name="application-name" content="Freshozz" />
        <meta name="theme-color" content="#B86B2C" />
        <meta name="msapplication-TileColor" content="#B86B2C" />
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Freshozz",
            "alternateName": ["Freshozz India", "Freshozz Soda", "Freshozz Beverage"],
            "url": "https://freshozz.in",
            "description": "India's first premium mojito-style masala soda with clean caffeine and low sugar",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://freshozz.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "inLanguage": ["en-IN", "hi-IN"]
          }`}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://freshozz.in"
              }
            ]
          }`}
        </script>
      </Head>

      <Layout>
        <Particles />
        
        {/* Hero Section - Ultra Premium Cinematic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Cinematic background */}
          <motion.div 
            style={{ y: scrollYProgress }}
            className="absolute inset-0 bg-gradient-to-b from-premium-black via-near-black to-bg-dark"
          />
          
          {/* Subtle copper glow overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-copper/5 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mb-8"
              >
                <span className="px-8 py-3 bg-copper/5 border border-copper/20 text-copper font-display text-xs tracking-[0.3em] uppercase">
                  A New Category
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[0.9]"
                style={{ 
                  scale: heroScale,
                  opacity: heroOpacity 
                }}
              >
                <span className="block text-warm tracking-tight">
                  FRESHOZZ
                </span>
                <span className="block text-copper text-4xl md:text-5xl mt-6 tracking-wide font-light">
                  India's First Premium Flavoured Soda
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mx-auto mb-12"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl text-copper mb-8 font-display font-light leading-tight">
                  Mojito energy. Masala soul. Clean caffeine.
                </p>
                
                <div className="space-y-6 text-muted-warm">
                  <p className="text-lg sm:text-xl font-body leading-relaxed">
                    You've tasted everything. Except this.
                  </p>
                  
                  <div className="w-16 h-[1px] bg-copper/30 mx-auto my-8" />
                  
                  <p className="text-base sm:text-lg text-warm/70 font-body leading-relaxed">
                    Low-sugar fizzy drink with identity.<br className="hidden md:block" />
                    The party beverage India was missing.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  href="#waitlist"
                  className="inline-block px-12 py-4 border border-copper/40 text-copper font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/10 hover:border-copper transition-all duration-500 hover:tracking-[0.25em]"
                >
                  Join the Waitlist
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll indicator - fades on scroll */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            style={{ opacity: heroOpacity }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-copper/40 to-transparent" />
          </motion.div>
        </section>

        {/* Countdown Section - Ultra Minimal */}
        <section className="py-32 px-4 bg-near-black relative overflow-hidden border-y border-copper/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-copper/60 mb-8 font-display tracking-[0.3em] uppercase">
                Launching Soon
              </p>
              <CountdownTimer />
            </motion.div>
          </div>
        </section>

        {/* The Market Gap */}
        <section className="py-40 px-4 bg-bg-dark relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center">
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  The Problem
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
                  Why do all drinks feel the same?
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-12" />
              </div>

              <div className="space-y-10 max-w-2xl mx-auto">
                <p className="text-lg text-muted-warm leading-relaxed">
                  Colas repeat themselves.<br />
                  Masala sodas lost their soul to sugar.<br />
                  Energy drinks hurt more than they help.
                </p>

                <p className="text-base text-warm/60 leading-relaxed">
                  Somewhere between tradition and innovation,<br className="hidden md:block" />
                  the beverage world forgot to evolve.
                </p>

                <p className="text-sm text-copper/50 leading-relaxed italic">
                  Real flavour has a soul.<br />
                  A soul never stays still.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Freshozz Mindset */}
        <section className="py-32 px-4 bg-gradient-to-b from-bg-dark to-near-black relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  The Vision
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
                  We saw the gap
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-12" />
              </div>

              <div className="space-y-8 max-w-2xl mx-auto">
                <p className="text-lg text-muted-warm leading-relaxed">
                  Between heritage and hype.<br />
                  Between spice and sophistication.<br />
                  Between ritual and rebellion.
                </p>

                <p className="text-base text-warm/60 leading-relaxed">
                  A new lane needed to exist.
                </p>

                <p className="text-sm text-copper/70 leading-relaxed italic">
                  Not to compete.<br />
                  To replace.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY Freshozz - USP & Trust Section */}
        <section className="py-40 px-4 bg-gradient-to-b from-near-black via-premium-black to-bg-dark relative overflow-hidden">
          {/* Premium background elements */}
          <div className="absolute inset-0 bg-gradient-radial from-copper/5 via-transparent to-transparent opacity-40" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Foundation
              </p>
              <h2 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                WHY Freshozz
              </h2>
              <div className="w-20 h-[1px] bg-copper/40 mx-auto mb-10" />
              <p className="text-xl text-muted-warm max-w-3xl mx-auto leading-relaxed">
                Questions you've asked. Truths the industry hides.<br className="hidden md:block" />
                This is why we exist.
              </p>
            </motion.div>

            {/* Interactive Premium Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {whyTabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative p-8 rounded-2xl border-2 transition-all duration-700 text-left group ${
                      activeTab === index
                        ? 'bg-gradient-to-br from-copper/15 to-gold/10 border-copper shadow-[0_0_40px_rgba(184,107,44,0.4)] backdrop-blur-xl scale-105'
                        : 'bg-soil/10 border-copper/15 hover:border-copper/30 backdrop-blur-sm'
                    }`}
                  >
                    {/* Arrow indicator for active tab */}
                    {activeTab === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: [0, -3, 0] }}
                        transition={{ 
                          opacity: { duration: 0.3 },
                          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-copper drop-shadow-[0_0_8px_rgba(184,107,44,0.6)]" />
                      </motion.div>
                    )}

                    <p className="text-xs text-copper/50 mb-3 font-display tracking-[0.2em] uppercase">
                      {tab.problem}
                    </p>
                    <h3 className={`text-lg md:text-xl font-display font-semibold transition-all duration-500 ${
                      activeTab === index ? 'text-copper' : 'text-warm/70 group-hover:text-warm'
                    }`}>
                      {tab.question}
                    </h3>

                    {/* Animated glow effect for active tab */}
                    {activeTab === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-copper/10 to-gold/10 rounded-2xl pointer-events-none"
                      />
                    )}

                    {/* Hover line effect */}
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-copper to-gold transition-all duration-500 ${
                      activeTab === index ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content - Premium Glass Card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-copper/20 via-transparent to-transparent blur-3xl scale-150" />
              
              <div className="relative bg-gradient-to-br from-soil/30 via-copper/10 to-soil/20 backdrop-blur-2xl border-2 border-copper/30 rounded-3xl p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl md:text-5xl font-display font-light text-copper leading-tight">
                      {whyTabs[activeTab].answer}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-copper/50" />
                      <div className="w-2 h-2 rounded-full bg-copper/50" />
                      <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-copper/50" />
                    </div>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-warm/90 leading-relaxed font-body"
                  >
                    {whyTabs[activeTab].content}
                  </motion.p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-copper/40 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-copper/40 rounded-br-3xl" />
              </div>
            </motion.div>

            {/* Bottom Trust Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-20"
            >
              <div className="inline-block px-8 py-4 bg-copper/5 border border-copper/20 rounded-full">
                <p className="text-sm text-copper/80 font-display italic tracking-wide">
                  This is why Freshozz isn't just another drink.<br className="hidden md:inline" />
                  <span className="text-copper font-semibold"> It's a category that needed to exist.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Tribe Call */}
        <section id="waitlist" className="py-40 px-4 bg-near-black border-t border-copper/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-12"
          >
            <div>
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Threshold
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
                This is not for everyone
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
            </div>

            <div className="space-y-8">
              <p className="text-lg text-muted-warm leading-relaxed">
                If you crave difference.<br />
                If taste matters more than trends.<br />
                If you know there's something missing.
              </p>

              <p className="text-base text-warm/60 leading-relaxed">
                You're exactly who we made this for.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <a
                href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-copper text-warm font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/90 transition-all duration-500 hover:tracking-[0.25em]"
              >
                Join the Waitlist
              </a>
              <p className="text-xs text-copper/30 tracking-[0.2em] uppercase">
                First access. No spam.
              </p>
            </div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
