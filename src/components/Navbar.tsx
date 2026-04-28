import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

export default function Navbar() {
  const navigate = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDrop, setNavDrop] = useState("");
  const [mobileDrop, setMobileDrop] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>(null); 

  const logo = "QONE";

  const navLinks = [
    { label: "Solutions", href: "#solutions", dropdown: false },
    { label: "Features", href: "#features", dropdown: false },
    {
      label: "Products",
      href: "#",
      dropdown: true,
      options: ["Qurioz", "Qdocs", "Qtalk", "Qcode"],
    },
    { label: "Pricing", href: "#pricing", dropdown: false },
    { label: "FAQs", href: "#faqs", dropdown: false },
    {
      label: "Blogs",
      href: "https://quantrail-data.com/blog/",
      dropdown: false,
    },
    { label: "About Us", href: "#about", dropdown: false },
  ];

  const handleMouseEnter = (label: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setNavDrop(label);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setNavDrop("");
    }, 200);
    setTimeoutId(id);
  };

  return (
    <div>
      {/* Navbar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={navVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full h-15 pt-5 px-2 lg:pt-15 items-center justify-between lg:justify-around"
      >
        <div className="flex items-center gap-0.5 lg:gap-1">
          {logo.split("").map((char, index) => {
            return (
              <h1
                key={index}
                className="text-md lg:text-2xl font-extrabold font-lovelo1 bg-white border border-white text-iris rounded w-6 h-6 lg:w-8 lg:h-8 flex justify-center items-center pt-0.5 lg:pt-1 m-0"
              >
                {char}
              </h1>
            );
          })}
        </div>

        <div className="lg:w-[55%] xl:w-[45%] hidden lg:flex justify-between text-base xl:text-lg transition text-white font-medium">
          {navLinks.map((item, i) =>
            item.dropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex group justify-center items-center gap-1 cursor-pointer">
                  <p className="group-hover:text-[#5D3FD3] transition duration-300 ease-in-out">
                    {item.label}
                  </p>
                  <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300 ease-in-out group-hover:text-[#5D3FD3]" />
                </div>

                {navDrop === item.label && (
                  <div className="absolute -translate-x-1/2 top-full mt-1 w-42 flex flex-col">
                    

                    <div className="absolute -top-2 h-3 w-full " />

                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="bg-[#181032] border border-[#A0A0A0]/50 p-2 rounded-lg
                      animate-in fade-in zoom-in-95 duration-200 z-50"
                    >
                      {item.options?.map((opt, idx) => (
                        <div
                          key={idx}
                          onClick={() => navigate.push(`/${opt.toLowerCase()}`)}
                          className="px-4 py-2 hover:bg-iris/20 rounded-lg text-white font-medium hover:text-white/80 
                          transition-colors cursor-pointer text-base"
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            ) : (
              <div
                key={i}
                onClick={() => {
                  if (item.label === "Blogs") {
                    navigate.push(`${item.href}`);
                  } else {
                    navigate.push(`./${item.href}`);
                  }
                }}
                className="hover:border-b hover:border-b-[#5D3FD3] border-b border-transparent hover:text-[#5D3FD3] transition duration-300 ease-in-out"
              >
                {item.label}
              </div>
            )
          )}
        </div>

        <div className="flex items-center gap-5">
          <Link href={"#contact"}>
            <button className="px-3 py-1.5 bg-[#5D3FD3] border border-transparent lg:scale-[0.96] lg:hover:scale-[0.99] group lg:px-6 lg:py-3 rounded-full cursor-pointer items-center justify-center gap-2 flex font-semibold hover:bg-iris/20 hover:border-iris">
              <span className="flex gap-1 ">
                <MdPhone className="md:text-xl group-hover:hidden transition-all" />
                <MdPhoneInTalk className="md:text-xl hidden group-hover:block transition-all duration-300" />
              </span>
              <span className="hidden lg:block">Contact us</span>
              <span className="lg:hidden text-sm">Contact</span>
            </button>
          </Link>
          <RxHamburgerMenu
            className="block lg:hidden h-8 w-7 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </motion.div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={menuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 right-0 w-[75%] h-full bg-[#181032] text-white/80 shadow-lg z-50 lg:hidden flex flex-col overflow-y-auto"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-white font-bold text-xl">Menu</h2>
          <button className="text-white text-2xl" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((item, i) => (
            <li key={i} className="flex flex-col">
              {item.dropdown ? (
                <>
                  <div 
                    onClick={() => setMobileDrop(mobileDrop === item.label ? "" : item.label)}
                    className="flex justify-between items-center text-lg py-2 cursor-pointer hover:text-[#5D3FD3]"
                  >
                    <span>{item.label}</span>
                    <IoIosArrowDown className={`transition-transform duration-300 ${mobileDrop === item.label ? "rotate-180" : ""}`} />
                  </div>
                  
                  {/* Mobile Dropdown Options */}
                  {mobileDrop === item.label && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2 border-l border-[#5D3FD3]/30 pl-4">
                      {item.options?.map((opt, idx) => (
                        <li 
                          key={idx}
                          onClick={() => {
                            navigate.push(`/${opt.toLowerCase()}`);
                            setMenuOpen(false);
                          }}
                          className="py-2 text-base text-white/70 hover:text-white"
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  onClick={() => {
                    if (item.label === "Blogs") {
                      navigate.push(item.href);
                    } else {
                      navigate.push(`./${item.href}`);
                    }
                    setMenuOpen(false);
                  }}
                  className="text-lg py-2 hover:text-[#5D3FD3] cursor-pointer transition-colors"
                >
                  {item.label}
                </div>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
