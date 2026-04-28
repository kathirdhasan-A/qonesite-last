import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useRouter } from "next/router";

const images = [
  "./qtalk/chat.png",
  "./qtalk/ai.png",
  "./qtalk/code.png",
  "./qtalk/webchat.png",
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
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Your Private GPT: Executive-Level AI Without the Public Cloud Risk.
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-3xl">
          Break the data-sharing cycle of public AI tools. QTalk brings the
          power of a high-performance LLM directly to your company’s secure
          hardware, giving your team a conversational assistant that keeps every
          prompt and every strategy strictly inside your firewall.
        </p>
      </div>
      {/* Feature section */}
      <div className="flex items-center w-full justify-center gap-4 flex-col max-w-6xl">
        <p className="font-lovelo1 text-xl uppercase tracking-wide text-iris">
          What We Do
        </p>
        <div className="w-full text-center">
          <p className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-4">
            Shattering the Privacy Trade-off in Generative AI
          </p>
          <p className="max-w-3xl text-sm md:text-base text-gray-500 mx-auto">
            Until now, using generative AI meant sacrificing data sovereignty to
            external providers. QTalk smashes that barrier. We provide a
            professional-grade chat interface that looks and feels like the
            tools your team knows, but with one critical difference: it is
            entirely self-hosted. Whether you are drafting strategy or
            summarizing internal reports, your data never leaves your private
            infrastructure.
          </p>
        </div>

        <div className="flex w-full justify-center items-center my-10 md:my-20">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-12 lg:gap-16">
            <div className="relative w-full max-w-xl aspect-square lg:w-1/2 bg-radial from-[#5D3FD3]/20 via-transparent to-transparent flex justify-center items-center">
              <img
                src="./qtalk/chat.png"
                alt="Qdocs demo"
                className="absolute top-[20%] left-[0%] w-[90%] h-auto rounded-lg border border-white/30 shadow-xl"
              />
              <img
                src="./qtalk/code.png"
                alt="Qdocs user"
                className="z-10 absolute bottom-[15%] right-[0%] w-[70%] h-auto rounded-lg border border-white/30 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full lg:w-1/2">
              {[
                {
                  id: "01",
                  title: "Eliminate Data Leakage",
                  desc: "Provide a secure, internal alternative to public platforms. Ensure that sensitive company secrets and proprietary ideas are never uploaded to the public web.",
                },
                {
                  id: "02",
                  title: "Zero-Retention Processing",
                  desc: "Break free from data harvesting concerns. QTalk processes your information locally, ensuring your inputs are never used to improve a third-party’s AI or leaked into global training sets.",
                },
                {
                  id: "03",
                  title: "Unrestricted Internal Context",
                  desc: " Because QTalk lives inside your network, you can safely interact with confidential project data and internal documents that are too high-risk for cloud-based assistants.",
                },
                {
                  id: "04",
                  title: "Sovereign AI Infrastructure",
                  desc: "Maintain 100% physical custody of your intelligence. From the server rack to the chat window, you own the entire lifecycle of your organization’s AI interactions.",
                },
              ].map((feature) => (
                <div key={feature.id} className="flex gap-4 items-start">
                  <span className="font-lovelo1 text-iris shrink-0 text-lg">
                    {feature.id}.
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-lovelo1 text-lg leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-xs">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
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
                  head: "Corporate Strategy & Innovation",
                  sub_head: "For Senior Executive Leadership",
                  useCase: "Sovereign Anti-Money Laundering (AML) Forensics",
                  scenario:
                    'A director discusses a sensitive European expansion plan or a "What-If" merger scenario. Unlike public AI, QChat provides high-level reasoning while keeping every conversation log strictly on the company’s own servers, ensuring that top-secret corporate strategies never leave the internal network.',
                },
                {
                  head: "Internal Legal & Compliance",
                  sub_head: "For Legal Counsel & HR Leads",
                  useCase: "Confidential Policy & Contract Advisory",
                  scenario:
                    'An employee asks QChat to clarify complex internal labor policies or draft a sensitive contract amendment. The interaction remains private and audit-ready within the company\'s firewall, providing a secure alternative to ChatGPT that prevents proprietary internal rules and PII from being leaked to external training sets.',
                },
                {
                  head: "Technical Research & Development",
                  sub_head: "For Engineering & R&D Leads",
                  useCase: "Secure Technical Knowledge Partner",
                  scenario:
                    'A developer uses QChat to brainstorm system architectures or debug complex code logic. Because the assistant runs entirely on-premise, the company’s core intellectual property and proprietary technical designs are never uploaded to a cloud, allowing for high-speed technical problem-solving with total data privacy.',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              title: "Sovereign Infrastructure",
              desc: "QTalk is built for air-gapped or private network environments. Unlike public chatbots, it does not phone home to external AI providers, keeping your sensitive corporate prompts invisible to the outside world.",
              metric: "Breaking the Cloud Dependency.",
            },
            {
              title: "Cross‑Format Intelligence",
              desc: "Your data stays within your walls. QTalk ensures that your proprietary insights are never shared with external entities, preventing your competitors from ever benefiting from your institutional knowledge.",
              metric: "Total IP Insulation",
            },
            {
              title: "Audit-Ready Traceability",
              desc: "Built for accountability. Every interaction is logged within your secure network, providing a full internal audit trail of how AI is being utilized across the organization without ever exposing that data to the public cloud.",
              metric: "100% Internal Visibility.",
            },
          ].map((item, idx) => {
            const highlightText = (text: string) => {
              const keywords = ["phone home"];

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
              <div
                key={idx}
                className="p-8 rounded-2xl bg-iris/10 border border-iris/20 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="font-lovelo1 text-xl">{item.title}</h3>
                <p className="text-gray-500 text-sm grow">{item.desc}</p>
                <p className="text-iris font-bold text-sm uppercase tracking-widest mt-2">
                  {highlightText(item.metric)}
                </p>
              </div>
            );
          })}
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
