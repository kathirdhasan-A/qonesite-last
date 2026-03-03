import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence } from "framer-motion";

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


const faqData = [
  {
    question: "Do you have access to our data?",
    answer:
      "No. The software runs entirely on your servers. We do not host your data, we do not see your queries, and we have no access to your environment. Your intelligence layer is as isolated as your hardware.",
  },
  {
    question: "What hardware do I need for the pilot?",
    answer:
      "The software is optimized for dedicated Linux servers or private cloud instances with NVIDIA GPU support. We will provide a specific hardware compatibility list once your application is approved.",
  },
  {
    question: "Does my data leave my network?",
    answer:
      "No. While your network remains connected to the internet, our software ensures that your proprietary data and queries are never sent to third-party AI providers. All processing stays within your perimeter.",
  },
  {
    question: "How is this different from a ChatGPT Enterprise account?",
    answer:
      "ChatGPT Enterprise is a black box running on third-party servers. Our solution is a private engine running on your infrastructure. You maintain full custody of the logs, the access controls, and the privacy.",
  },
  {
    question: "What happens after the 30-day free pilot?",
    answer:
      "You can choose to off-board the software, extend the pilot for a deeper integration, or transition to a permanent enterprise license. Any data indexed during the pilot remains on your hardware.",
  },
  {
    question: "Is Unlimited Data really unlimited?",
    answer:
      "The software does not impose artificial caps. Your only limit is the storage and processing power of the hardware you provide.",
  },
  {
    question: "Which AI models do you support?",
    answer:
      "The software does not impose artificial caps. Your only limit is the storage and processing power of the hardware you provide.",
  },
  {
    question: "How long does the initial setup take?",
    answer:
      "The implementation process typically takes a few days. This is not a plug-and-play consumer app; it is an enterprise-grade deployment. We perform a rigorous environment audit and calibration to ensure the engine is perfectly optimized for your hardware. At a minimum, we require GPU-enabled VMs with SSH access to begin the configuration.",
  },
  {
    question: "Can we integrate this with our existing tools?",
    answer:
      "Yes. Our software is designed to function as an intelligence layer on top of your current data stack. It indexes your existing document stores and databases where they sit, allowing you to query your internal knowledge base without migrating data or disrupting your current workflows.",
  },
  {
    question: "Does this require a specialized DevOps team to maintain?",
    answer:
      "No. While the system is hosted on your infrastructure, we provide the engineering support to keep it running. You maintain the physical and network control; we provide the technical expertise to manage the software layer.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="back pb-10" id="faqs">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-evenly gap-4  items-center md:h-screen"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <h1 className="text-2xl w-[60%] sm:text-3xl md:text-5xl font-semibold text-white text-center">
            Frequently asked questions
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full justify-center flex flex-col items-center gap-3 transition duration-300"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border w-[80%] md:w-[40%] border-[#5D3FD3]/20 px-4 py-5 flex flex-col rounded-xl gap-3"
            >
              <div className="flex gap-1 items-center justify-between">
                <h2 className="text-sm md:text-lg font-semibold">{faq.question}</h2>
                <MdOutlineKeyboardArrowDown
                  className={`cursor-pointer border border-[#5D3FD3]/20 rounded-full text-4xl p-1 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  onClick={() => toggleFaq(index)}
                />
              </div>


              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}