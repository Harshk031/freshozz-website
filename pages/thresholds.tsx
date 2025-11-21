import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Thresholds() {
  return (
    <>
      <Head>
        <title>Thresholds | What We Stand For</title>
        <meta name="description" content="Crossing thresholds between tradition and innovation. Discover what makes Thresholds different." />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4 gradient-bg min-h-[60vh] flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-warm mb-8"
            >
              What Are <span className="text-gold">Thresholds</span>?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-warm"
            >
              The space between what was and what could be.
            </motion.p>
          </div>
        </section>

        {/* The Concept */}
        <section className="py-20 px-4 bg-bg-dark">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg leading-relaxed"
            >
              <p className="text-warm">
                Every culture has its <span className="text-gold font-semibold">thresholds</span> — 
                moments where tradition meets transformation. Where the familiar becomes extraordinary.
              </p>
              
              <p className="text-muted-warm">
                India knows masala. India knows cola. But no one has truly crossed that threshold — 
                until now.
              </p>
              
              <p className="text-warm">
                <span className="text-copper font-display font-semibold">Thresholds</span> isn't just a drink. 
                It's a statement. A bridge between generations. Between street corners and premium experiences. 
                Between the spice you grew up with and the fizz you crave.
              </p>

              <div className="border-l-4 border-gold pl-6 my-12">
                <p className="text-2xl font-display text-gold italic">
                  "We're not reimagining masala cola.<br />
                  We're perfecting what it should have always been."
                </p>
              </div>

              <p className="text-muted-warm">
                Most brands play it safe. They stay within boundaries. But <span className="text-copper font-semibold">Thresholds</span> exists 
                precisely at that edge — where Indian authenticity meets global standards. Where tradition gets the respect it deserves, 
                wrapped in quality so clean, so refined, that it demands attention.
              </p>

              <p className="text-warm">
                This is for the ones who refuse to settle. The ones who want their roots, but elevated. 
                The ones who cross thresholds every day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Pillars */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-center text-warm mb-16"
            >
              Our <span className="text-gold">Three Pillars</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Authenticity',
                  description: 'Real masala. Real spices. No shortcuts. We source the best, respect the roots, and deliver true flavor.'
                },
                {
                  number: '02',
                  title: 'Quality',
                  description: 'Premium carbonation. Clean ingredients. FSSAI certified. We meet international standards while celebrating Indian taste.'
                },
                {
                  number: '03',
                  title: 'Innovation',
                  description: 'Traditional flavors, modern execution. Every bottle is R&D perfected, tested, and crafted for the discerning palate.'
                }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-soil/20 border border-copper/30 rounded-xl p-8"
                >
                  <div className="text-6xl font-display font-bold text-gold/30 mb-4">
                    {pillar.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-copper mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-warm">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-bg-dark">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display font-bold text-warm mb-6">
              Ready to Cross the Threshold?
            </h2>
            <p className="text-lg text-muted-warm mb-8">
              Experience what happens when tradition meets perfection.
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
