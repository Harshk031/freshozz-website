import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Freshozz</title>
        <meta name="description" content="Get in touch with the Freshozz team. Sip the Freshness." />
      </Head>

      <Layout>
        <section className="py-20 px-4 gradient-bg min-h-[80vh] flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-warm mb-6">
                Let's <span className="text-gold">Connect</span>
              </h1>
              <p className="text-xl text-muted-warm">
                Have questions? Want to collaborate? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-soil/20 border border-copper/30 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-bold text-copper mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gold font-semibold mb-2">Email</h3>
                    <a href="mailto:harsh@freshozz.com" className="text-muted-warm hover:text-warm transition-colors">
                      harsh@freshozz.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-2">Phone</h3>
                    <p className="text-muted-warm">+91-[phone]</p>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-2">Business</h3>
                    <p className="text-muted-warm">Freshozz</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-soil/20 border border-copper/30 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-display font-bold text-copper mb-6">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <a href="/product" className="block text-muted-warm hover:text-gold transition-colors">
                    → Product Details
                  </a>
                  <a href="/where-to-buy" className="block text-muted-warm hover:text-gold transition-colors">
                    → Where to Buy
                  </a>
                  <a href="/about" className="block text-muted-warm hover:text-gold transition-colors">
                    → Our Story
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
