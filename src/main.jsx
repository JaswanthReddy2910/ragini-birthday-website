import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/cards.css";
import "./styles/animations.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/wishes.css";
import "./styles/finale.css";
import "./styles/music.css";

import App from "./App";

import "./styles/global.css";
import "./styles/home.css";
import "./styles/story.css";
import "./styles/videos.css";
import "./styles/letters.css";
import "./styles/finale.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);