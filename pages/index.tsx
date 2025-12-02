import Head from 'next/head';
import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Import client-only components
const Particles = dynamic(() => import('@/components/Particles'), {
  ssr: false,
});

const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'), {
  ssr: false,
});

export default function Home() {
  const heroRef = useRef(null);

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Maximum Coverage */}
        <title>Freshozz - Premium Flavoured Soda India | Mojito Masala Fizz | zero sugar Low Sugar Drink</title>
        <meta name="title" content="Freshozz - Premium Flavoured Soda India | Mojito Masala Fizz" />
        <meta name="description" content="India's first premium mojito-style masala soda. zero sugar, low sugar, high fizz. A new category of flavoured drinks. Join the waitlist for exclusive access." />
        <meta name="keywords" content="premium soda india, mojito masala soda, flavoured soda drink, low sugar fizzy drink, zero sugar beverage, party drink india, masala cola, indian fizzy drink, premium beverage brand, ayurvedic soda, healthy soda alternative, craft soda india, artisan beverages, gen z drinks, youth beverage, premium mixer, mocktail base, party beverage, celebration drink, festive drink india, new age beverage, modern indian drink" />
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
        <meta property="og:description" content="Mojito energy × Masala soul × High fizz. India's first flavoured soda culture. zero sugar, low sugar, premium quality. Coming soon." />
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
            "description": "India's first premium mojito-style masala soda with zero sugar and low sugar",
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
        {/* Floating Gradient Orbs - Premium Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-radial from-copper/10 via-copper/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-radial from-earth/10 via-muddy/5 to-transparent rounded-full blur-3xl"
          />
        </div>
        
        {/* HERO - First Date Impact */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-cream via-cream to-muddy/20" />
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            {/* Staggered Text Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Brand Name - Character by character reveal */}
              <div className="overflow-hidden mb-6">
                <motion.h1 
                  className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold text-warm tracking-tighter leading-none"
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  FRESHOZZ
                </motion.h1>
              </div>

              {/* Tagline - Smooth fade */}
              <motion.p 
                className="text-xl md:text-3xl text-copper font-display font-light tracking-wide mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              >
                Mojito × Masala × Zero Sugar
              </motion.p>

              {/* Minimal Description */}
              <motion.p 
                className="text-base md:text-lg text-muted-warm max-w-md mx-auto mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                India's first premium flavoured soda
              </motion.p>

              {/* CTA Button with magnetic hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link href="#waitlist">
                  <motion.span 
                    className="inline-block px-10 py-4 bg-earth text-bg-cream font-display text-sm tracking-[0.2em] uppercase cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#9C7B5C" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    Join Waitlist
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-copper/30 rounded-full flex justify-center pt-2"
            >
              <motion.div 
                className="w-1 h-2 bg-copper/50 rounded-full"
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* PRODUCT SPECS - Clean & Minimal */}
        <section className="py-32 px-4 bg-cream relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-4">
                What's Inside
              </h2>
              <div className="w-12 h-[1px] bg-copper/40 mx-auto" />
            </motion.div>

            {/* Product Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { value: "0%", label: "Calories" },
                { value: "0%", label: "Preservatives" },
                { value: "0%", label: "Colours" },
                { value: "₹35", label: "Per Bottle" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center group"
                >
                  <motion.p 
                    className="text-4xl md:text-6xl font-display font-light text-copper mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-muted-warm tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FLAVOUR NOTES - Sensory */}
        <section className="py-32 px-4 bg-muddy/10 relative overflow-hidden">
          {/* Floating accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-copper/5 rounded-full"
          />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <p className="text-xs text-copper/50 tracking-[0.3em] uppercase mb-8">Flavour Profile</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {["Lime", "Spice", "Fizz"].map((note, i) => (
                  <motion.div
                    key={note}
                    initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 30 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                    className="text-center"
                  >
                    <motion.p 
                      className="text-5xl md:text-7xl font-display font-light text-warm"
                      whileHover={{ color: "#9C7B5C", scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {note}
                    </motion.p>
                    <p className="text-[10px] text-copper/40 tracking-[0.3em] uppercase mt-2">
                      {i === 0 ? "Top" : i === 1 ? "Heart" : "Finish"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* COUNTDOWN - Minimal */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-xs text-copper/50 tracking-[0.3em] uppercase mb-8">Launching In</p>
              <CountdownTimer />
            </motion.div>
          </div>
        </section>

        {/* CTA - Final Push */}
        <section id="waitlist" className="py-40 px-4 bg-gradient-to-b from-cream to-muddy/20 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-radial from-copper/5 via-transparent to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-center relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-6">
              Be First
            </h2>
            <p className="text-lg text-muted-warm mb-12">
              Early access. No spam. Just fizz.
            </p>
            
            <motion.a
              href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-earth text-bg-cream font-display text-sm tracking-[0.25em] uppercase"
              whileHover={{ scale: 1.03, backgroundColor: "#9C7B5C" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Join Waitlist →
            </motion.a>
            
            <motion.p 
              className="text-copper/40 text-xs tracking-[0.2em] uppercase mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Taste the Threshold
            </motion.p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
