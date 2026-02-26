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

export default function Contact() {
  return (
    <section id="contact" className="back py-20 px-6 bg-black text-white">
      <motion.div 
              initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        
        <motion.h2 className="text-3xl md:text-5xl font-bold ">
          Get in Touch
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          Have questions about our platform or want to learn more? 
          We’d love to hear from you. Reach out to our team and we’ll 
          respond as quickly as possible.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row  gap-3 text-gray-400 md:text-lg">
          <motion.p className="hover:text-iris"><strong>Email:</strong> support@quantraildata.com |</motion.p>
          <motion.p className="hover:text-iris"><strong>Phone:</strong> +91 98765 43210 |</motion.p>
          <motion.p className="hover:text-iris"><strong>Address:</strong> Chennai, India</motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}