import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-subtitle">
          PRESENTING...
        </p>

        <h1 className="hero-title">
          Happy 20<sup>th</sup> Birthday
        </h1>

        <h2 className="hero-name">
          Ragini ❤️
        </h2>

        <p className="hero-description">
          Every memory has a story.
          <br />
          Every story deserves to be celebrated.
        </p>

        <Link to="/story" className="hero-button">
          Begin Our Story →
        </Link>

        <p className="hero-note">
          Made with ❤️ especially for you.
        </p>
      </motion.div>
    </section>
  );
}