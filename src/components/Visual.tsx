import YouTube, { YouTubeProps } from "react-youtube";
import { IoCloudOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { MdExitToApp } from "react-icons/md";
import { PiCreditCardLight } from "react-icons/pi";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
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

export default function Visual() {
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="md:h-screen pt-20 md:pt-0 back px-2 flex flex-col justify-center items-center" id="samples">
      {/* <div className="bg-green-50 h-20 w-full"></div> */}
      <div className="h-55 w-[90%] md:h-[70%] md:w-[70%] p-2 border-3 rounded-lg border-[#5d3fd326] shadow-[0_14px_50px_#5d3fd326] flex justify-center items-center cursor-pointer">
        <YouTube videoId="ZjAqacIC_3c" className="w-full h-full " opts={opts} />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="hidden justify-evenly md:flex md:w-[60%] mt-5"
      >
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <PiCreditCardLight className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] " />
          <p>Secure Purchase</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <MdExitToApp className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] " />
          <p>Instant Access</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <GoShieldLock className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] " />
          <p>Quality</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <IoCloudOutline className="h-7 w-7 text-[#5D3FD3]  shadow-[#5D3FD3] " />
          <p>Constant Updates</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
