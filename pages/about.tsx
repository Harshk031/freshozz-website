import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Freshozz Masala Cola</title>
        <meta name="description" content="Discover the story behind Freshozz. Where tradition meets innovation. Sip the Freshness." />
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
              About <span className="text-gold">Freshozz</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-copper"
            >
              Sip the Freshness
            </motion.p>
          </div>
        </section>

        {/* The Story */}
        <section className="py-20 px-4 bg-bg-dark">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg leading-relaxed"
            >
              <p className="text-warm">
                <span className="text-gold font-display font-semibold text-2xl">Freshozz</span> was born from a simple 
                idea: what if India's favorite street-side masala cola was elevated to premium quality, without losing its soul?
              </p>
              
              <p className="text-muted-warm">
                We saw a gap in the market. Traditional masala drinks lacked consistency and quality. 
                Global sodas lacked authentic Indian flavor. We decided to bridge that gap.
              </p>
              
              <p className="text-warm">
                Every bottle of Freshozz is crafted with authentic masala spices, premium carbonation, 
                and natural ingredients. No artificial colors. No preservatives. Just pure, refreshing taste 
                that honors tradition while meeting modern standards.
              </p>

              <div className="border-l-4 border-gold pl-6 my-12">
                <p className="text-2xl font-display text-gold italic">
                  "Masala Cola, perfected.<br />
                  Sip the Freshness."
                </p>
              </div>

              <p className="text-muted-warm">
                Freshozz isn't just a beverage. It's a celebration of Indian flavors, reimagined for the modern palate. 
                It's for those who want authenticity without compromise, tradition with innovation.
              </p>

              <p className="text-warm">
                This is for the ones who appreciate quality. The ones who demand flavor. 
                The ones who choose Freshozz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-center text-warm mb-16"
            >
              What Drives <span className="text-gold">Us</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Authenticity',
                  description: 'Real masala. Real spices. No shortcuts. We source the best ingredients and respect the roots of Indian flavors.'
                },
                {
                  number: '02',
                  title: 'Quality',
                  description: 'Premium carbonation. Clean ingredients. FSSAI certified. We meet international standards while celebrating Indian taste.'
                },
                {
                  number: '03',
                  title: 'Freshness',
                  description: 'Every bottle is crafted fresh with natural ingredients. We believe in delivering the freshest experience possible.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-soil/20 border border-copper/30 rounded-xl p-8"
                >
                  <div className="text-6xl font-display font-bold text-gold/30 mb-4">
                    {value.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-copper mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-warm">
                    {value.description}
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
              Ready for the Freshest Experience?
            </h2>
            <p className="text-lg text-muted-warm mb-8">
              Discover what happens when tradition meets premium quality.
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
