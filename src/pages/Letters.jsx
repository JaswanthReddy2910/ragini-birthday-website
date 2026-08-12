import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import letters from "../data/letters";
import LetterCard from "../components/LetterCard";

export default function Letters() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section className="letters-page">
      <h1 className="letters-title">
        Open When... 💌
      </h1>

      <p className="letters-subtitle">
        Every envelope holds a little piece of my heart.
      </p>

      <div className="letters-grid">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            letter={letter}
            onClick={() => setSelectedLetter(letter)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="letter-modal"
            onClick={() => setSelectedLetter(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="letter-paper"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 80,
                scale: 0.95,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <button
                className="close-letter"
                onClick={() => setSelectedLetter(null)}
              >
                ✕
              </button>

              <h2>{selectedLetter.title}</h2>

              <p>{selectedLetter.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-nav">
        <Link to="/videos">← Videos</Link>

        <Link to="/">🏠 Home</Link>

        <Link to="/wishes">Wishes →</Link>
      </div>
    </section>
  );
}