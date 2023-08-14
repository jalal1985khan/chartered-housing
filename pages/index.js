
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Yoast from '../components/Head';
import Hero from '../components/Hero';
import Content from '../components/Home';
import Partners from '../components/Partners';
import Properties from '../components/HomeProperties';

export default function Home() {
  return (
   <>
   <Yoast pageTitle="Chartered Housing1: Top Real Estate Developer in Bangalore" />
   <Header/>
   <Yoast/>
   <Hero/>
   <Content/>
   <Properties/>
   <Partners/>
   <Footer/>
   </>
  )
}
