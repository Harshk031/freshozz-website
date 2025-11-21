import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ScrollProgress from '@/components/ScrollProgress';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';

// Import SplashScreen only on client side
const SplashScreen = dynamic(() => import('@/components/SplashScreen'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashScreen />
      <Layout>
        <ScrollProgress />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
