import { useState, useRef } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { IoCloudOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoIosRefresh, IoIosDesktop } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

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

export default function Visual() {
  const [ended, setEnded] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,            // only show videos from your channel
      modestbranding: 1, // minimal YouTube branding
      controls: 1,       // keep playback controls
      showinfo: 0,
    },
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  const replayVideo = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // restart from beginning
      playerRef.current.playVideo(); // play again
      setEnded(false); // hide overlay
    }
  };

  return (
    <div
      className="md:h-screen pt-20 md:pt-0 back px-2 flex flex-col justify-center items-center"
      id="samples"
    >
      <div className="relative h-55 w-[90%] md:h-[75%] md:w-[69%] p-2 border-3 rounded-lg border-[#5d3fd326] shadow-[0_14px_50px_#5d3fd326] flex justify-center items-center cursor-pointer">
        <YouTube
          videoId="yCAxL1BBH20"
          className="w-full h-full"
          opts={opts}
          onReady={onReady}
          onEnd={() => setEnded(true)}
        />
        {ended && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
            <p className="text-white text-lg mb-4">Thanks for watching!</p>
            <button
              onClick={replayVideo}
              className="px-4 py-2 cursor-pointer bg-[#5D3FD3] text-white rounded-lg shadow-lg hover:bg-[#4a2fb3] transition"
            >
              watch again
            </button>
          </div>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="hidden justify-evenly md:flex md:w-[60%] mt-5"
      >
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <IoLockClosedOutline className="h-7 w-7 text-[#5D3FD3]" />
          <p>Zero Data outbound</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <IoIosDesktop className="h-7 w-7 text-[#5D3FD3]" />
          <p>Deploy anywhere</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <FaShieldAlt className="h-7 w-7 text-[#5D3FD3]" />
          <p>Full Audit Control</p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3 items-center">
          <IoIosRefresh className="h-7 w-7 text-[#5D3FD3]" />
          <p>Intelligence Updates</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
