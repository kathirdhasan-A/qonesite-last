import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useRouter } from "next/router";

const images = [
  "./qcode/home.png",
  "./qcode/code.png",
  "./qcode/files.png",
  "./qcode/ai.png",
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
      <div className="flex flex-col justify-center items-center mt-12 md:mt-20 text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Secure Your Technical Edge: Generate Code Without Informing the
          Competition.
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-3xl">
          Stop paying AI providers to learn how your software is built. QCode
          brings advanced code generation directly to your private hardware,
          allowing you to build proprietary IP at lightning speed without
          sharing a single line of your blueprint with the outside world.
        </p>
      </div>
      {/* Feature section */}
      <div className="flex items-center w-full justify-center gap-4 flex-col max-w-6xl">
        <p className="font-lovelo1 text-xl uppercase tracking-wide text-iris">
          What We Do
        </p>
        <div className="w-full text-center">
          <p className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-4">
            Breaking the Cycle of Paying to Leak Your Secrets
          </p>
          <p className="max-w-3xl text-sm md:text-base text-gray-500 mx-auto">
            Every time a developer uses a cloud-based AI to write code, they are
            handing over the <strong className="text-iris">how</strong> and{" "}
            <strong className="text-iris">what</strong> of your company's core
            assets to an external provider. QCode smashes this dependency. We
            provide a specialized coding engine that lives entirely within your
            network. You get all the speed of automated coding without the
            hidden cost of training someone else's model with your unique logic.
          </p>
        </div>

        <div className="flex w-full justify-center items-center my-10 md:my-20">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-xl aspect-square lg:w-1/2 bg-radial from-[#5D3FD3]/20 via-transparent to-transparent flex justify-center items-center">
              <img
                src="./qcode/home.png"
                alt="Qdocs demo"
                className="absolute top-[20%] left-[0%] w-[90%] h-auto rounded-lg border border-white/30 shadow-xl"
              />
              <img
                src="./qcode/files.png"
                alt="Qdocs user"
                className="z-10 absolute bottom-[15%] right-[0%] w-[70%] h-auto rounded-lg border border-white/30 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full lg:w-1/2">
              {[
                {
                  id: "01",
                  title: "Total Intellectual Property Insulation",
                  desc: "Stop the invisible leak. By keeping your code generation local, you ensure that your proprietary algorithms and architectural secrets are never used to train external AI models.",
                },
                {
                  id: "02",
                  title: "Zero-Egress Intelligence",
                  desc: "Break the Cloud Tax. Instead of paying monthly fees to send your code to a third party, you run your own intelligence on your own hardware, keeping your secrets within your secure perimeter.",
                },
                {
                  id: "03",
                  title: "Eliminate Blueprint Exposure",
                  desc: "Don't let outsiders see how your system is built. QCode allows you to draft sensitive functions and core modules in a closed-loop environment that no external provider can access.",
                },
                {
                  id: "04",
                  title: "Sovereign Development Speed",
                  desc: "Maintain 100% control over your assets. From the first prompt to the final code block, you own the entire process, ensuring your technical edge remains exclusive to your organization.",
                },
              ].map((feature) => {
                const highlightText = (text: string) => {
                  const keywords = ["Cloud Tax", "Blueprint Exposure"];

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

      {/* Use case Section  */}
      <div className="w-full flex flex-col items-center gap-10 my-10 max-w-6xl">
        <h2 className="text-3xl font-lovelo1 text-center">Use Case</h2>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full px-4 sm:px-6 lg:px-12 py-14 bg-linear-to-br from-iris/10  to-iris/5 rounded-3xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
              {[
                {
                  head: "Specification-Driven Generation",
                  sub_head: "For Software Architects",
                  useCase: "High-Precision Code Scaffolding",
                  scenario:
                    ' A developer provides a detailed technical specification and a set of design constraints. QCode generates a functional code structure based on those specific instructions. This allows the architect to move from a conceptual design to a working skeleton in minutes, ensuring the foundation is built exactly to their requirements while keeping the logic strictly on-premise.',
                },
                {
                  head: "Iterative Logic Refinement",
                  sub_head: "For Senior Developers",
                  useCase: "Multi-Stage Code Refactoring",
                  scenario:
                    ' A developer provides a block of code and a specific goal, such as "optimize for better error handling" or "simplify this nested logic." QCode proposes a refined version. The developer then provides feedback or additional constraints, and QCode updates the code accordingly. This creates a tight, private feedback loop that speeds up the polishing of complex modules.',
                },
                {
                  head: "Unit Test & Edge Case Drafting",
                  sub_head: "For QA and Backend Engineers",
                  useCase: "Rapid Test Suite Construction",
                  scenario:
                    ' A developer provides a completed function or class and asks QCode to draft a corresponding suite of unit tests, including potential edge cases. QCode analyzes the logic provided in the prompt and generates the test code. The developer reviews the draft to ensure full coverage, significantly reducing the manual labor involved in maintaining high-quality, reliable software.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full max-w-sm h-full rounded-2xl border border-iris/40 
  bg-iris p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-white/5" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        {item.head}
                      </span>

                      <p className="text-xs text-white/60">{item.sub_head}</p>

                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.useCase}
                      </h3>
                    </div>

                    <div className="my-5 h-px bg-white/10" />

                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.scenario}
                    </p>
                    <div className="mt-6 h-0.5 w-0 bg-white/70 transition-all duration-300 group-hover:w-full rounded-full" />
                  </div>
                </div>
              ))}
            </div>
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
              title: "Closed-Loop Engineering",
              desc: "QCode is built for teams who refuse to share their roadmap. It operates in total isolation, ensuring your unique logic and internal libraries stay on your hardware and off the public internet.",
              metric: "Breaking the Public Data Feed.",
            },
            {
              title: "Proprietary Logic Shield",
              desc: "Your codebase is your most valuable asset. QCode ensures that your internal patterns and optimizations are never harvested to improve third-party AI, keeping your competitive advantages strictly in-house.",
              metric: "No External Training. ",
            },
            {
              title: "High-Fidelity Code Output",
              desc: "QCode masters the hierarchy of modern software development. It generates clean, structured code across multiple languages, tailored specifically to your organization’s requirements and style.",
              metric: "Structural Precision. ",
            },
            {
              title: "Audit-Ready Security",
              desc: "Built for accountability. Every AI-generated code block is logged within your internal network, giving you full visibility into how the tool is being used without ever exposing your files to an external provider.",
              metric: "100% Internal Traceability",
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
        <button
          onClick={() => navigate.push(`./#contact`)}
          className="px-10 py-4 bg-iris text-white rounded-full font-bold hover:bg-iris/90 transition-colors shadow-lg"
        >
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
