import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ScrollProgress from '@/components/ScrollProgress';
import SplashScreen from '@/components/SplashScreen';
import Layout from '@/components/Layout';

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
