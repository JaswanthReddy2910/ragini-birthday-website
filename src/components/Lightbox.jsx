import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt=""
            className="lightbox-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-close"
            onClick={onClose}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}