import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar  from '../components/Navbar';
import Hero from '../components/HeroSection'
import About from '@/components/About';
import Work from '@/components/Work';
import Experiance from '@/components/Expreiance';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero /> 
    <About /> 
    <Work />
    <Experiance />
    <Testimonials />
    <Awards />
    <Footer />
   
   </>
  )
}
