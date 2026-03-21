import { motion, Variants } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <div className="bg-iris/50">
      <motion.footer
        className=" border-t border-gray-700 text-gray-400 py-10 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex items-center flex-col gap-5  md:flex-col justify-evenly"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="logo" className=" w-8 md:w-10" />
              <span className="text-lg md:text-xl font-bold text-white/90">
                Quantrail Data
              </span>
            </div>
            <p className="text-sm text-gray-300/90 text-center">
                     AI Without Exfiltration. Stop the leak. Deploy private intelligence on your own infrastructure.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col text-sm md:text-base items-center md:items-start"
            variants={itemVariants}
          >

            <div className="flex flex-row md:flex-row gap-4">
              <a
                href="https://x.com/quantrail_data"
                className="hover:text-white border-b  group border-transparent hover:border-white transition-all ease-in text-gray-300/90 flex md:justify-center md:items-center gap-1"
              >
                <FaTwitter className="text-white/90 " /> Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/quantrail-data/"
                className="hover:text-white border-b  group border-transparent hover:border-white transition-all ease-in text-gray-300/90 flex md:justify-center md:items-center gap-1"
              >
                <FaLinkedinIn className="text-white/90" />
                LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div className="text-sm text-gray-300/90 md:text-base">
            <p >
              © {new Date().getFullYear()} Quantrail<span>&trade;</span> Data.
              All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
