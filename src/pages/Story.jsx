import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import memories from "../data/memories";

export default function Story() {
  const [current, setCurrent] = useState(0);

  const nextMemory = () => {
    if (current < memories.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevMemory = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const memory = memories[current];

  return (
    <section className="story-page">
      <AnimatePresence mode="wait">
        <motion.div
          key={memory.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <p className="story-count">
            Memory {current + 1} of {memories.length}
          </p>
          <div className="story-progress">
  <div
    className="story-progress-fill"
    style={{
      width: `${((current + 1) / memories.length) * 100}%`,
    }}
  ></div>
</div>

          <img
            src={memory.image}
            alt={memory.title}
            className="story-image"
          />

          <p className="story-date">{memory.date}</p>

          <h1 className="story-title">{memory.title}</h1>

          <p className="story-description">
            {memory.description}
          </p>

          <div className="story-buttons">
            <button
              onClick={prevMemory}
              disabled={current === 0}
            >
              ← Previous
            </button>

            {current === memories.length - 1 ? (
              <Link to="/videos" className="next-link">
                Continue →
              </Link>
            ) : (
              <button onClick={nextMemory}>
                Next →
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}