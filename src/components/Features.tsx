import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { PiClipboardTextBold } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi";
import { FaServer } from "react-icons/fa";
import SEO from "./SEO";
import { featuresMeta } from "@/meta/featuresMeta";

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

export default function Features() {
  return (
<>
<SEO meta={featuresMeta}/>

    <div
      className="back transition duration-300  justify-evenly flex flex-col"
      id="features"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex  px-2 flex-col items-center  py-10 gap-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center"
        >
          Stop Exporting Your IP.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base lg:text-lg text-gray-400 text-center max-w-xl"
        >
          The Pilot Program is now open. Deploy the private intelligence layer
          that keeps your data inside your network and out of third-party
          training sets.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
         <Link href={'#pricing'} >
          <button className="bg-[#5D3FD3] px-4 py-2 scale-[0.96] hover:scale-[0.99]  sm:px-6 border border-transparent hover:border-iris cursor-pointer hover:bg-iris/20 sm:py-3 rounded font-semibold text-white justify-center flex items-center gap-2">
            <span className="lg:hidden  ">Apply</span>
            <span className="hidden lg:block ">Apply for Pilot</span>
          </button>
         </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-fulL flex flex-col lg:justify-center lg:items-center py-10 gap-3"
      >
        <motion.div className="W-full flex flex-col justify-center items-center py-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center">
            Product Features
          </h2>
          <p className="p-4 text-center  text-gray-400">
            Tools that allow users to measure performance, track data, and make
            informed decisions.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:w-[75%] justify-center items-center gap-3 lg:gap-5 lg:px-13"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3">
            {[
              {
                title: "Local Reasoning",
                icon:FaDatabase,
                desc: "Run advanced reasoning models locally. Get high-tier intelligence without sending a single byte to an external AI provider.",
              },
              {
                title: "Private Indexing",
                icon:FaLock,
                desc: "Transform fragmented PDFs, docs, and database into a secure, searchable map that lives behind your firewall.",
              },
              {
                title: "Neural Search",
                icon:IoMdSearch,
                desc: "Ask complex questions in plain English and get precise answers cited directly from your internal records.",
              },
              {
                title: "Comprehensive Auditing",
                icon:PiClipboardTextBold,
                desc: "Maintain a full forensic trail of every query and response. Monitor how intelligence is used within your network for total oversight.",
              },
              {
                title: "Fine-Grained Access",
                icon:HiOutlineKey,
                desc: "Control exactly who can talk to which dataset. Manage granular permissions to ensure sensitive data stays restricted to the right users.",
              },
              {
                title: "Provider-Agnostic Servers",
                icon:FaServer,
                desc: "Deploy on any dedicated server environment, whether on-premise or via your preferred private cloud provider.",
              },
            ].map((feature, index) => {
        const Icon = feature.icon || FaDatabase; 

        return (
          <div
            key={index}
            className="bg-[#5D3FD3] group flex flex-col justify-between w-full max-w-[75%] lg:max-w-full lg:h-90 gap-5 p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102 hover:border-[#5D3FD3] transition duration-300"
          >
            <div className="flex items-center lg:flex-col lg:items-start lg:gap-5 w-full justify-between">
          
              <Icon className="text-5xl border group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
              
              <h2 className="lg:font-bold lg:text-2xl font-semibold">
                {feature.title}
              </h2>
            </div>
            <p className="text-sm lg:text-lg text-gray-300">
              {feature.desc}
            </p>
          </div>
        );
      })}
    </div>
        </motion.div>
      </motion.div>
    </div>
</>
  );
}



