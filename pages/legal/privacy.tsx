import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Freshozz</title>
      </Head>

      <Layout>
        <section className="py-20 px-4 bg-bg-dark min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-warm mb-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-6 text-muted-warm">
              <p>Last updated: November 2024</p>
              
              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information you provide directly to us, including name, email address, 
                  phone number, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to process your inquiries, send you marketing 
                  communications (with your consent), and improve our products and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  3. Data Security
                </h2>
                <p>
                  We take reasonable measures to protect your personal information from unauthorized 
                  access, use, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-copper mb-4">
                  4. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at harsh@freshozz.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
