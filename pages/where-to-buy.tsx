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
    // Form submission logic would go here
    alert('Thank you! We will contact you soon.');
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
        <title>Where to Buy | Freshozz</title>
        <meta name="description" content="Find Freshozz Masala Cola near you or inquire about wholesale partnerships. Sip the Freshness." />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold text-warm mb-6"
            >
              Find <span className="text-gold">Freshozz</span> Near You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-warm"
            >
              Available soon at select retailers. Be among the first to experience it.
            </motion.p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 px-4 bg-bg-dark">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-warm mb-6">
                Launching Soon
              </h2>
              <p className="text-lg text-muted-warm max-w-2xl mx-auto">
                We're partnering with premium retailers, cafes, and modern trade outlets across India. 
                Check back soon for locations near you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-soil/20 border border-copper/30 rounded-2xl p-12 text-center"
            >
              <h3 className="text-2xl font-display font-semibold text-gold mb-4">
                Want to be notified when we launch?
              </h3>
              <p className="text-muted-warm mb-6">
                Drop your email and we'll let you know as soon as Freshozz hits stores in your area.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gold hover:bg-gold/90 text-bg-dark font-display font-semibold rounded-lg transition-all"
                >
                  Notify Me
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Wholesale Inquiry */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-warm mb-6">
                Wholesale & <span className="text-copper">Partnership</span> Inquiries
              </h2>
              <p className="text-lg text-muted-warm">
                Interested in stocking Freshozz at your store, cafe, or distribution network? 
                Let's talk.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-soil/10 border border-copper/30 rounded-2xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
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
                  className="px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
                />
              </div>

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold"
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
                className="w-full px-6 py-3 rounded-lg bg-bg-dark border border-copper/40 text-warm focus:outline-none focus:border-gold resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-gold hover:bg-gold/90 text-bg-dark font-display font-bold text-lg rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Submit Inquiry
              </button>
            </motion.form>
          </div>
        </section>
      </Layout>
    </>
  );
}
