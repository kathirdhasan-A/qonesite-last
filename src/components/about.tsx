import { Variants,motion } from "framer-motion";


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

export default function About() {
  return (
    <section id="about" className="back py-20 px-6 md:px-12 bg-black text-white">
      <motion.div 
              initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <motion.div variants={itemVariants} className="shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src="/logo.png"
            alt="About QuantrailData"
            className="rounded-xl shadow-lg w-[70%] md:w-full"
          />
        </motion.div>


        <motion.div variants={itemVariants} className="w-full md:w-1/2 flex justify-center items-center flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About Us
          </h2>
          <p className="text-lg  text-center md:text-start text-gray-300 leading-relaxed">
            At <span className="font-semibold text-white">QuantrailData</span>, 
            we empower teams to take complete control of their data — from storage 
            to retrieval — with speed, clarity, and security. Our mission is to 
            simplify database operations while ensuring enterprise‑grade compliance.
          </p>
          <p className="text-lg text-center md:text-start text-gray-400 leading-relaxed">
            Trusted by developers worldwide, we combine robust backend architecture 
            with intuitive interfaces, helping organizations unlock insights without 
            compromising privacy or performance.
          </p>
          <button className="bg-gray-500 text-sm md:h-12 p-2 md:text-md md:px-4 md:py-2 hover:ring-2 rounded ring-[#A0A0A0]transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}