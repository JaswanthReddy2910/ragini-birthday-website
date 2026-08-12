import { motion } from "framer-motion";

export default function MemoryCard({ memory, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={memory.image}
        alt={memory.title}
        className="story-image"
        onClick={onClick}
      />

      <p className="story-date">
        {memory.date}
      </p>

      <h1 className="story-title">
        {memory.title}
      </h1>

      <p className="story-description">
        {memory.description}
      </p>
    </motion.div>
  );
}