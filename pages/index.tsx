import Head from 'next/head';
import Layout from '@/components/Layout';
import Particles from '@/components/Particles';
import ProductShowcase from '@/components/ProductShowcase';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <Head>
        <title>Freshozz | Masala Cola - Sip the Freshness</title>
        <meta name="description" content="High fizz. Clean taste. Crafted with fire, spice & soul. Freshozz Masala Cola - Sip the Freshness." />
        <meta property="og:title" content="Freshozz | Masala Cola - Sip the Freshness" />
        <meta property="og:description" content="High fizz. Clean taste. Crafted with fire, spice & soul." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Layout>
        <Particles />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <div className="w-full h-full bg-gradient-to-b from-bg-dark via-soil/20 to-copper/10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-warm mb-6"
            >
              Something Bold
              <br />
              <span className="text-gold">Is Brewing</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-warm mb-4"
            >
              Masala. Cola. Fizz.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-warm mb-8 max-w-2xl mx-auto"
            >
              A flavour India knows — but in a way it's never tasted before.
              <br />
              High fizz. Clean taste. Crafted with fire, spice & soul.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/product"
                className="px-8 py-4 bg-copper hover:bg-copper/80 text-warm font-display font-semibold rounded-lg transition-all transform hover:scale-105 shadow-soft-gold"
              >
                Discover the Product
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-gold hover:bg-gold/10 text-gold font-display font-semibold rounded-lg transition-all"
              >
                About Freshozz
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gold rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* Brand Statement */}
        <section className="py-32 px-4 bg-bg-dark relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-copper to-gold mb-8">
                Masala Cola, Elevated
              </h2>
              <p className="text-xl md:text-2xl text-muted-warm leading-relaxed">
                Where tradition meets premium quality. Every sip is an experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Teaser Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-bg-dark to-soil/10 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-warm mb-4">
                The Perfect <span className="text-copper">Balance</span>
              </h2>
              <p className="text-lg text-muted-warm max-w-2xl mx-auto">
                Where traditional masala meets modern fizz. Every sip is an experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  title: 'High Fizz',
                  description: 'Perfectly carbonated for that satisfying kick',
                  icon: '✨'
                },
                {
                  title: 'Authentic Masala',
                  description: 'Traditional spices, modern execution',
                  icon: '🌶️'
                },
                {
                  title: 'Clean Taste',
                  description: 'No artificial flavours, just pure quality',
                  icon: '🍃'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-soil/20 backdrop-blur-sm border border-copper/30 rounded-xl p-8 text-center shadow-soft-gold cursor-pointer relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-display font-semibold text-gold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-warm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Call to Action */}
        <section className="py-20 px-4 gradient-bg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm mb-6">
              Stay Curious. Stay Thirsty.
            </h2>
            <p className="text-lg text-muted-warm mb-8">
              Be the first to experience Masala Cola like never before.
            </p>
            <Link
              href="/where-to-buy"
              className="inline-block px-10 py-5 bg-gold hover:bg-gold/90 text-bg-dark font-display font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-soft-gold"
            >
              Find Near You
            </Link>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
