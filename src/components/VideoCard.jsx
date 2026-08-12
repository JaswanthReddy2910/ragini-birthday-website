import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function VideoCard({ video, onClick }) {
  return (
    <motion.div
      className="video-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
    >
      <div className="video-thumbnail">
        <img
          src={video.thumbnail}
          alt={video.title}
        />

        <div className="video-overlay">
          <motion.div
            className="play-button"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPlay className="play-icon" />
          </motion.div>
        </div>
      </div>

      <div className="video-info">
        <h2>{video.title}</h2>

        <p>{video.description}</p>

        <span className="video-watch">
          Watch Memory →
        </span>
      </div>
    </motion.div>
  );
}