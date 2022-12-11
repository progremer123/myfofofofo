import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/home/hero';

export default function Home() {
  return (
    <Layout>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="http://sanriokorea.co.kr/favicon.png.ico"
        />
        <title>welcome to irang website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
