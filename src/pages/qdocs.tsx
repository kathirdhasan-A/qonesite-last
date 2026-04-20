import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { useRouter } from "next/router";

const images = [
  "./qdocs/home.png",
  "./qdocs/fileview.png",
  "./qdocs/ocr.png",
  "./qdocs/man.png",
];

const myCustomFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lovelo-Black.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--lovelo-black",
  display: "swap",
});

export default function Qdocs() {
    const navigate = useRouter();
  const [ended, setEnded] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [index, setIndex] = useState(0);
  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const getIndex = (offset: number) =>
    (index + offset + images.length) % images.length;
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const xOffset = windowWidth < 640 ? 120 : windowWidth < 1024 ? 300 : 500;
  const sideScale = windowWidth < 640 ? 0.6 : 0.8;
  const positions = [
    {
      id: "left",
      idx: getIndex(-1),
      x: -xOffset,
      scale: sideScale,
      opacity: 0.4,
      z: 1,
    },
    { id: "center", idx: getIndex(0), x: 0, scale: 1, opacity: 1, z: 2 },
    {
      id: "right",
      idx: getIndex(1),
      x: xOffset,
      scale: sideScale,
      opacity: 0.4,
      z: 1,
    },
  ];

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      controls: 1,
      showinfo: 0,
    },
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  const replayVideo = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.playVideo();
      setEnded(false);
    }
  };

  return (
    <div
      className={`back w-full flex flex-col overflow-hidden items-center gap-12 md:gap-20 px-4 md:px-8 ${myCustomFont.variable} font-sans`}
    >
      {/* Head section */}
      <div className="flex flex-col justify-center items-center mt-12 md:mt-20 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Document Intelligence Within Your Own Secure Perimeter
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-3xl">
          QDocs brings high-precision AI analysis to your most confidential
          document repositories. Designed to run on your company’s secure
          hardware, we ensure that sensitive intellectual property never leaves
          your network.
        </p>
      </div>
      {/* Feature section */}
      <div className="flex items-center w-full justify-center gap-4 flex-col max-w-6xl">
        <p className="font-lovelo1 text-xl uppercase tracking-wide text-iris">
          What We Do
        </p>
        <div className="w-full text-center">
          <p className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-4">
            The Fortress Approach to Document Analysis
          </p>
          <p className="max-w-4xl text-sm md:text-base text-gray-500 mx-auto">
            For the modern enterprise, the risk isn't just the data- it’s the
            destination. QDocs eliminates the <strong className="text-iris">Cloud Leak</strong> variable by operating
            entirely within your controlled environment. We provide leadership
            teams with the velocity of AI-driven insights while maintaining the
            absolute privacy of a local solution. Your documents stay on your
            hardware, under your rules.
          </p>
        </div>

        <div className="flex w-full justify-center items-center my-10 md:my-20">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-xl aspect-square lg:w-1/2 bg-radial from-[#5D3FD3]/20 via-transparent to-transparent flex justify-center items-center">
              <img
                src="./qdocs/home.png"
                alt="Qdocs demo"
                className="absolute top-[20%] left-[0%] w-[90%] h-auto rounded-lg border border-white/30 shadow-xl"
              />
              <img
                src="./qdocs/man.png"
                alt="Qdocs user"
                className="z-10 absolute bottom-[15%] right-[0%] w-[70%] h-auto rounded-lg border border-white/30 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full lg:w-1/2">
              {[
                {
                  id: "01",
                  title: "Physical Data Residency",
                  desc: "Since QDocs resides on your internal servers, you maintain 100% physical and digital custody of every document processed.",
                },
                {
                  id: "02",
                  title: "Group-Based Governance",
                  desc: " Align document access with your organizational structure. Restricted data stays restricted, ensuring users only interact with information relevant to their clearance level.",
                },
                {
                  id: "03",
                  title: "Human-Verified Accuracy",
                  desc: "Move beyond Black Box AI. Our interface allows subject matter experts to refine and update extracted content, ensuring the system’s output is as accurate as your best analysts.",
                },
                {
                  id: "04",
                  title: "Total IP Insulation",
                  desc: "Protect your competitive advantage. By keeping processing local, you ensure that proprietary strategies, contracts, and R&D data are never used to train external models.",
                },
              ].map((feature) => {
                const highlightText = (text: string) => {
                  const keywords = ["Black box"];

                  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
                  const parts = text.split(regex);

                  return parts.map((part, i) =>
                    keywords.some(
                      (kw) => kw.toLowerCase() === part.toLowerCase(),
                    ) ? (
                      <span key={i} className="text-iris font-bold">
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  );
                };

                return (
                  <div key={feature.id} className="flex gap-4 items-start">
                    <span className="font-lovelo1 text-iris shrink-0 text-lg">
                      {feature.id}.
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-lovelo1 text-lg leading-tight">
                        {highlightText(feature.title)}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-xs">
                        {highlightText(feature.desc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="w-full flex flex-col items-center gap-6 my-10 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-lovelo1">
          Watch Qdocs in Action
        </h2>
        <div className="w-full p-1 border-2 rounded-xl border-[#5d3fd326] shadow-2xl">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
            <YouTube
              videoId="yCAxL1BBH20"
              className="absolute top-0 left-0 w-full h-full"
              opts={opts}
              onReady={onReady}
              onEnd={() => setEnded(true)}
            />
            {ended && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 p-4 text-center">
                <button
                  onClick={replayVideo}
                  className="px-8 py-4 flex items-center gap-2 font-bold bg-white text-iris rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  <IoMdRefresh className="text-xl" />
                  Watch again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Why Qdocs / Use Case Section */}

      <div className="w-full flex flex-col items-center gap-10 my-10 max-w-6xl">
        <h2 className="text-3xl font-lovelo1 text-center">
          Why Qdocs Stands Out
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {[
            {
              title: "Sovereign Infrastructure",
              desc: "Unlike cloud-based readers, QDocs is deployed on your organization's secure hardware. Your confidential documents never transit the public internet or reside on third-party servers.",
              metric: "Total Hardware Residency. ",
            },
            {
              title: "Group-Based Access Control",
              desc: "QDocs utilizes robust Group-Based Access Control. Administrators can define precise permissions, ensuring that sensitive folders - like Legal or HR - are only queryable by authorized personnel.",
              metric: "Need-to-Know Enforcement. ",
            },
            {
              title: "Cross-Format Intelligence",
              desc: "We process PDFs, images, and OCR text with structural precision. Users can manually edit and update AI-extracted content, with full versioning to track every modification.",
              metric: "Human-in-the-Loop Extraction.",
            },
            {
              title: "Immutable Audit Logs",
              desc: "Built for accountability. Every document accessed and every query made is logged in a tamper-evident audit trail, giving the CISO full visibility into how internal data is being utilized. ",
              metric: "100% Query Traceability.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-iris/10 border border-iris/20 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="font-lovelo1 text-xl">{item.title}</h3>
              <p className="text-gray-500 text-sm grow">{item.desc}</p>
              <p className="text-iris font-bold text-sm uppercase tracking-widest mt-2">
                {item.metric}
              </p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate.push(`./#contact`)} className="px-10 py-4 bg-iris text-white rounded-full font-bold hover:bg-iris/90 transition-colors shadow-lg">
          Apply for pilot
        </button>
      </div>
      {/* Screenshots Section */}
      <div className="flex w-full justify-between  items-center mb-10 md:mb-20 px-4">
        <button
          onClick={prevImage}
          className="z-10 p-2 rounded-full bg-iris/50 hover:bg-iris transition"
        >
          <MdChevronLeft size={24} />
        </button>

        <div className="relative flex items-center justify-center flex-1 h-62.5 md:h-100">
          <AnimatePresence mode="popLayout">
            {positions.map((pos) => (
              <motion.img
                key={images[pos.idx]}
                src={images[pos.idx]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.z,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute w-48 sm:w-64 md:w-80 lg:w-150 h-auto pointer-events-none select-none object-cover rounded-xl border-2 border-gray-200 shadow-lg"
              />
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={nextImage}
          className="z-10 p-2 rounded-full bg-iris/50 hover:bg-iris transition"
        >
          <MdChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
