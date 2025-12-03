import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Our Story - Premium Beverage Brand India | Freshozz</title>
        <meta name="description" content="Why Freshozz exists. The gap between tradition and innovation. India's first premium flavoured soda culture. Category creation story." />
        <meta name="keywords" content="premium beverage brand india, freshozz story, indian soda company, flavoured drink startup, premium soda brand, category creation" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in/about" />
        <meta property="og:title" content="The Brand India Was Missing - Freshozz Story" />
        <meta property="og:description" content="Between heritage and hype. Between spice and sophistication. A new lane needed to exist." />
        <meta property="og:image" content="https://freshozz.in/og-about.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://freshozz.in/about" />
        <meta name="twitter:title" content="The Brand India Was Missing - Freshozz" />
        <meta name="twitter:description" content="Premium soda brand creating India's first flavoured fizz culture." />
        <meta name="twitter:image" content="https://freshozz.in/og-about.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://freshozz.in/about" />
      </Head>

      <Layout>
        {/* Hero - Premium Minimal */}
        <section className="py-40 px-4 bg-gradient-to-b from-black via-premium-black to-bg-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs text-copper/40 mb-8 font-display tracking-[0.3em] uppercase">
                Origin Story
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                The category<br className="hidden md:inline" /> that needed to exist
              </h1>
              <div className="w-16 h-[1px] bg-copper/40 mx-auto mb-10" />
              <p className="text-xl md:text-2xl text-copper font-display font-light leading-tight">
                Not to compete.<br />
                To replace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Why */}
        <section className="py-40 px-4 bg-gradient-to-b from-bg-cream to-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-16 text-center"
            >
              <div>
                <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                  The Gap
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  What was missing
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-warm leading-relaxed">
                  Between heritage and hype.<br />
                  Between spice and sophistication.<br />
                  Between ritual and rebellion.
                </p>

                <div className="py-8">
                  <div className="w-12 h-[1px] bg-copper/40 mx-auto mb-8" />
                </div>

                <p className="text-base text-warm/70 leading-relaxed">
                  A new lane needed to exist.<br />
                  Premium quality. Cultural roots. Modern identity.
                </p>

                <div className="border-l-2 border-copper/30 pl-8 my-12 text-left">
                  <p className="text-2xl font-display font-light text-copper italic leading-tight">
                    "We didn't create Freshozz<br className="hidden md:inline" /> to join the beverage market.<br />
                    We created it to shift it."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-40 px-4 bg-gradient-to-b from-cream to-muddy/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                Principles
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-8 leading-tight">
                What we believe
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Intentional Choices',
                  description: "Every decision costs more. Every decision creates better. We don't optimize for scale. We optimize for taste."
                },
                {
                  number: '02',
                  title: 'Cultural Respect',
                  description: 'Indian flavours deserve premium treatment. Not nostalgia. Not shortcuts. Real ingredients interpreted with precision.'
                },
                {
                  number: '03',
                  title: 'Category Creation',
                  description: "The market had colas and masala drinks. It didn't have both. We're not filling a niche. We're creating one."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-soil/10 border border-copper/20 rounded-2xl p-10 hover:border-copper/40 transition-all duration-500"
                >
                  <div className="text-5xl font-display font-bold text-copper/20 mb-6">
                    {value.number}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-copper mb-6">
                    {value.title}
                  </h3>
                  <p className="text-muted-warm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="py-40 px-4 bg-gradient-to-b from-muddy/20 to-bg-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-12"
          >
            <div>
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Outcome
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
                What you're about to taste
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
            </div>

            <p className="text-xl text-muted-warm leading-relaxed">
              A premium flavoured soda<br className="hidden md:inline" /> that didn't exist before.
            </p>

            <p className="text-base text-warm/70 leading-relaxed">
              Not better than the competition.<br />
              Different from the category.
            </p>

            <div className="pt-12">
              <Link 
                href="/product"
                className="inline-block px-12 py-4 border border-copper/40 text-copper font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/10 hover:border-copper transition-all duration-500 hover:tracking-[0.25em]"
              >
                Explore the Experience
              </Link>
            </div>

            <p className="text-xs text-copper/30 tracking-[0.2em] uppercase pt-8">
              Taste the Threshold
            </p>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
