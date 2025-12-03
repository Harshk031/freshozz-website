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

const CinematicHero = dynamic(() => import('@/components/CinematicHero'), {
  ssr: false,
});

const ProductHero = dynamic(() => import('@/components/ProductHero'), {
  ssr: false,
});

const ImpactStats = dynamic(() => import('@/components/ImpactStats'), {
  ssr: false,
});

const HorizontalFeatures = dynamic(() => import('@/components/HorizontalFeatures'), {
  ssr: false,
});

const BrandStory = dynamic(() => import('@/components/BrandStory'), {
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
        {/* CINEMATIC HERO - Ultra Premium */}
        <CinematicHero />

        {/* PRODUCT HERO - Visual Impact */}
        <ProductHero />

        {/* IMPACT STATS - Animated Numbers */}
        <ImpactStats />

        {/* HORIZONTAL FEATURES - Premium Details */}
        <HorizontalFeatures />

        {/* BRAND STORY - Heritage */}
        <BrandStory />

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
