import { motion, Variants } from "framer-motion";
import { div } from "framer-motion/client";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Footer() {
    return (
        <div className="back">
            
            <motion.footer
                className="  text-gray-400 py-10 px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-evenly"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex flex-col items-center md:items-start"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="logo" className="w-10" />
                            <h1 className="text-xl font-bold text-[#5D3FD3]">QuantrailData</h1>
                        </div>
                        <p className="text-sm text-center">
                            Simplifying database operations with speed, clarity, and secure access.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex justify-between md:justify-between md:w-[23%]"
                        variants={itemVariants}
                    >
                        <div>
                            <h3 className="text-white font-semibold mb-3">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:text-[#5D3FD3]">About Us</a></li>
                                <li><a href="#features" className="hover:text-[#5D3FD3]">Features</a></li>
                                <li><a href="#solutions" className="hover:text-[#5D3FD3]">Solutions</a></li>
                                <li><a href="#pricing" className="hover:text-[#5D3FD3]">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-3">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#faqs" className="hover:text-[#5D3FD3]">FAQs</a></li>
                                <li><a href="#contact" className="hover:text-[#5D3FD3]">Contact</a></li>
                                <li><a href="#" className="hover:text-[#5D3FD3]">Help Center</a></li>
                                <li><a href="#" className="hover:text-[#5D3FD3]">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col items-center md:items-start" variants={itemVariants}>
                        <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
                        <div className="flex flex-row md:flex-col gap-4">
                            <a href="#" className="hover:text-[#5D3FD3]">Twitter</a>
                            <a href="#" className="hover:text-[#5D3FD3]">LinkedIn</a>
                            <a href="#" className="hover:text-[#5D3FD3]">GitHub</a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="mt-10 border-t border-gray-700 pt-6 text-center text-sm"
                    variants={itemVariants}
                >
                    © {new Date().getFullYear()} QuantrailData. All rights reserved.
                </motion.div>
            </motion.footer>
        </div>
    );
}