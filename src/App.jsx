import { Routes, Route } from "react-router-dom";

import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Videos from "./pages/Videos";
import Letters from "./pages/Letters";
import Wishes from "./pages/Wishes";
import Finale from "./pages/Finale";

function App() {
  return (
    <>
      <StarsBackground />
      <Navbar />
      <MusicPlayer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/finale" element={<Finale />} />
      </Routes>
    </>
  );
}

export default App;