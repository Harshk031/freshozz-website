import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function How() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>The Process - Premium Craftsmanship | Freshozz</title>
        <meta name="description" content="Behind Freshozz. Choices over shortcuts. Quality over scale. The premium difference explained." />
        <meta name="keywords" content="premium beverage process, craft soda making, quality carbonation, indian soda production, premium drink manufacturing" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freshozz.in/how" />
        <meta property="og:title" content="How Premium Happens - Freshozz Process" />
        <meta property="og:description" content="Not a factory tour. The philosophy behind every choice that makes Freshozz different." />
        <meta property="og:image" content="https://freshozz.in/og-how.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://freshozz.in/how" />
        <meta name="twitter:title" content="How Premium Happens - Freshozz" />
        <meta name="twitter:description" content="Every decision costs more. Every decision creates better." />
        <meta name="twitter:image" content="https://freshozz.in/og-how.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://freshozz.in/how" />
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
                The Method
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-light text-warm mb-8 leading-tight tracking-tight">
                How premium<br className="hidden md:inline" /> actually happens
              </h1>
              <div className="w-16 h-[1px] bg-copper/40 mx-auto mb-10" />
              <p className="text-xl md:text-2xl text-copper font-display font-light leading-tight">
                Choices over shortcuts.<br />
                Quality over scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
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
                  The Approach
                </p>
                <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-12 leading-tight">
                  Not what we do.<br />
                  Why we do it.
                </h2>
                <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-warm leading-relaxed">
                  Mass production optimizes for cost.<br />
                  We optimize for experience.
                </p>

                <div className="py-8">
                  <div className="w-12 h-[1px] bg-copper/40 mx-auto mb-8" />
                </div>

                <p className="text-base text-warm/70 leading-relaxed">
                  Every decision we make costs more.<br />
                  Every decision we make creates better.
                </p>

                <div className="border-l-2 border-copper/30 pl-8 my-12 text-left">
                  <p className="text-2xl font-display font-light text-copper italic leading-tight">
                    "Premium isn't about revealing secrets.<br className="hidden md:inline" />
                    It's about making choices<br className="hidden md:inline" /> others won't."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Differences */}
        <section className="py-40 px-4 bg-gradient-to-b from-cream to-muddy/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Premium Difference
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-light text-warm mb-8 leading-tight">
                Where we diverge
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  aspect: 'Time',
                  standard: 'Fast to market',
                  ours: 'Worth the wait'
                },
                {
                  aspect: 'Scale',
                  standard: 'Volume first',
                  ours: 'Precision first'
                },
                {
                  aspect: 'Ingredients',
                  standard: 'Cost-effective',
                  ours: 'Experience-effective'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="bg-soil/10 border border-copper/20 rounded-2xl p-10 text-center hover:border-copper/40 transition-all duration-500"
                >
                  <p className="text-xs text-copper/50 mb-6 font-display tracking-[0.3em] uppercase">
                    {item.aspect}
                  </p>
                  <div className="space-y-8">
                    <div>
                      <p className="text-sm text-warm/40 mb-2">Standard</p>
                      <p className="text-lg text-warm/60">{item.standard}</p>
                    </div>
                    <div className="w-12 h-[1px] bg-copper/30 mx-auto" />
                    <div>
                      <p className="text-sm text-copper/60 mb-2">Freshozz</p>
                      <p className="text-xl text-copper font-display">{item.ours}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What This Means */}
        <section className="py-40 px-4 bg-gradient-to-b from-muddy/20 to-bg-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-12"
          >
            <div>
              <p className="text-xs text-copper/40 mb-6 font-display tracking-[0.3em] uppercase">
                The Result
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-light text-warm mb-8 leading-tight">
                What you actually get
              </h2>
              <div className="w-16 h-[1px] bg-copper/30 mx-auto mb-10" />
            </div>

            <p className="text-xl text-muted-warm leading-relaxed">
              A drink made with intention.<br />
              Not just efficiency.
            </p>

            <p className="text-base text-warm/70 leading-relaxed">
              Premium doesn't mean expensive.<br />
              It means deliberate.
            </p>

            <div className="pt-12">
              <Link 
                href="/product"
                className="inline-block px-12 py-4 border border-copper/40 text-copper font-display font-medium text-sm tracking-[0.2em] uppercase hover:bg-copper/10 hover:border-copper transition-all duration-500 hover:tracking-[0.25em]"
              >
                See What's Different
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
