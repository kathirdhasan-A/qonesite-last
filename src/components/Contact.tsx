import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    strenght: "",
    infraType: "",
    GPU_enabled: "",
    zeroData_accepted: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, infraType: type }));
    setDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          companyName: "",
          strenght: "",
          infraType: "",
          GPU_enabled: "",
          zeroData_accepted: "",
        });
      } else {
        alert(result.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="back py-20 px-6 bg-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2 className="text-3xl md:text-5xl font-bold">
          Get in Touch
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          Have questions about our platform or want to learn more?
          We’d love to hear from you. Reach out to our team and we’ll
          respond as quickly as possible.
        </motion.p>

        <motion.form
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-4 text-left"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
              required
            />
          </div>
          
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
          />

          <div className="flex flex-col bg-zinc-900 rounded-lg border border-zinc-800 p-4">
            <p className="font-bold pb-4">Organization Strength</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["1-50", "51-200", "201-1000", "1000+"].map((range) => (
                <label key={range} className="flex border rounded-lg border-zinc-600 p-2 font-semibold gap-3 cursor-pointer hover:bg-zinc-800">
                  <input
                    type="radio"
                    name="strenght"
                    value={range}
                    checked={formData.strenght === range}
                    onChange={handleChange}
                    className="accent-iris cursor-pointer"
                  />
                  {range}
                </label>
              ))}
            </div>
          </div>

          <div className="relative">
            <p className="font-bold pb-2">Infrastructure Type</p>
            <div
              className="flex justify-between items-center cursor-pointer border border-zinc-600 rounded p-4 bg-zinc-900"
              onClick={() => setDropdown(!dropdown)}
            >
              {formData.infraType || "Select Type"}
              <IoIosArrowDown className={`transition-transform ${dropdown ? 'rotate-180' : ''}`} />
            </div>
            {dropdown && (
              <div className="absolute z-10 w-full mt-2 bg-zinc-900 border border-iris rounded-lg shadow-xl overflow-hidden">
                {["On-Premise Rack", "Private Cloud (VPC)", "Dedicated Bare Metal"].map((type) => (
                  <p
                    key={type}
                    className="p-4 hover:bg-iris hover:text-white cursor-pointer transition-colors"
                    onClick={() => handleDropdownSelect(type)}
                  >
                    {type}
                  </p>
                ))}
              </div>
            )}
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm flex gap-3 cursor-pointer">
              <input
                type="radio"
                name="GPU_enabled"
                value="Yes"
                onChange={handleChange}
                className="accent-iris"
              />
              I confirm our Organization can provide GPU-enabled VMs with SSH
            </label>
            <label className="text-sm flex gap-3 cursor-pointer">
              <input
                type="radio"
                name="zeroData_accepted"
                value="Accepted"
                onChange={handleChange}
                className="accent-iris"
              />
              I understand this deployment is strictly on-premise with zero data export.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-iris hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="flex flex-col w-full md:flex-row gap-8 text-gray-400 md:text-lg mt-8 items-center justify-center border-t border-zinc-800 pt-8"
        >
          <div className="hover:text-iris transition-colors">
            <strong>Email</strong> <br />
            <span className="text-sm">support@quantraildata.com</span>
          </div>
          <div className="hover:text-iris transition-colors">
            <strong>Phone</strong> <br />
            <span className="text-sm">+91 98765 43210</span>
          </div>
          <Link 
            href="https://www.google.com..." 
            className="hover:text-iris transition-colors"
          >
            <strong>Address</strong> <br />
            <span className="text-sm">Chennai, India</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
