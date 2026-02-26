import { Variants ,motion} from "framer-motion";

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

export default function Solutions() {
  return (
    <section id="solutions" className="back md:py-20 px-6 md:px-12 bg-black text-white">
      <motion.div 
              initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We deliver powerful, scalable, and secure database solutions that 
            empower teams to move faster, stay compliant, and unlock insights 
            with clarity.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
            <h3 className="text-xl font-semibold text-white"> Speed & Efficiency</h3>
            <p className="text-gray-300">
              Optimize database operations with lightning‑fast queries and 
              streamlined workflows, reducing downtime and boosting productivity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
            <h3 className="text-xl font-semibold text-white"> Security & Compliance</h3>
            <p className="text-gray-300">
              Protect sensitive data with enterprise‑grade encryption, role‑based 
              access, and compliance with global standards.
            </p>
          </motion.div>


          <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
            <h3 className="text-xl font-semibold text-white"> Insightful Analytics</h3>
            <p className="text-gray-300">
              Gain actionable insights with built‑in analytics dashboards, 
              helping teams make smarter decisions in real time.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}