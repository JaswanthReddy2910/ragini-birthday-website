import { motion } from "framer-motion";

export default function WishCard({ wish }) {
  return (
    <motion.div
      className="wish-card"
      initial={{ opacity: 0, y: 35 }}
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
        className="wish-icon"
        whileHover={{
          rotate: -10,
          scale: 1.18,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        🎂
      </motion.div>

      <h2>{wish.title}</h2>

      <p>{wish.message}</p>
    </motion.div>
  );
}