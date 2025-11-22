import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';

// Import client-only components
const SplashScreen = dynamic(() => import('@/components/SplashScreen'), {
  ssr: false,
});

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Organization Schema - Global SEO */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Freshozz",
            "alternateName": "Freshozz India",
            "url": "https://freshozz.in",
            "logo": "https://freshozz.in/logo.png",
            "description": "India's first premium mojito-style masala soda. Clean caffeine, low sugar, high fizz beverage brand.",
            "foundingDate": "2024",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/fresh_ozz19"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@freshozz.in"
            }
          }`}
        </script>
      </Head>
      <SplashScreen />
      <Layout>
        <ScrollProgress />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
