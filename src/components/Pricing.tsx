import { motion } from "framer-motion";

export default function Packages() {
  return (
    <div className="back " id="pricing">
      <motion.div className="md:h-screen flex flex-col items-center justify-center gap-10 ">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Package
          </h1>
          <p className="text-lg text-gray-200">
            Whether you’re just starting out or ready to master Webflow, we’ve
            got a plan tailored to your journey. Each package includes expert
            guidance, community access, and lifetime updates.
          </p>
        </div>

        <div className="flex gap-6 justify-center pt-10 flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col gap-4 text-white shadow-xl  transition-transform duration-300 justify-between items-center"
          >
            <div className=" rounded-2xl p-6 flex flex-col gap-4 text-white transition-transform duration-300">
              <h2 className="text-2xl font-bold">Complete package</h2>
              <p className="text-sm opacity-90">
                Kickstart your Webflow journey with essentials.
              </p>
              <p className="text-xl font-semibold">$699.00</p>
              <ul className="list-disc list-inside space-y-4 text-md opacity-90">
                <li>
                  Intro Webflow course
                </li>
                <li>
                  1 month mentoring
                </li>
                <li>
                  Basic CMS setup
                </li>
                <li>
                  Community access
                </li>
                <li>
                  Lifetime access to starter content
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-white text-iris px-4 py-2 sm:px-6 border border-transparent cursor-pointer sm:py-3 rounded font-semibold justify-center flex items-center gap-2">
                <span className="md:hidden  ">Get</span>
                <span className="hidden md:block ">Get Instant Access</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#5D3FD3] rounded-2xl p-6 flex flex-col gap-4 text-white shadow-xl  transition-transform duration-300 justify-between items-center"
          >
            <div className=" rounded-2xl p-6 flex flex-col gap-4 text-white transition-transform duration-300">
              <h2 className="text-2xl font-bold">Starter package</h2>
              <p className="text-sm opacity-90">
                Kickstart your Webflow journey with essentials.
              </p>
              <p className="text-xl font-semibold">$299.00</p>
              <ul className="list-disc list-inside space-y-4 text-md opacity-90">
                <li>
                  Intro Webflow course
                </li>
                <li>
                  1 month mentoring
                </li>
                <li>
                  Basic CMS setup
                </li>
                <li>
                  Community access
                </li>
                <li>
                  Lifetime access to starter content
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-white text-iris px-4 py-2 sm:px-6 border border-transparent cursor-pointer sm:py-3 rounded font-semibold justify-center flex items-center gap-2">
                <span className="md:hidden  ">Get</span>
                <span className="hidden md:block ">Get Instant Access</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
