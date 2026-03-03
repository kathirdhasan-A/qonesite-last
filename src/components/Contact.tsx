<<<<<<< HEAD
import { Variants,motion } from "framer-motion";

=======
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { use, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
>>>>>>> ca1f02d (content updated)

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
<<<<<<< HEAD
=======
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
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
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
        alert("Messcount sent successfully!");
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
        alert(result.error || "Failed to send messcount");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

>>>>>>> ca1f02d (content updated)
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

<<<<<<< HEAD
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row  gap-3 text-gray-400 md:text-lg">
          <motion.p className="hover:text-iris"><strong>Email:</strong> support@quantraildata.com |</motion.p>
          <motion.p className="hover:text-iris"><strong>Phone:</strong> +91 98765 43210 |</motion.p>
          <motion.p className="hover:text-iris"><strong>Address:</strong> Chennai, India</motion.p>
=======
        <motion.form
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
            />
          </div>
          <input
            type="text"
            id="name"
            name="companyName"
            placeholder="Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
          />
          <div className="flex flex-col justify-evenly bg-zinc-900 rounded-lg border border-zinc-800 p-2">
            <div className="flex flex-col md:flex-ro items-start gap-2 pb-5">
              <p className="font-bold py-2">Organization Strength</p>

            <div className="flex gap-3">
                <label
                htmlFor="count1"
                  title="1-50 members"
                className="flex border rounded-lg border-zinc-600 p-2 font-semibold gap-3"  
              >
                <input
                  type="radio"
                  id="count1"
                  name="strenght"
                  value="1-50"
                  checked={formData.strenght === "1-50"}
                  onChange={handleChange}
                  className="accent-iris cursor-pointer"
                
                />
                1-50
              </label>

              <label
                htmlFor="count2"
                 className="flex border rounded-lg border-zinc-600 p-2 font-semibold gap-3"  
                   title="1-50 members"
              >
                <input
                  type="radio"
                  id="count2"
                  name="strenght"
                  value="51-200"
                  checked={formData.strenght === "51-200"}
                  onChange={handleChange}
                  className="accent-iris cursor-pointer "
                />
                51-200
              </label>

              <label
                htmlFor="count3"
                className="flex border rounded-lg border-zinc-600 p-2 font-semibold gap-3"  
                  title="1-50 members"
              >
                <input
                  type="radio"
                  id="count3"
                  name="strenght"
                  value="201-1000"
                  checked={formData.strenght === "201-1000"}
                  onChange={handleChange}
                  className="accent-iris cursor-pointer "
                />
                201-1000
              </label>

              <label
                htmlFor="count4"
                 className="flex border rounded-lg border-zinc-600 p-2 font-semibold gap-3"  
                   title="1000+ members"
              >
                <input
                  type="radio"
                  id="count4"
                  name="strenght"
                  value="1000+"
                  checked={formData.strenght === "1000+"}
                  onChange={handleChange}
                  className="accent-iris cursor-pointer "
                />
                1000+ 
              </label>
            </div>
            </div>
            <div className={`${dropdown ? "h-60":"h-30"} transition-all duration-300`}>
              <p className="w-full flex items-center font-bold pb-4">Ifrastructure Type </p>
              <p
                className="flex  gap-3 items-center justify-center cursor-pointer border border-zinc-600 rounded p-3 px-4"
                onClick={() => setDropdown(!dropdown)}
              >
                Infrastructure Type
                <IoIosArrowDown />
              </p>
              {dropdown && (
                <div className="bg-transparent border h-30 border-iris rounded-lg p-4 flex flex-col justify-center items-start gap-2">
                  <p
                    className="flex items-start w-full border-b-transparent hover:border-b p-1 hover:border-iris  transition duration-300"
                    onClick={() =>
                      (formData.infraType = "ON-Premise Rack") &&
                      setDropdown(false)
                    }
                  >
                    On-Premise Rack
                  </p>
                  <p
                    className="flex items-start w-full border-b-transparent hover:border-b p-1 hover:border-iris  transition duration-300"
                    onClick={() =>
                      (formData.infraType = "Private Cloud(VPC)") &&
                      setDropdown(false)
                    }
                  >
                    Private Cloud(VPC)
                  </p>
                  <p
                    className="flex items-start w-full border-b-transparent hover:border-b p-1 hover:border-iris transition duration-300"
                    onClick={() =>
                      (formData.infraType = "Dedicated Bare Metal") &&
                      setDropdown(false)
                    }
                  >
                    Dedicated Bare Metal
                  </p>
                </div>
              )}
            </div>
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
          />
          <div className="flex flex-col items-start  justify-center ">
            <label className="text-sm flex gap-3">
              <input
                type="radio"
                name="GPU_enabled"
                value="I confirm our Organization can provide GPU-enabled VMs with SSH"
                checked={
                  formData.GPU_enabled ===
                  "I confirm our Organization can provide GPU-enabled VMs with SSH"
                }
                onChange={handleChange}
                className="accent-iris  cursor-pointer "
              />{" "}
              I confirm our Organization can provide GPU-enabled VMs with SSH
            </label>
            <label className="text-sm flex gap-3">
              <input
                type="radio"
                name="zeroData_accepted"
                value="I understand that this deployment is strictly on-premise with zerodata export."
                checked={
                  formData.zeroData_accepted ===
                  "I understand that this deployment is strictly on-premise with zerodata export."
                }
                onChange={handleChange}
                className=" accent-iris  cursor-pointer"
              />
              I understand that this deployment is strictly on-premise with zero
              data export.
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
          className="flex flex-col w-full  md:flex-row gap-3 text-gray-400 md:text-lg mt-4 items-center justify-evenly"
        >
          <p className="hover:text-iris transition-colors ">
            <strong>Email</strong> <br />{" "}
            <span className="text-sm">support@quantraildata.com</span>
          </p>

          <p className="hover:text-iris transition-colors md:mr-9">
            <strong>Phone</strong> <br />{" "}
            <span className="text-sm">+91 98765 43210</span>
          </p>

          <Link href={"https://www.google.com/maps/place/Crescent+Innovation+%26+Incubation+Council+(CIIC)/@12.871644,80.0842127,1155m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52f791aeb9fff3:0x92b8e9d70ae5880b!8m2!3d12.871644!4d80.0842127!16s%2Fg%2F11h4nkkvh5?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"} className="hover:text-iris transition-colors  md:mr-16">
            <strong>Address</strong>
            <br />
            <span  className="text-sm"> Chennai, India</span>
          </Link>
>>>>>>> ca1f02d (content updated)
        </motion.div>
      </motion.div>
    </section>
  );
}