import { Variants, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { BsCloudPlus } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

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
    <div
      className="back transition duration-300   justify-evenly flex flex-col"
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
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center"
        >
          Stop Exporting Your IP.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-xl"
        >
          The Pilot Program is now open. Deploy the private intelligence layer
          that keeps your data inside your network and out of third-party
          training sets.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <button className="bg-[#5D3FD3] px-4 py-2 sm:px-6 border border-transparent hover:border-iris cursor-pointer hover:bg-iris/20 sm:py-3 rounded font-semibold text-white justify-center flex items-center gap-2">
            <span className="md:hidden  ">Get</span>
            <span className="hidden md:block ">Apply for Pilot</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col py-10 gap-3"
      >
        <motion.div className="w-full flex flex-col justify-center items-center py-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
            Product Features
          </h2>
          <p className="p-4 text-center  text-gray-400">
            Tools that allow users to measure performance, track data, and make
            informed decisions.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
<<<<<<< HEAD
          className="flex flex-col gap-3 md:gap-5"
        >
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-3">
            <div className="bg-[#5D3FD3]  group flex flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">
=======
          className="flex flex-col justify-center items-center gap-3 md:gap-5 md:px-13"
        >
          <div className="flex flex-col md:flex-row md:w-[70%] justify-center items-center gap-3">
            <div className="bg-[#5D3FD3]  group flex flex-col justify-between w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
>>>>>>> ca1f02d (content updated)
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">Local Reasoning</h2>
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Run advanced reasoning models locally. Get high-tier
                intelligence without sending a single byte to an external AI
                provider.
              </p>
            </div>
<<<<<<< HEAD
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">

              <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
              <h2 className="md:font-bold md:text-2xl  ">Converse with Data</h2>
=======
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">Private Indexing</h2>
>>>>>>> ca1f02d (content updated)
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Transform fragmented PDFs, docs, and database into a secure,
                searchable map that lives behind your firewall.
              </p>
            </div>
<<<<<<< HEAD
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
            <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">
              <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
              <h2 className="md:font-bold md:text-2xl  ">
                Intelligence Unlocked
              </h2>
=======
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">Neural Search</h2>
>>>>>>> ca1f02d (content updated)
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Ask complex questions in plain English and get precise answers
                cited directly from your internal records.
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row w-full justify-center items-center gap-3">
            <div className="bg-[#5D3FD3]  group flex flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">
=======
          <div className="flex flex-col md:flex-row md:w-[70%] justify-center items-center gap-3">
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
>>>>>>> ca1f02d (content updated)
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">
                  Comprehensive Auditting
                </h2>
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Maintain a full forensic trail of every query and response.
                Monitor how intelligence is used within your network for total
                oversight.
              </p>
            </div>
<<<<<<< HEAD
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">

              <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
              <h2 className="md:font-bold md:text-2xl  ">Converse with Data</h2>
=======
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">
                  Fine-Grained Access
                </h2>
>>>>>>> ca1f02d (content updated)
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Control exactly who can <span>talk</span> to which dataset.
                Manage granular permissions to ensure sentitive data stays
                restricted to the right users.
              </p>
            </div>
<<<<<<< HEAD
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-60 md:w-[19%] gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
            <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between pr-10">
              <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
              <h2 className="md:font-bold md:text-2xl  ">
                Intelligence Unlocked
              </h2>
=======
            <div className="bg-[#5D3FD3]  group flex  flex-col justify-around w-[75%] md:h-75  gap-5  p-4 rounded-lg border border-transparent hover:bg-[#5D3FD3]/10 hover:scale-102  hover:border hover:border-[#5D3FD3] transition duration-300">
              <div className="flex items-center md:flex-col md:items-start md:gap-5 w-full justify-between ">
                <LuSquareArrowOutUpRight className="text-5xl border  group-hover:bg-[#5D3FD3] group-hover:border-[#5D3FD3] transition duration-300 p-3 rounded-full" />
                <h2 className="md:font-bold md:text-2xl font-semibold  ">
                  Provider-Agnostic Servers
                </h2>
>>>>>>> ca1f02d (content updated)
              </div>
              <p className="text-sm md:text-lg  text-gray-300">
                Deploy on any dedicated server environment, whether on-premise
                or via your prefered private cloud provider. We provide the
                intelligence layer; your choose where the hardware lives.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
