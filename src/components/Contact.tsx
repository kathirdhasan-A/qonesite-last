import { Variants, motion } from "framer-motion";
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
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    Deployment: "",
    Primary_Cloud_Provider: "",
    GPU_Availability: "",
    use_case: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleDropdown1Select = (type: string) => {
    setFormData((prev) => ({ ...prev, Primary_Cloud_Provider: type }));
    setDropdown1(false);
  };

  const handleDropdown2Select = (type: string) => {
    setFormData((prev) => ({ ...prev, GPU_Availability: type }));
    setDropdown2(false);
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
          Deployment: "",
          Primary_Cloud_Provider: "",
          GPU_Availability: "",
          use_case: "",
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
    <section id="contact" className="back text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto flex flex-col pt-10 lg:pt-15  items-center text-center gap-6"
      >
        <motion.h2 className="text-3xl  md:text-5xl font-bold">
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 px-4 md:px-0 leading-relaxed"
        >
          Have questions about our platform or want to learn more? We’d love to
          hear from you. Reach out to our team and we’ll respond as quickly as
          possible.
        </motion.p>

        <motion.form
          variants={itemVariants}
          className="w-full flex flex-col gap-4 mt-4  text-left p-5"
          onSubmit={handleSubmit}
          onMouseLeave={() => (setDropdown1(false), setDropdown2(false))}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-iris/50 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email (Business domain only)"
              onBlur={(e) => {
                const domain = e.target.value.split("@")[1];
                const personal = [
                  "gmail.com",
                  "yahoo.com",
                  "hotmail.com",
                  "outlook.com",
                ];
                if (personal.includes(domain))
                  alert("Please use a business email address.");
              }}
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-iris/50 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
              required
            />
          </div>

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-transparent border border-iris/50 rounded-lg p-4 focus:outline-none focus:border-iris transition-colors"
            required
          />

          <div className="space-y-4 border border-iris/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold ">Deployment Selection</h3>
            <p className="text-sm text-gray-400">
              How will you host the Private Intelligence Layer?
            </p>
            <div className="flex flex-col z-100 gap-4">
              <label className="flex items-start gap-4 p-4 border border-iris/20 rounded-xl cursor-pointer transition-all duration-200 hover:border-iris/50 hover:bg-iris/5 has-checked:border-iris/50 has-checked:bg-iris/10 has-checked:ring-1 has-checked:ring-iris/50">
                <div className="relative flex items-center justify-center mt-1">
                  <input
                    type="radio"
                    name="Deployment"
                    value="Self-Hosted"
                    className="peer appearance-none w-5 h-5 border-2 border-iris/30 rounded-full checked:border-iris transition-all"
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-iris scale-0 peer-checked:scale-100 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold block text-sm sm:text-base">
                    Self-Hosted (Free Software License)
                  </span>
                  <span className="text-xs leading-relaxed opacity-70">
                    You provide the infrastructure (AWS/Azure/GCP/On-Prem). We
                    deploy the application.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 border border-iris/20 rounded-xl cursor-pointer transition-all duration-200 hover:border-iris/50 hover:bg-iris/5 has-checked:border-iris/50 has-checked:bg-iris/10 has-checked:ring-1 has-checked:ring-iris/50">
                <div className="relative flex items-center justify-center mt-1">
                  <input
                    type="radio"
                    name="Deployment"
                    value="Managed Pilot"
                    className="peer appearance-none w-5 h-5 border-2 border-iris/30 rounded-full checked:border-iris transition-all"
                    onChange={handleChange}
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-iris scale-0 peer-checked:scale-100 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold block text-sm sm:text-base">
                    Managed Pilot (Hardware Pass-through)
                  </span>
                  <span className="text-xs leading-relaxed opacity-70">
                    We provision GPU and cloud resources. Infrastructure costs
                    are billed to your organization.
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-iris/50 p-4 rounded-lg">
            <div className="relative">
              <p className="font-bold pb-2">Primary Cloud Provider</p>
              <div
                className="flex justify-between items-center cursor-pointer border border-iris/50 rounded p-4 bg-transparent"
                onClick={() => (setDropdown1(!dropdown1), setDropdown2(false))}
              >
                {formData.Primary_Cloud_Provider || "Select Type"}
                <IoIosArrowDown
                  className={`transition-transform ${dropdown1 ? "rotate-180" : ""}`}
                />
              </div>

              {dropdown1 && (
                <div className="absolute w-full mt-2 bg-[#120d28] border z-50 border-iris rounded-lg shadow-xl overflow-hidden">
                  {[
                    "AWS",
                    "Azure",
                    "GCP",
                    "On-Prem",
                    "Other,Not Applicable",
                  ].map((type) => (
                    <p
                      key={type}
                      className="p-4 hover:bg-iris hover:bg-opacity-20  hover:text-white cursor-pointer transition-colors"
                      onClick={() => handleDropdown1Select(type)}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <p className="font-bold pb-2">GPU Availability</p>
              <div
                className="flex justify-between items-center cursor-pointer border border-iris/50 rounded p-4 bg-transparent"
                onClick={() => (setDropdown2(!dropdown2), setDropdown1(false))}
              >
                {formData.GPU_Availability || "Select Type"}
                <IoIosArrowDown
                  className={`transition-transform ${dropdown2 ? "rotate-180" : ""}`}
                />
              </div>
              {dropdown2 && (
                <div className="absolute w-full mt-2 bg-[#120d28] border border-iris rounded-lg shadow-xl overflow-hidden">
                  {[
                    "On-Premise Rack",
                    "Private Cloud (VPC)",
                    "Dedicated Bare Metal",
                    "Not Applicable",
                  ].map((type) => (
                    <p
                      key={type}
                      className="p-4 hover:bg-iris hover:bg-opacity-20  hover:text-white cursor-pointer transition-colors"
                      onClick={() => handleDropdown2Select(type)}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <textarea
              name="use_case"
              placeholder="Briefly describe your use case"
              rows={3}
              className="w-full bg-transparent border border-iris/50 rounded-lg p-4 focus:border-iris outline-none"
              value={formData.use_case}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message / Special Requests"
              rows={3}
              className="w-full bg-transparent border border-iris/50 rounded-lg p-4 focus:border-iris outline-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="p-4 bg-iris/10 border-l-4 border-iris rounded text-sm text-gray-300">
            <p>
              <strong>Pilot Terms:</strong> Software license fees are waived for
              self-hosted pilots. Managed Pilots require the customer to cover
              all underlying GPU/compute costs at market rates.
            </p>{" "}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-iris hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition-all active:scale-[0.98] flex items-center cursor-pointer justify-center"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full "
              />
            ) : (
              "Request Pilot Access "
            )}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
