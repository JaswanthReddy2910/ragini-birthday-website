import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoPlayer({ video, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!video || !videoRef.current) return;

    const player = videoRef.current;

    player.currentTime = 0;
    player.volume = 1;
    player.muted = false;

    const playVideo = async () => {
      try {
        await player.play();
      } catch (error) {
        console.log(
          "Autoplay with sound was blocked. Press play to start the video."
        );
      }
    };

    playVideo();
  }, [video]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="video-container"
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="video-close"
              onClick={onClose}
              aria-label="Close video"
            >
              ✕
            </button>

            <video
  ref={videoRef}
  className="video-player"
  controls
  playsInline
  preload="auto"
  poster={video.thumbnail}
>
  <source
    src={video.video}
    type="video/mp4"
  />

  Your browser does not support the video tag.
</video>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}