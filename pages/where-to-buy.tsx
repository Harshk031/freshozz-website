import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhereToBuy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement proper form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Where to Buy Freshozz | Premium Soda Locations India - Coming Soon</title>
        <meta name="description" content="Freshozz launches soon. Join the waitlist for exclusive first access. Premium flavoured soda coming to India." />
        <meta name="keywords" content="where to buy freshozz, freshozz locations, buy premium soda india, freshozz launch, freshozz waitlist, freshozz stockists" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in/where-to-buy" />
        <meta property="og:title" content="Where to Buy Freshozz - Launching Soon" />
        <meta property="og:description" content="Join the waitlist. Be first to experience India's premium flavoured soda culture." />
        <meta property="og:image" content="https://freshozz.in/og-where.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://freshozz.in/where-to-buy" />
        <meta name="twitter:title" content="Where to Buy Freshozz" />
        <meta name="twitter:description" content="Launching soon. Join the waitlist for exclusive access." />
        <meta name="twitter:image" content="https://freshozz.in/og-where.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://freshozz.in/where-to-buy" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-40 px-4 bg-gradient-to-b from-black via-premium-black to-bg-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs text-copper/40 mb-8 font-display tracking-[0.3em] uppercase">
                Coming Soon
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                Launching soon
              </h1>
              <div className="w-16 h-[1px] bg-copper/40 mx-auto mb-10" />
              <p className="text-xl text-muted-warm">
                First access for those who join early.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Waitlist */}
        <section className="py-40 px-4 bg-gradient-to-b from-bg-dark to-near-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-16"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  The Waitlist
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Join for first access
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
                <p className="text-lg text-muted-warm max-w-2xl mx-auto">
                  Be among the first to experience<br className="hidden md:inline" /> what India was missing.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-soil/10 border border-copper/20 rounded-2xl p-12"
              >
                <a
                  href="https://www.instagram.com/fresh_ozz19?igsh=NXpzcmd1MmY0Ynd4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 bg-copper text-warm font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/90 transition-all duration-500 hover:tracking-[0.25em]"
                >
                  Join the Waitlist
                </a>
                <p className="text-xs text-copper/30 tracking-[0.2em] uppercase mt-6">
                  First access. No spam.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Wholesale Inquiry */}
        <section className="py-40 px-4 bg-gradient-to-b from-near-black to-premium-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                Partnerships
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-8 leading-tight">
                Stock Freshozz
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
              <p className="text-lg text-muted-warm">
                Interested in stocking Freshozz?<br className="hidden md:inline" />
                Reach out for wholesale and distribution.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-soil/10 border border-copper/20 rounded-2xl p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm placeholder:text-warm/40 focus:outline-none focus:border-copper transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm placeholder:text-warm/40 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm placeholder:text-warm/40 focus:outline-none focus:border-copper transition-colors"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm placeholder:text-warm/40 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm focus:outline-none focus:border-copper transition-colors"
              >
                <option value="">Business Type *</option>
                <option value="retail">Retail Store</option>
                <option value="cafe">Cafe/Restaurant</option>
                <option value="distributor">Distributor</option>
                <option value="online">Online Platform</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your business and requirements..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-lg bg-bg-dark border border-copper/30 text-warm placeholder:text-warm/40 focus:outline-none focus:border-copper transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-copper hover:bg-copper/90 text-warm font-display font-medium text-sm tracking-[0.2em] uppercase rounded-lg transition-all duration-500 hover:tracking-[0.25em]"
              >
                Submit Inquiry
              </button>
            </motion.form>

            <div className="text-center mt-16">
              <p className="text-xs text-copper/30 tracking-[0.2em] uppercase">
                Taste the Threshold
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
