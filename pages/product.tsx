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
      question: "Production Approach",
      problem: "How is your carbonation different?",
      answer: "Three-Stage Process",
      content: "Most brands: inject CO2, bottle, done. We run three filtration stages—create, filter, refine. Smaller bubbles. Smoother feel. Stays fizzy longer after opening."
    },
    {
      question: "Spice Suspension",
      problem: "Why doesn't masala sink as much?",
      answer: "Finer Grinding",
      content: "Traditional grinding creates large chunks that sink fast. We grind finer—particles stay suspended longer while keeping authentic flavour. Some settling is natural. But no heavy sediment like conventional masala sodas."
    },
    {
      question: "Sugar Content",
      problem: "How does lower sugar still taste balanced?",
      answer: "Spice Complexity",
      content: "18g sugar (40% less than typical) paired with ginger, cumin, fennel aromatics. Your taste buds register sweetness + spice layers. The complexity makes up for lower sugar. Most don't miss it."
    },
    {
      question: "Shelf Life Choice",
      problem: "Why not extend beyond 90 days?",
      answer: "Fresher Aromatics",
      content: "Six months requires sodium benzoate and potassium sorbate—safe, but they mute spice aromatics over time. At 90 days with minimal preservatives, spices stay sharp. Trade-off: shorter shelf life, better flavour."
    }
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Maximum Coverage */}
        <title>Premium Flavoured Soda | Clean Caffeine Mojito Masala | Low Sugar Fizzy Drink India - Freshozz</title>
        <meta name="title" content="Premium Mojito Masala Soda with Clean Caffeine | Low Sugar | Freshozz" />
        <meta name="description" content="Low-sugar mojito masala soda with clean caffeine. Triple-filtered fizz, micro-emulsion spice tech. Premium Indian fizzy drink worth ₹100+. First of its kind in India." />
        <meta name="keywords" content="mojito masala soda, clean caffeine drink india, low sugar soda, premium fizzy drink, flavoured soda india, party beverage, masala cola, ayurvedic soda, healthy fizzy drink, craft soda, artisan beverage, triple filtered soda, micro bubble carbonation, spice soda technology, premium indian beverage, celebration drink, mocktail mixer, non alcoholic party drink, gen z beverage, youth drink india, festive drink, premium soft drink, flavored sparkling water, masala fizz, ginger soda, cumin drink, black salt beverage" />
        <meta name="author" content="Freshozz India" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English, Hindi" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="product:price:amount" content="120" />
        <meta name="product:price:currency" content="INR" />
        <meta name="product:availability" content="preorder" />
        <meta name="product:condition" content="new" />
        <meta name="product:brand" content="Freshozz" />
        <meta name="product:category" content="Beverages > Soda > Flavoured Soda" />
        
        {/* Open Graph - Maximum Product Coverage */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://freshozz.in/product" />
        <meta property="og:site_name" content="Freshozz" />
        <meta property="og:title" content="The Soda India Was Missing - Freshozz Premium Mojito Masala" />
        <meta property="og:description" content="Mojito energy × Masala soul × High-fizz texture. Not syrup. Not mocktail. A modern Indian flavour experience. Clean caffeine, low sugar, triple-filtered." />
        <meta property="og:image" content="https://freshozz.in/og-product.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Freshozz Premium Mojito Masala Soda Bottle Clean Caffeine Low Sugar" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="product:price:amount" content="120" />
        <meta property="product:price:currency" content="INR" />
        <meta property="product:availability" content="preorder" />
        <meta property="product:condition" content="new" />
        <meta property="product:retailer_item_id" content="FRZZ-001" />
        <meta property="product:brand" content="Freshozz" />
        
        {/* Twitter Card - Maximum Product Coverage */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@freshozz" />
        <meta name="twitter:creator" content="@freshozz" />
        <meta name="twitter:url" content="https://freshozz.in/product" />
        <meta name="twitter:title" content="The Soda India Was Missing - Freshozz" />
        <meta name="twitter:description" content="Premium Indian fizzy drink. Mojito × Masala × Clean Caffeine. Low sugar, triple-filtered, ₹120." />
        <meta name="twitter:image" content="https://freshozz.in/og-product.jpg" />
        <meta name="twitter:image:alt" content="Freshozz Premium Mojito Masala Soda" />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content="₹120" />
        <meta name="twitter:label2" content="Availability" />
        <meta name="twitter:data2" content="Pre-Order" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://freshozz.in/product" />
        <link rel="alternate" hrefLang="en-IN" href="https://freshozz.in/product" />
        <link rel="alternate" hrefLang="hi-IN" href="https://freshozz.in/hi/product" />
        <link rel="alternate" hrefLang="x-default" href="https://freshozz.in/product" />
        
        {/* Mobile Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#B86B2C" />
        
        {/* Enhanced Product Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Freshozz Premium Mojito Masala Soda",
            "alternateName": ["Freshozz Masala Fizz", "Freshozz Clean Caffeine Soda"],
            "description": "India's first mojito-style masala soda with clean caffeine, low sugar, and micro-emulsion spice technology. Triple-filtered high-fizz premium beverage.",
            "image": "https://freshozz.in/product-image.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Freshozz",
              "logo": "https://freshozz.in/logo.png"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Freshozz India"
            },
            "category": "Beverages > Soda > Flavoured Soda",
            "offers": {
              "@type": "Offer",
              "url": "https://freshozz.in/product",
              "priceCurrency": "INR",
              "price": "120",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/PreOrder",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": {
                "@type": "Organization",
                "name": "Freshozz India"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Caffeine Content",
                "value": "Clean Caffeine"
              },
              {
                "@type": "PropertyValue",
                "name": "Sugar Content",
                "value": "Low Sugar (18g)"
              },
              {
                "@type": "PropertyValue",
                "name": "Carbonation",
                "value": "Triple-Filtered"
              },
              {
                "@type": "PropertyValue",
                "name": "Flavour Profile",
                "value": "Mojito Masala Fusion"
              }
            ]
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Product",
                "item": "https://freshozz.in/product"
              }
            ]
          }`}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Freshozz different from other sodas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freshozz is India's first premium mojito-style masala soda with clean caffeine, low sugar (18g), and triple-filtered micro-bubble carbonation technology. We use micro-emulsion spice processing at 12000 RPM for uniform masala distribution without sediment."
                }
              },
              {
                "@type": "Question",
                "name": "How much caffeine does Freshozz contain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freshozz contains clean caffeine without bitterness, providing alertness without jitters or crash. It's energy redefined for premium beverage consumers."
                }
              },
              {
                "@type": "Question",
                "name": "What is the price of Freshozz soda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freshozz premium mojito masala soda is priced at ₹120 per bottle, reflecting its premium ingredients, advanced processing technology, and category-first positioning."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I buy Freshozz in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freshozz is launching soon. Join our waitlist at freshozz.in to get exclusive early access and be notified when it becomes available in your city."
                }
              }
            ]
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
