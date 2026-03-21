import { Variants, motion } from "framer-motion";


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
      <section id="solutions" className="back pt-10 md:py-20 px-6 md:px-12 bg-black text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto flex flex-col gap-12">

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              The Private Intelligence Layer
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Bring the intelligence to the data. A Secure, local-first software layer that enables you to query, analyze, and automate -  without your IP ever being harvested by third-party AI providers.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
              <h3 className="text-xl font-semibold text-white"> Operation Control</h3>
              <p className="text-gray-300">
                Stop relying on third-party uptime and API changes. Run the intelligence layer on your own hardware, ensuring your AI tools are always available, fast, and under your direct management.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
              <h3 className="text-xl font-semibold text-white"> Zero Data Harvesting</h3>
              <p className="text-gray-300">
                Take your IP off the menu. We ensure your sensitive data never becomes training material for public AI models. Your prompts and your data stay within your defined security perimeter.
              </p>
            </motion.div>


            <motion.div variants={itemVariants} className="bg-iris rounded-xl p-8 shadow-lg flex flex-col hover:shadow-iris gap-4 hover:shadow-md hover:scale-102 hover:bg-iris/20 border border-transparent hover:border-iris transition">
              <h3 className="text-xl font-semibold text-white"> Total Ownership</h3>
              <p className="text-gray-300">
                You own the keys, the logs, and the infrastructure. Audit every query and manage permissions behind your own firewall, without giving external providers a backdoor to your company secrets.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

  );
}