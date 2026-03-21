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
          <p className="text-lg text-center md:text-start text-gray-300 leading-relaxed">
            We watched as the  <span className="font-semibold text-white">AI Revolution </span>
            turned into a data-harvesting race. We saw enterprise secrets, medical records, and legal ip being fed into public black boxes for the sake of a chat interface
          </p>
          <p className="text-lg  w-full text-center md:text-start text-gray-300 leading-relaxed"><span className="font-semibold text-white">We built a different path.</span></p>
          <p className="text-lg text-center md:text-start text-gray-300 leading-relaxed">
            The cloud isn't the problem - data leakage is . Out team builds for the organizations that need the power of AI but refuse the liability of third-party access.
          </p>
          <p className="text-lg text-center md:text-start text-gray-300 leading-relaxed">
            We provide the intellligence layer that runs on your hardware of choice. We don't want your data. We enable you to securely own your data.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}1