import About from "@/components/about";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import Visual from "@/components/Visual";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import localFont from 'next/font/local';
import SEO from "@/components/SEO";
import { siteMeta } from "@/meta/siteMeta";

const myCustomFont = localFont({
  src: [
    {
      path: '../../public/fonts/Lovelo-Black.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lovelo-Black.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--lovelo-black',
  display: 'swap',
});

export default function Home() {
  return (
   <>
   <SEO meta={siteMeta}/>
<div className={`sticky top-0 back z-1000 pb-3 lg:pb-10 ${myCustomFont.variable} `}>
  <Navbar/>
</div>
    <div >
      <MainSection />
      <Visual />
      <Solutions/>
      <Features />
      <Pricing/>
      <Faq/>
      <Contact/>
      <About/>
      <Footer/>
      <Link href={"#home"} className="fixed bottom-10 right-10"><FaArrowUp/></Link>
    </div>
   </>
  );
}
