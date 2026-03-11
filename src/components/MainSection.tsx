import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";


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

const itemVariantsXaxis: Variants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 0.2,
    x: 50,
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


  return (
    <div
      id="home"
      className="flex back flex-col lg:justify-around items-center bg-black lg:h-full pt-5 px-2 lg:pt-15"
    >



      <div className="lg:flex lg:justify-between pt-10 lg:pt-20 lg:pl-20 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[75%] lg:flex justify-start items-center hidden pl-30"
        >
          <motion.img
            src="webani.png"
            alt="Animated"
            className=" opacity-5 w-[70%]"
            variants={itemVariantsXaxis}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col justify-center lg:items-start items-center text-center lg:text-left lg:gap-7 "
        >

          <motion.div
            variants={itemVariants}
            className="w-[55%] font-semibold text-white text-2xl lg:text-7xl flex justify-center"
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
            className=" lg:tracking-wider flex py-4 my-3 justify-center md:w-[60%] px-4 md:px-0 items-center"
          >
            <p className="text-[#A0A0A0]">
              Stop trading your IP for productivity. High-performance AI that
              processes your data entirely on your hardware of choice - no
              leaks, no provider training, no compromises.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-5 lg:w-[60%] pt-5 lg:pt-0 ">
            <Link href={"#pricing"}>
              <button className="bg-[#5D3FD3] group text-sm flex scale-[0.96] hover:scale-[0.99]  items-center lg:justify-around gap-2 lg:h-12 py-3 px-6 pr-5 lg:text-base lg:px-6 lg:pr-5 lg:py-2 cursor-pointer rounded-full font-semibold border border-transparent hover:bg-iris/20 hover:border-iris">
                <p>Apply for Pilot</p>
                <IoIosArrowForward className="group-hover:rotate-90 font-black text-lg transition-all "/>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
