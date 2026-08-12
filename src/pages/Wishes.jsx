import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import wishes from "../data/wishes";
import WishCard from "../components/WishCard";

export default function Wishes() {
  return (
    <section className="wishes-page">
      <motion.h1
        className="wishes-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Birthday Wishes 🎂
      </motion.h1>

      <motion.p
        className="wishes-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A few words from my heart.
      </motion.p>

      <div className="wishes-grid">
        {wishes.map((wish) => (
          <WishCard
            key={wish.id}
            wish={wish}
          />
        ))}
      </div>

      <div className="page-nav">
        <Link to="/letters">
          ← Letters
        </Link>

        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/finale">
          Final Surprise →
        </Link>
      </div>
    </section>
  );
}