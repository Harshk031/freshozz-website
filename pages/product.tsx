import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Product() {
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
        {/* HERO - Minimal Impact */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-b from-bg-cream via-cream to-muddy/20 relative overflow-hidden">
          {/* Floating orb */}
          <motion.div
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-copper/10 to-transparent rounded-full blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-display font-light text-warm mb-6 tracking-tight"
              initial={{ y: 60 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              The Product
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-copper font-display font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mojito × Masala × Clean Caffeine
            </motion.p>
          </motion.div>
        </section>

        {/* SPECS GRID - Key Numbers */}
        <section className="py-24 px-4 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.p 
              className="text-xs text-copper/50 tracking-[0.3em] uppercase text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Specifications
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {[
                { value: "250", unit: "ml", label: "Volume" },
                { value: "40%", unit: "", label: "Less Sugar" },
                { value: "90", unit: "days", label: "Fresh" },
                { value: "₹120", unit: "", label: "Price" }
              ].map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-5xl md:text-7xl font-display font-light text-warm"
                    whileHover={{ scale: 1.05, color: "#9C7B5C" }}
                    transition={{ duration: 0.3 }}
                  >
                    {spec.value}
                    <span className="text-2xl text-copper/60">{spec.unit}</span>
                  </motion.div>
                  <p className="text-xs text-muted-warm tracking-[0.2em] uppercase mt-2">{spec.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FLAVOUR PROFILE - Sensory */}
        <section className="py-32 px-4 bg-muddy/10 relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-copper/5 rounded-full"
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p 
              className="text-xs text-copper/50 tracking-[0.3em] uppercase mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Flavour Notes
            </motion.p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {[
                { note: "Lime", layer: "Top" },
                { note: "Spice", layer: "Heart" },
                { note: "Fizz", layer: "Finish" }
              ].map((item, i) => (
                <motion.div
                  key={item.note}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <motion.p 
                    className="text-6xl md:text-8xl font-display font-light text-warm"
                    whileHover={{ color: "#9C7B5C", scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.note}
                  </motion.p>
                  <p className="text-[10px] text-copper/40 tracking-[0.3em] uppercase mt-1">{item.layer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT MAKES IT DIFFERENT - 3 Points */}
        <section className="py-32 px-4 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.p 
              className="text-xs text-copper/50 tracking-[0.3em] uppercase text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Difference
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Clean Caffeine", desc: "Alertness without jitters" },
                { title: "Low Sugar", desc: "Taste without compromise" },
                { title: "Real Spices", desc: "Flavour without artificial" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="text-center p-8 bg-muddy/10 rounded-2xl border border-copper/10 hover:border-copper/30 transition-all duration-500"
                >
                  <h3 className="text-2xl font-display font-light text-copper mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-warm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 bg-gradient-to-b from-cream to-muddy/20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-warm mb-8">
              Ready?
            </h2>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/#waitlist"
                className="inline-block px-12 py-5 bg-earth text-bg-cream font-display text-sm tracking-[0.25em] uppercase hover:bg-copper transition-colors duration-300"
              >
                Join Waitlist →
              </Link>
            </motion.div>
            
            <p className="text-copper/40 text-xs tracking-[0.2em] uppercase mt-12">
              Taste the Threshold
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
