import About from "@/components/about";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import Visual from "@/components/Visual";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import SEO from "@/components/SEO";
import { siteMeta } from "@/meta/siteMeta";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <SEO meta={siteMeta} />
      <div >
        <MainSection />
        <Visual />
        <Solutions />
        <Features />
        <Pricing />
        <Faq />
        <Contact />
        <About />
        <Footer />
        <Link href={"#home"} className="fixed bottom-10 right-10">
          <FaArrowUp />
        </Link>
      </div>
      <Toaster position="top-center" />
    </>
  );
}
