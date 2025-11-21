import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Freshozz</title>
      </Head>

      <Layout>
        <section className="py-20 px-4 bg-bg-dark min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-warm mb-8">
              Terms of Service
            </h1>
            
            <div className="space-y-6 text-muted-warm">
              <p>Last updated: November 2024</p>
              
              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  2. Product Information
                </h2>
                <p>
                  We strive to provide accurate product information, but we do not warrant that 
                  product descriptions or other content is accurate, complete, reliable, or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  3. Intellectual Property
                </h2>
                <p>
                  All content on this site, including text, graphics, logos, and images, is the 
                  property of Freshozz and protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  4. Contact
                </h2>
                <p>
                  For questions about these Terms, contact us at harsh@freshozz.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
