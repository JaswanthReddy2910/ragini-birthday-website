import { motion } from "framer-motion";

export default function LetterCard({ letter, onClick }) {
  return (
    <motion.div
      className="letter-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.04,
        rotateX: 6,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
    >
      <motion.div
        className="letter-icon"
        whileHover={{
          rotate: -8,
          scale: 1.18,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        {letter.icon}
      </motion.div>

      <h2 className="letter-title">{letter.title}</h2>

      <p className="letter-open">
        Open Letter →
      </p>
    </motion.div>
  );
}