import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function How() {
  const steps = [
    {
      title: 'Sourcing',
      description: 'We source premium spices from trusted suppliers across India. Every ingredient is tested for purity and potency.',
    },
    {
      title: 'Formulation',
      description: 'Our proprietary masala blend is crafted through months of R&D, balancing heat, tang, and aroma perfectly.',
    },
    {
      title: 'Carbonation',
      description: 'Triple-filtered water undergoes precision carbonation to achieve the perfect fizz level that lasts.',
    },
    {
      title: 'Bottling',
      description: 'Each bottle is filled in a controlled environment, sealed for freshness, and quality-checked before distribution.',
    },
    {
      title: 'Quality Control',
      description: 'FSSAI certified processes ensure every batch meets our exacting standards. Zero compromise.',
    },
  ];

  return (
    <>
      <Head>
        <title>How It's Made | Freshozz</title>
        <meta name="description" content="Discover the craft behind every bottle of Freshozz Masala Cola. Sip the Freshness." />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="py-20 px-4 gradient-bg min-h-[50vh] flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold text-warm mb-6"
            >
              Crafted with <span className="text-gold">Precision</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-warm max-w-2xl mx-auto"
            >
              Every bottle of Freshozz is the result of meticulous research, 
              premium ingredients, and unwavering commitment to quality.
            </motion.p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-4 bg-bg-dark">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-center text-warm mb-16"
            >
              Our <span className="text-copper">5-Step Process</span>
            </motion.h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start gap-6 bg-soil/10 border border-copper/20 rounded-xl p-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gold/20 border-2 border-gold rounded-full flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-gold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-display font-bold text-copper mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-warm text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* R&D Section */}
        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-warm mb-8">
                Built on <span className="text-gold">Research & Development</span>
              </h2>
              <p className="text-lg text-muted-warm leading-relaxed mb-6">
                Freshozz wasn't created overnight. It took months of experimentation, 
                taste tests, and refinement. We worked with food scientists, beverage experts, 
                and most importantly — real people with real Indian palates.
              </p>
              <p className="text-lg text-warm">
                The result? A masala cola that honors tradition while setting new standards for quality.
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
