import { motion } from "framer-motion";
import { RiArrowDropRightFill } from "react-icons/ri";

export default function Packages() {
  return (
    <div className="back " id="pricing">
      <motion.div className=" flex flex-col items-center justify-center gap-10 ">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Select Your Pilot Phase
          </h1>
          <p className="text-lg text-gray-200">
            Validate our private intelligence layer on your own hardware. We
            Provide the engine; you provide the environment. Choose the scale
            that fits your organization's deployment goals
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-10 ">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col w-[79%]  md:w-[30%] gap-4 text-white shadow-xl  transition-transform duration-300 justify-between items-center"
          >
            <div className=" rounded-2xl p-6 flex flex-col gap-4 text-white transition-transform duration-300">
              <h2 className="text-2xl font-bold">Standard Pilot</h2>
              <p className="text-sm opacity-90">Evaluation & Validation</p>
              <p className="text-xl font-semibold">Free / 30 Days</p>
              <div className="flex items-start">
                <RiArrowDropRightFill className="text-xl" />
                <p>
                  <span className="font-semibold">Capacity : </span> Up to 20
                  seats for core team evaluation.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Unlimited Data : </span> No caps on indexing - process your entire proprietary library locally.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Insfrastructure : </span> Deployed on your dedicated server or private cloud instance.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Sovereignty Check : </span> Full 30-day window to audit network traffic and data isolation.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Zero Cost : </span> No credit card required. Hardware must be provided by the customer.
                </p>
              </div>

            </div>
            <div>
              <button className="bg-white text-iris px-4 py-2 sm:px-6 border border-transparent cursor-pointer sm:py-3 rounded font-semibold justify-center flex items-center gap-2">
                <span className="md:hidden  ">Apply</span>
                <span className="hidden md:block ">Apply for Pilot</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col w-[79%] md:w-[30%] gap-4 text-white shadow-xl  transition-transform duration-300 justify-between items-center"
          >
            <div className=" rounded-2xl p-6 flex flex-col gap-4 text-white transition-transform duration-300">
              <h2 className="text-2xl font-bold">Extended Pilot</h2>
              <p className="text-sm opacity-90">Architectural Integration</p>
              <p className="text-xl font-semibold">$ 4,999.00/90 Days</p>
              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Expanded Access : </span> Up to 50 seats for multi-department deployment.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Unlimited Data : </span> High-throughput indexing and reasoning for enterprise-scale datasets.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Fine-Grained Control : </span> Full implementation of RBAC and forensic audit logging.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Engineer-Led Setup : </span> Direct support for complex server environments and tuning.
                </p>
              </div>

              <div className="flex items-start">
                <RiArrowDropRightFill className="text-3xl" />
                <p>
                  <span className="font-semibold">Strategic Roadmap : </span> Includes a dedicated consultation on scaling to a permanent license.
                </p>
              </div>

            </div>
            <div>
              <button className="bg-white text-iris px-4 py-2 sm:px-6 border border-transparent cursor-pointer sm:py-3 rounded font-semibold justify-center flex items-center gap-2">
                <span className="md:hidden  ">Apply</span>
                <span className="hidden md:block ">Apply for Pilot</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
