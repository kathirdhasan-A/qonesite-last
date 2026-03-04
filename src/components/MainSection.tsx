import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GoGift } from "react-icons/go";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

export default function MainSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home" className="flex back flex-col lg:justify-around items-center bg-black lg:h-full pt-5 px-2 lg:pt-15">
      {/* Navbar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={navVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full h-15 items-center justify-between lg:justify-around"
      >
        <div className="flex items-center justify-center gap-2">
          <img src="/appLogo.png" alt="qunt" className="lg:w-12 w-8 rounded " />
          <h1 className="font-bold text-[#5D3FD3] lg:text-2xl">
            Qone
          </h1>
        </div>

        <div className="w-[45%] hidden lg:flex justify-between text-lg transition text-[#A0A0A0]">
          {[
            { label: "About Us", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Solutions", href: "#solutions" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
            { label: "Contact", href: "#contact" },
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
          <button className="px-2 bg-[#5D3FD3] border border-transparent lg:px-3 lg:py-3 rounded block font-semibold hover:bg-iris/20 hover:border-iris">
            <span className="hidden lg:block">Apply for Pilot</span>
            <span className="lg:hidden text-sm p-2">Apply</span>
          </button>
          <RxHamburgerMenu
            className="block lg:hidden h-7 w-6 cursor-pointer"
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
           { label: "About Us", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Solutions", href: "#solutions" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
            { label: "Contact", href: "#contact" },
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

        <div className="flex justify-center mt-auto mb-6">
          <button
            className="bg-[#5D3FD3] px-4 py-2 rounded font-semibold text-white "
            onClick={() => setMenuOpen(false)}
          >
            Apply for Pilot
          </button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center h-[80%] gap-7 "
      >
        <motion.div
          variants={itemVariants}
          className=" w-[55%] text-[#A0A0A0] py-12"
        >
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="h-13 w-13 justify-center flex items-center">
              <img src="/appLogo.png" alt="User 5" className="w-12 rounded" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm lg:text-lg text-white font-semibold">
                Trusted by <span className="text-[#5D3FD3]">Developers</span>{" "}
                team worldwide
              </p>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <span className="text-teal font-bold hover:text-white mr-2">
                  Excellent
                </span>
                <div className="flex text-teal-600 hover:text-teal-300">
                  ★★★★★
                </div>
                <span className="ml-2 hover:text-white">4.8/5</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-[55%] font-semibold text-white text-2xl lg:text-7xl text-center flex justify-center"
        >
          <p>
            Your Data.{" "}
            <strong className="font-semibold text-[#5D3FD3]">
              Your AI. Your Rules.
            </strong>
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className=" lg:tracking-wider flex text-center py-4 my-3 justify-center w-[60%] items-center"
        >
          <p className="text-[#A0A0A0] ">
            Stop trading your IP for productivity. High-performance AI that processes your data entirely on your hardware of choice - no leaks, no provider training, no compromises.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-5">
          <button className="bg-[#5D3FD3] text-sm lg:h-12 p-2 lg:text-lg lg:px-4 lg:py-2 rounded font-semibold border border-transparent hover:bg-iris/20 hover:border-iris">
            Apply for Pilot
          </button>
         
        </motion.div>
      </motion.div>
    </div>
  );
}

