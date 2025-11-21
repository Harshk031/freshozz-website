import Head from 'next/head';
import Layout from '@/components/Layout';
import ProductShowcase from '@/components/ProductShowcase';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
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
        <title>Freshozz - Revolutionary Beverage Coming Soon | The Future of Refreshment</title>
        <meta name="description" content="Something extraordinary is brewing. Freshozz is set to revolutionize the beverage industry. Get ready to experience the future of refreshment. Launching Soon." />
        <meta property="og:title" content="Freshozz - The Next Big Thing in Beverages" />
        <meta property="og:description" content="Revolutionary beverage experience. Launching Soon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in" />
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
                  Launching Soon
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
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl text-copper mb-4 font-display font-light tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                The Modern Mojito with an Indian Soul
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-warm max-w-2xl mx-auto mb-12 font-body leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Premium fizz. Authentic masala. Copper-toned identity.
              </motion.p>
              
              <motion.p 
                className="text-lg sm:text-xl text-warm/70 max-w-3xl mx-auto mb-12 font-body leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Something extraordinary is brewing. A revolutionary drink that combines centuries-old traditions 
                with cutting-edge innovation. An all-rounder beverage experience unlike anything you've tasted before.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  href="/product"
                  className="inline-block px-12 py-4 bg-copper text-warm font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/90 transition-all duration-500 hover:tracking-[0.25em]"
                >
                  Taste the Threshold
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Minimal scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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

        {/* Brand Philosophy - Thresholds Concept */}
        <section className="py-40 px-4 bg-bg-dark relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase text-center">
                The Concept
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 text-center leading-tight tracking-tight">
                Thresholds
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-12" />
              <p className="text-lg md:text-xl text-muted-warm leading-relaxed text-center mb-8">
                The point where modern fizz meets authentic Indian masala. <br className="hidden md:block" />
                A new category between traditional jeera drinks and global functional beverages.
              </p>
              <p className="text-base text-muted-warm/70 leading-relaxed text-center max-w-2xl mx-auto">
                Not just a drink. A movement. Freshozz is set to redefine what a beverage can be — 
                combining tradition, innovation, and uncompromising quality.
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

        {/* Instagram CTA Section */}
        <section className="py-32 px-4 bg-near-black border-t border-copper/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs text-copper/60 mb-6 font-display tracking-[0.3em] uppercase">
              Follow Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
              Behind the Scenes
            </h2>
            <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
            <p className="text-lg text-muted-warm mb-12 leading-relaxed">
              Get exclusive sneak peeks, product teasers, and be part of the Freshozz story as we prepare to launch.
            </p>
            <a
              href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-copper text-warm font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/90 transition-all duration-500 hover:tracking-[0.25em]"
            >
              Follow @fresh_ozz19
            </a>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
