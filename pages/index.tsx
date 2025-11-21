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
        
        {/* Hero Section - Premium Launch Vibe */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with parallax effect */}
          <motion.div 
            style={{ y: scrollYProgress }}
            className="absolute inset-0 bg-gradient-to-br from-bg-dark via-soil/20 to-bg-dark"
          />
          
          {/* Overlay for premium feel */}
          <div className="absolute inset-0 bg-black/40" />
          
          <Particles />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Coming Soon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-2 bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/50 rounded-full text-gold font-display text-sm tracking-widest backdrop-blur-sm">
                  LAUNCHING SOON
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-9xl font-display font-bold mb-6"
                style={{ 
                  scale: heroScale,
                  opacity: heroOpacity 
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-copper to-gold">
                  FRESHOZZ
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl sm:text-3xl md:text-5xl text-warm mb-6 font-display font-light tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                The Future of Refreshment
              </motion.p>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gold/90 max-w-3xl mx-auto mb-8 font-display italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Redefining the Beverage Industry
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
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link 
                  href="/about"
                  className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-copper text-bg-dark font-display font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
                >
                  Be the First to Know
                </Link>
                <Link 
                  href="/product"
                  className="inline-block px-10 py-5 border-2 border-gold/50 text-gold font-display font-semibold text-lg rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 hover:scale-105"
                >
                  Sneak Peek
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-12 border-2 border-gold/50 rounded-full flex justify-center backdrop-blur-sm">
              <motion.div 
                className="w-2 h-4 bg-gradient-to-b from-gold to-copper rounded-full mt-2"
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Countdown Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-bg-dark via-soil/10 to-bg-dark relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-warm mb-4">
                The Wait is Almost Over
              </h2>
              <p className="text-lg text-warm/60 mb-12 font-body">
                Something revolutionary is coming to the beverage industry
              </p>
              <CountdownTimer />
            </motion.div>
          </div>
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
              <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm tracking-widest mb-6">
                INDUSTRY GAME-CHANGER
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-copper to-gold mb-8">
                The All-Rounder Beverage
              </h2>
              <p className="text-xl md:text-2xl text-muted-warm leading-relaxed max-w-3xl mx-auto">
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
