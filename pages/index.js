import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/HeroSection';
import About from '@/components/About';
import Work from '@/components/Work';
import Experiance from '@/components/Expreiance';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rotshidzwa Chester Mavhungu – Creative Developer</title>
        <meta
          name="description"
          content="Rotshidzwa Chester Mavhungu is a full stack developer and software engineer based in South Africa."
        />
        <meta property="og:title" content="Rotshidzwa Chester Mavhungu – Creative Developer" />
        <meta
          property="og:description"
          content="Explore projects, experience highlights, and ways to connect with Rotshidzwa Chester Mavhungu."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experiance />
      <Testimonials />
      <Awards />
      <Footer />
    </>
  );
}
