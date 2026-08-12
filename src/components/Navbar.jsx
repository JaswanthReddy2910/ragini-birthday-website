import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ❤️ Ragini
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/story">Story</NavLink>

        <NavLink to="/videos">Videos</NavLink>

        <NavLink to="/letters">Letters</NavLink>

        <NavLink to="/wishes">Wishes</NavLink>

        <NavLink to="/finale">Finale</NavLink>

      </div>

    </nav>
  );
}