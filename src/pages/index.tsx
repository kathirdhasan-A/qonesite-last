import About from "@/components/about";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import Visual from "@/components/Visual";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";




export default function Home() {
  return (
    <motion.div  >
      <MainSection />
      <Visual />
      <About/>
      <Solutions/>
      <Features />
      <Pricing/>
      <Faq/>
      <Contact/>
      <Footer/>
      <Link href={"#home"} className="fixed bottom-10 right-10"><FaArrowUp/></Link>
    </motion.div>
  );
}
