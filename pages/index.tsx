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
        <title>Freshozz - A New Category</title>
        <meta name="description" content="India has drinks. It doesn't have a vibe. Soon." />
        <meta property="og:title" content="Freshozz - Coming Soon" />
        <meta property="og:description" content="You've tasted everything. Except this." />
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
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl mx-auto mb-12"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl text-copper mb-8 font-display font-light leading-tight">
                  You've tasted everything.
                </p>
                
                <div className="space-y-6 text-muted-warm">
                  <p className="text-lg sm:text-xl font-body leading-relaxed">
                    Except this.
                  </p>
                  
                  <div className="w-16 h-[1px] bg-copper/30 mx-auto my-8" />
                  
                  <p className="text-base sm:text-lg text-warm/70 font-body leading-relaxed">
                    India has drinks.<br className="hidden md:block" />
                    It doesn't have a vibe.
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
