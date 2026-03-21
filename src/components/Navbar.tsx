import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={navVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full h-15 pt-5 px-2 lg:pt-15 items-center justify-between lg:justify-around"
      >
        <div className="flex items-center gap-0.5 ml-2 lg:gap-1">
          <h1 className="text-sm lg:text-3xl font-lovelo1 bg-iris rounded w-5 lg:w-10 flex justify-center items-center pt-0.5 lg:pt-1 m-0">
            Q
          </h1>
          <h1 className="text-sm lg:text-3xl font-lovelo1 bg-iris rounded w-5 lg:w-10 flex justify-center items-center pt-0.5 lg:pt-1 m-0">
            O
          </h1>
          <h1 className="text-sm lg:text-3xl font-lovelo1 bg-iris rounded w-5 lg:w-10 flex justify-center items-center pt-0.5 lg:pt-1 m-0">
            n
          </h1>
          <h1 className="text-sm lg:text-3xl font-lovelo1 bg-iris rounded w-5 lg:w-10 flex justify-center items-center pt-0.5 lg:pt-1 m-0">
            e
          </h1>
        </div>

        <div className="w-[45%] hidden lg:flex justify-between text-lg transition text-[#A0A0A0]">
          {[
            { label: "Solutions", href: "#solutions" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
            { label: "Blogs", href: "https://quantrail-data.com/blog/" },
            { label: "About Us", href: "#about" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="hover:border-b hover:border-b-[#5D3FD3] border-b border-transparent hover:text-[#5D3FD3] transition duration-300 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link href={"#contact"}>
            <button className="px-3 py-1.5 bg-[#5D3FD3] border border-transparent lg:scale-[0.96] lg:hover:scale-[0.99]  group lg:px-6 lg:py-3 rounded-full cursor-pointer items-center justify-center gap-2 flex font-semibold hover:bg-iris/20 hover:border-iris">
              <span className="flex gap-1 ">
                <MdPhone className=" md:text-xl group-hover:hidden transition-all" />
                <MdPhoneInTalk className=" md:text-xl hidden group-hover:block transition-all duration-300" />
              </span>
              <span className="hidden lg:block">Contact us</span>
              <span className="lg:hidden text-sm">Contact</span>
            </button>
          </Link>
          <RxHamburgerMenu
            className="block lg:hidden h-8 w-7 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </motion.div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={menuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 back right-0 w-[70%] h-full text-[#A0A0A0] shadow-lg z-50 lg:hidden flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white font-bold">Menu</h2>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 py-6">
          {[
            { label: "Solutions", href: "#solutions" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
            { label: "Blogs", href: "https://quantrail-data.com/blog/" },
            { label: "About Us", href: "#about" },
          ].map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="hover:text-[#5D3FD3] transition duration-300 ease-in-out text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
