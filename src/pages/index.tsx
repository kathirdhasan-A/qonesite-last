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




export default function Home() {
  return (
   <>
<div className="sticky top-0 back z-1000 pb-3 lg:pb-10">
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
