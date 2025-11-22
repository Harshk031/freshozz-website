import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Contact Freshozz - Premium Soda Brand India | Get in Touch</title>
        <meta name="description" content="Connect with Freshozz. Business inquiries, partnerships, press. Premium beverage brand contact." />
        <meta name="keywords" content="contact freshozz, freshozz email, premium soda brand contact, beverage partnership india, freshozz business inquiry" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in/contact" />
        <meta property="og:title" content="Contact Freshozz - Premium Beverage Brand India" />
        <meta property="og:description" content="Business inquiries, partnerships, or just curious. Get in touch." />
        <meta property="og:image" content="https://freshozz.in/og-contact.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://freshozz.in/contact" />
        <meta name="twitter:title" content="Contact Freshozz" />
        <meta name="twitter:description" content="Connect with India's first premium flavoured soda brand." />
        <meta name="twitter:image" content="https://freshozz.in/og-contact.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://freshozz.in/contact" />
      </Head>

      <Layout>
        <section className="py-40 px-4 bg-gradient-to-b from-black via-premium-black to-bg-dark min-h-[80vh] flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <p className="text-xs text-copper/40 mb-8 font-display tracking-[0.3em] uppercase">
                Get in Touch
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                Let's connect
              </h1>
              <div className="w-16 h-[1px] bg-copper/40 mx-auto mb-10" />
              <p className="text-xl text-muted-warm">
                Business inquiries, partnerships, or just curious.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-soil/10 border border-copper/20 rounded-2xl p-10 hover:border-copper/40 transition-all duration-500"
              >
                <h2 className="text-2xl font-display font-semibold text-copper mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm text-copper/60 mb-2 font-display tracking-wider uppercase">Email</h3>
                    <a 
                      href="mailto:hello@freshozz.in" 
                      className="text-lg text-warm hover:text-copper transition-colors"
                    >
                      hello@freshozz.in
                    </a>
                  </div>
                  <div className="w-full h-[1px] bg-copper/20" />
                  <div>
                    <h3 className="text-sm text-copper/60 mb-2 font-display tracking-wider uppercase">Social</h3>
                    <a 
                      href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-warm hover:text-copper transition-colors"
                    >
                      @fresh_ozz19
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-soil/10 border border-copper/20 rounded-2xl p-10 hover:border-copper/40 transition-all duration-500"
              >
                <h2 className="text-2xl font-display font-semibold text-copper mb-8">
                  Quick Links
                </h2>
                <div className="space-y-4">
                  <Link 
                    href="/product" 
                    className="block text-lg text-muted-warm hover:text-copper transition-all duration-300 hover:translate-x-2"
                  >
                    → Product Details
                  </Link>
                  <Link 
                    href="/where-to-buy" 
                    className="block text-lg text-muted-warm hover:text-copper transition-all duration-300 hover:translate-x-2"
                  >
                    → Where to Buy
                  </Link>
                  <Link 
                    href="/about" 
                    className="block text-lg text-muted-warm hover:text-copper transition-all duration-300 hover:translate-x-2"
                  >
                    → Our Story
                  </Link>
                  <Link 
                    href="/how" 
                    className="block text-lg text-muted-warm hover:text-copper transition-all duration-300 hover:translate-x-2"
                  >
                    → The Process
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-20"
            >
              <p className="text-xs text-copper/30 tracking-[0.2em] uppercase">
                Taste the Threshold
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
