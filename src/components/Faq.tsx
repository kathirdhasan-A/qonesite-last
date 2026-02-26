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
    question: "How does Quantrial ensure my data stays private?",
    answer:
      "We deploy on-premise or in your own cloud environment, so your data never leaves your controlled network.",
  },
  {
    question: "Do I need coding skills to use Quantrail?",
    answer:
      "While it's not a no-code tool, our natural language interface lets you ask questions and get insights without complex queries.",
  },
  {
    question: "What deployment options are available?",
    answer:
      "You can deploy full on-premise or bring your own cloud infrastructure to maintain compliance and privacy.",
  },
  {
    question: "How quickly can I start using the platform?",
    answer:
      "Setup is streamlined to get you running with real-time analytics in a matter of minutes, not weeks.",
  },
  {
    question: "Is Quantrail secure and compliant with industry standards?",
    answer:
      "Yes, security is built into every layer, ensuring enterprise-grade compliance and data protection.",
  },
  {
    question: "Do I need to learn new tools to use Quantrail?",
    answer:
      "The interface is intuitive and designed to fit seamlessly into analysts' existing workflows.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="back" id="faqs">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-evenly gap-4 pt-5 items-center md:h-screen"
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